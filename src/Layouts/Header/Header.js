import React, { Component } from "react";
import { NavLink, Link, withRouter } from "react-router-dom"; //Thư viện thẻ link (thay thế thẻ <a></a>)
import { connect } from "react-redux";
import "../../App.scss";

// Import function layout
import Login from "../UserAction/Login";
import Register from "../UserAction/Register";
import CartModal from "../CartModal/CartModal";

import { settings } from "../../Config/settings";
import { userCheckCourse, userCheckCourseApproved } from "../../Redux/Action/User/UserActions";
import { fetchListCategory, searchCourse, fetchCourseSearch } from "../../Redux/Action/Course/CourseAction";

class HeaderComponent extends Component {

  render() {

  const {taiKhoan, matKhau} = this.props.credentials;
 
  return (
    <header className="udemyNavbar container">
          <nav className="header__navbar navbar navbar-expand-md navbar-light">

            <div className="header__left col-9 col-sm-10 col-md-8 col-lg-9 col-xl-9">
              <div className="row">
                <NavLink className="navbar-brand" to="/home">
                  <img src="/img/CybersoftLogo.png" alt="header logo"/>
                </NavLink>
                <div id="navbarNav" className="nav-item navbar-toggle mr-3 categories collapse navbar-collapse">
                  <div className="dropdown">
                      <div className="nav-link" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-th mr-2" />
                          Categories
                      </div>
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
                      placeholder="Search for course" 
                      onChange={this.onChange}
                     />
                      <Link to={`/page-result/${this.props.text}`} onClick={this.onSubmit} type="submit" className="input-group-append">
                          <span className="input-group-text" id="basic-addon2">
                              <i className="fa fa-search"/>
                          </span>
                      </Link>
                  </div>
                </form>

              </div>
            </div>

            <div className="header__right col-3 col-sm-2 col-md-4 col-lg-3 col-xl-3" >
         
          <button className="navbar-toggler header__right__responsiveButton" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
              <div id="navbarNav" className="collapse navbar-collapse row">
               
              <ul className="navbar-nav mr-auto">
              {this.props.credentials ? (
              <div className="d-flex">
                    <div className="nav-item navbar-toggle mr-3">
                      <div className="shopingCart">
                        <CartModal />
                        <div className="icon-shopping" data-toggle="modal" data-target="#cartModal">
                          <i onClick={() => this.handleCheckCourse(taiKhoan, matKhau)} className="fa fa-shopping-cart" />
                        </div>
                      </div>
                    </div>

                    <li className="nav-item dropdown">
                      <div className="dropdown">
                        <div className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Hello, {this.props.credentials.hoTen}
                        </div>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <NavLink to="/profile" className="dropdown-item">Profile</NavLink>
                          <NavLink to="/my-course" onClick={() => this.handleCheckCourseApproved(taiKhoan)} className="dropdown-item">My course</NavLink>
                          <button className="dropdown-item" onClick={this.handleLogout}>Log out</button>

                        </div>
                      </div>
                    </li>
              </div>
              ) : (
                
                <li className="button-group d-flex">
                <Login />
                <div className="nav-link">
                    <button className="btn btn-udi-white buttonLogin" data-toggle="modal" data-target="#modalLogin">Log In</button>
                </div>
             
                <Register />
                <div className="nav-link">
                    <button className="btn btn-udi-yellow buttonSignUp" data-toggle="modal" data-target="#modalRegister">Sign up</button>
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
      this.props.history.push(`/page-result/${this.props.text}`)
    }

    handleCheckCourse = (taiKhoan, matKhau) => {
      this.props.dispatch(userCheckCourse(taiKhoan, matKhau))
    }

    handleLogout = (e) => {
      e.preventDefault();
      localStorage.removeItem(settings.userLogin);
      window.location.replace("/home");
    
    }

    handleCheckCourseApproved = (taiKhoan) => {
      this.props.dispatch(userCheckCourseApproved(taiKhoan))
    }
};

const mapStateToProps = (state) => ({
  credentials: state.userReducer.credentials,
  courseCategory: state.courseReducer.courseListCategory,
  course: state.courseReducer.courses,
  text: state.courseReducer.text,
});

export default withRouter(connect(mapStateToProps)(HeaderComponent));
