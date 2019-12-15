import React, { Component } from "react";
import { NavLink } from "react-router-dom"; //Thư viện thẻ link (thay thế thẻ <a></a>)
import { connect } from "react-redux";
import { Formik, Field, Form } from 'formik';

// Import function layout
import Login from "./UserAction/Login";
import Register from "./UserAction/Register";
import CartModal from "./CartModal";

import {fetchListCategory, fetchCoursePending, fetchCoursesByID} from "../Redux/Action/Course/CourseAction"
import { settings } from "../Config/settings";

class HeaderComponent extends Component {

  render() {
    return (
      <header className="udemyNavbar">
        <nav className="header__navbar navbar navbar-expand-lg navbar-light">
         
          <div className="header__left col-11 col-sm-11 col-md-9 col-lg-8 col-xl-9">
            <div className="row">
              <NavLink className="navbar-brand" to="/home">
                <img src="./img/CybersoftLogo.png" />
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
                        to={`/coursecategories/${list.maDanhMuc}`} 
                        handleShowCourseByID={handleShowCourseByID} 
                        key={index} 
                        list={list} 
                        className="dropdown-item">{list.tenDanhMuc}</NavLink>
                      )
                    })}
                  </div>
                  
              </div>
              </div> 
              <form className="formSearch">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Tìm khóa học" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">
                      <i className="fa fa-search" />
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="header__right col-1 col-sm-1 col-md-3 col-lg-4 col-xl-3">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item mr-2">
                  <a type="submit" className="icon-shopping">
                    
                    <i className="fa fa-shopping-cart" data-toggle="modal" data-target="#cartModal"/>
                  </a>
                </li>

              {this.props.credentials ? (
              <li className="nav-item dropdown">
                  <div className="dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Hello, {this.props.credentials.hoTen}
                  </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <NavLink to="/profile" className="dropdown-item">Profile</NavLink>
                <button className="dropdown-item" onClick={handleLogout}>Đăng xuất</button>

                  <a className="dropdown-item" href="#">
                      My course
                  </a>
                  
                </div>
              </div>
              </li> 
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
          
        </nav>

      </header>
    );
  }

  componentDidMount() {
    this.props.dispatch( fetchListCategory() )

  }
}

const handleShowCourseByID = (maDanhMuc, e) => {
  e.preventDefault();
  this.props.dispatch( fetchCoursesByID(maDanhMuc) )

}

const handleLogout = (e) => {
  e.preventDefault();
  localStorage.removeItem(settings.userLogin);
  window.location.replace("/home");
 
}

const mapStateToProps = (state) => ({
  credentials: state.userReducer.credentials,
  courseCategory: state.courseReducer.courseListCategory
});

export default connect(mapStateToProps)(HeaderComponent);
