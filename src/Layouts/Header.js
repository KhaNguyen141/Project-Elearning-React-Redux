import React, { Component } from "react";
import { NavLink } from "react-router-dom"; //Thư viện thẻ link (thay thế thẻ <a></a>)
import { connect } from "react-redux";
import CourseService from "../Services/courseService";

// Import function layout
import Login from "../Screens/Login/Login";
import Register from "../Screens/Register/Register";
import { FETCH_LIST_CATEGORY } from "../Redux/Action/type";
import reduxAction from "../Redux/Action/action";
import CartModal from "./CartModal";

const courseService = new CourseService();

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
                        <NavLink to={`/coursecategories/${list.maDanhMuc}`} key={index} list={list} className="dropdown-item">{list.tenDanhMuc}</NavLink>
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
                  <a className="icon-shopping">
                    <CartModal />
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

      // <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      //   <NavLink className="navbar-brand" to="/">
      //     CYBERSOFT
      //   </NavLink>
      //   <button
      //     className="navbar-toggler d-lg-none"
      //     type="button"
      //     data-toggle="collapse"
      //     data-target="#collapsibleNavId"
      //     aria-controls="collapsibleNavId"
      //     aria-expanded="false"
      //     aria-label="Toggle navigation"
      //   />
      //   <div className="collapse navbar-collapse" id="collapsibleNavId">
      //     <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      //       <li className="nav-item active">
      //         <NavLink
      //           className="nav-link"
      //           to="/home"
      //           activeClassName="bg-success"
      //         >
      //           Home <span className="sr-only">(current)</span>
      //         </NavLink>
      //       </li>
      //       <li className="nav-item">
      //         <NavLink
      //           className="nav-link"
      //           to="/coursedetail"
      //           activeClassName="bg-success"
      //         >
      //           CourseDetail
      //         </NavLink>
      //       </li>
      //       <li className="nav-item">
      //         <NavLink
      //           className="nav-link"
      //           to="/demohoc"
      //           activeClassName="bg-success"
      //         >
      //           HOC
      //         </NavLink>
      //       </li>
      //     </ul>
      //     <ul className="navbar-nav">
      //       {this.props.credentials ? (
      //         <li className="nav-item">
      //           <span className="nav-link text-white">
      //             Hi, {this.props.credentials.hoTen}
      //           </span>
      //         </li>
      //       ) : (
              // <li className="nav-item">
              //   <NavLink
              //     className="nav-link"
              //     to="/login"
              //     activeClassName="bg-success"
              //   >
              //     Login
              //   </NavLink>
              // </li>
      //       )}
      //     </ul>
      //   </div>
      // </nav>
    );
  }

  componentDidMount() {
    courseService
      .fetchListCategory()
      .then(res => {
        this.props.dispatch(reduxAction(FETCH_LIST_CATEGORY, res.data));
        
      })
      .catch(err => {
        console.log(err);
      });
      
  }

  componentDidUpdate(prevProps) {
      //call api lấy danh sách khoá học
      
      courseService
        .fetchListCategory()
        .then(res => {
          this.props.dispatch(reduxAction(FETCH_LIST_CATEGORY, res.data));
        })
        .catch(err => {
          console.log(err);
        });
    }
}

const handleLogout = (e) => {
  e.preventDefault();
  localStorage.clear();
  window.location.href = "/home";
}

const mapStateToProps = state => ({
  credentials: state.user.credentials,
  courseList: state.courseList,
  courseCategory: state.courseCategory
});

export default connect(mapStateToProps)(HeaderComponent);
