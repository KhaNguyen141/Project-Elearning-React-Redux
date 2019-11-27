import React, { Component } from "react";
import { NavLink } from "react-router-dom"; //Thư viện thẻ link (thay thế thẻ <a></a>)
import { connect } from "react-redux";

class HeaderComponent extends Component {
  render() {
    return (

      <header className="udemyNavbar container">
        <nav className="header__navbar navbar navbar-expand-md navbar-light">
          <div className="header__left col-11 col-sm-11 col-md-9 col-lg-8 col-xl-6">
            <div className="row">
              <NavLink className="navbar-brand" to="/home">
                <img src="./img/CybersoftLogo.png" alt />
              </NavLink>
              <div className="mr-3 categories"><i className="fa fa-th mr-2" />Danh sách khóa học</div>
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
          <div className="header__right col-1 col-sm-1 col-md-3 col-lg-4 col-xl-6">
            <div className="collapse navbar-collapse" id="collapsibleNavID">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item mr-2">
                  <a className="icon-shopping" href="#">
                    <i className="fa fa-shopping-cart" />
                  </a>
                </li>
              {this.props.credentials ? (
              
              <li className="nav-item">
                <span className="nav-link text-black">
                  Hello, {this.props.credentials.hoTen}
                </span>
              </li> 
              ) : (
                
                <li className="button-group d-flex">
                <NavLink 
                className="nav-link"
                to="/login">
                  <button className="btn btn-udi-white mr-2" data-toggle="modal" data-target="#modalLogin">Đăng nhập</button>
                  <button className="btn btn-udi-yellow" data-toggle="modal" data-target="#modalRegister">Đăng ký</button>
                </NavLink>
                </li>
              )}
              </ul>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
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
}

const mapStateToProps = state => ({
  credentials: state.user.credentials
});

export default connect(mapStateToProps)(HeaderComponent);
