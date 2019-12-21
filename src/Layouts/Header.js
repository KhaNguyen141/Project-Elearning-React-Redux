import React, { Component, useState, useEffect } from "react";
import { NavLink, Link, withRouter, Redirect } from "react-router-dom"; //Thư viện thẻ link (thay thế thẻ <a></a>)
import { connect, useDispatch } from "react-redux";
import "../App.scss";

// Import function layout
import Login from "./UserAction/Login";
import Register from "./UserAction/Register";
import CartModal from "./CartModal";

import { settings } from "../Config/settings";
import { userCheckCourse } from "../Redux/Action/User/UserActions";
import { fetchListCategory, searchCourse, fetchCourseSearch } from "../Redux/Action/Course/CourseAction";

class HeaderComponent extends Component {

  render() {

  const {taiKhoan, matKhau} = this.props.credentials;
  
  const {tenKhoaHoc} = this.props.course;
 
  return (
    <header className="udemyNavbar container">
          <nav className="header__navbar navbar navbar-expand-lg navbar-light">

            <div className="header__left col-md-7">
              <div className="row">
                <NavLink className="navbar-brand" to="/home">
                  <img src="/img/CybersoftLogo.png" />
                </NavLink>
                <div className="nav-item navbar-toggle mr-3 categories">
                  <div className="dropdown">
                    <a className="nav-link" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-th mr-2" />
                      Danh sách khoá học
                  </a>
                    <div className="dropdown-menu">
                      {this.props.courseCategory
                        .sort((a, b) => a.tenDanhMuc.localeCompare(b.tenDanhMuc))
                        .map((list, index) => {

                          return (
                            <NavLink
                              to={{
                                pathname: `/coursecategories/${list.maDanhMuc}`, courseID: list.tenDanhMuc

                              }}
                              
                              key={index}
                              className="dropdown-item">{list.tenDanhMuc}</NavLink>
                          )
                        })}
                    </div>

                  </div>
                </div>

                <form className="formSearch" onSubmit={this.onSubmit}>
                  <div className="input-group">
                      <input 
                      type="text" 
                      name="searchText" 
                      className="form-control" 
                      placeholder="Tìm khóa học" 
                      onChange={this.onChange}
                     />
                      <Link to={`/timkiem/${this.props.text}`} onClick={this.onSubmit} type="submit" className="input-group-append">
                          <span className="input-group-text" id="basic-addon2">
                              <i className="fa fa-search"/>
                          </span>
                      </Link>
                  </div>
                </form>

              </div>
            </div>

            <div className="header__right col-md-5 ml-3" style={{marginTop: "-3px"}}>
              <div className="row">
               
              <ul className="navbar-nav mr-auto">
              {this.props.credentials ? (
              <div className="d-flex">
                    <div className="nav-item navbar-toggle mr-3">
                      <div className="shopingCart">
                        <CartModal />
                        <a className="icon-shopping" data-toggle="modal" data-target="#cartModal">
                          <i onClick={() => this.handleCheckCourse(taiKhoan, matKhau)} className="fa fa-shopping-cart" />
                        </a>
                      </div>
                    </div>

                    <li className="nav-item dropdown">
                      <div className="dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Hello, {this.props.credentials.hoTen}
                        </a>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <NavLink to="/profile" className="dropdown-item">Profile</NavLink>
                          <button className="dropdown-item" onClick={this.handleLogout}>Đăng xuất</button>

                          <a className="dropdown-item" href="#">
                            My course
                        </a>

                        </div>
                      </div>
                    </li>
              </div>
              ) : (
                
                <li className="button-group d-flex">
                <Login />
                <div className="nav-link">
                    <button className="btn btn-udi-white mr-2" data-toggle="modal" data-target="#modalLogin">Đăng nhập</button>
                </div>
             
                <Register />
                <div className="nav-link">
                    <button className="btn btn-udi-yellow" data-toggle="modal" data-target="#modalRegister">Đăng ký</button>
                </div>
                </li>
               
              )}
              </ul>
              </div>
            </div>

          </nav>

      </header>

      );
    }
  
    componentDidMount() {
      this.props.dispatch(fetchListCategory())
    }

    onChange = (event) => {
      this.props.dispatch(searchCourse(event.target.value));
    }

    onSubmit = (event) => {
      event.preventDefault();
      this.props.dispatch(fetchCourseSearch(this.props.text))
      this.props.history.push(`/timkiem/${this.props.text}`)
    }

    handleCheckCourse = (taiKhoan, matKhau) => {
      // this.props.dispatch(userCheckCourse(taiKhoan, matKhau));
      this.props.dispatch(userCheckCourse(taiKhoan, matKhau))
    }

    handleLogout = (e) => {
      e.preventDefault();
      localStorage.removeItem(settings.userLogin);
      window.location.replace("/home");
    
    }
};

const mapStateToProps = (state) => ({
  credentials: state.userReducer.credentials,
  courseCategory: state.courseReducer.courseListCategory,
  course: state.courseReducer.courses,
  text: state.courseReducer.text,
});

export default withRouter(connect(mapStateToProps)(HeaderComponent));
