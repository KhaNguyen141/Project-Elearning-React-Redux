import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom"; //Thư viện thẻ link (thay thế thẻ <a></a>)
import { connect } from "react-redux";
import "../../App.scss";

// Import function layout
import Login from "../UserAction/Login";
import Register from "../UserAction/Register";
import CartModal from "../CartModal/CartModal";

import { settings } from "../../Config/settings";
import { userCheckCourse, userCheckCourseApproved } from "../../Redux/Action/User/UserActions";
import { fetchListCategory, searchCourse, fetchCourseSearch } from "../../Redux/Action/Course/CourseAction";

import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../Backdrop/Backdrop";
import DrawerToggleButton from "../../Components/ToggleButton/DrawerToggleButton";
import SearchBoxMobile from '../SearchBox/SearchBoxMobile';
import SearchToggleButton from "../../Components/ToggleButton/SearchToggleButton";

class HeaderComponent extends Component {

  constructor() {
    super();
    this.state = {
      sideDrawerOpen: false,
      searchBoxOpen: false,
      modalLoginIsOpen: false,
      modalSignUpIsOpen: false

    };
  }

  render() {
    const { taiKhoan, matKhau } = this.props.credentials;

    console.log(this.props.coursePending)

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    if (this.state.searchBoxOpen) {
      backdrop = <Backdrop click={this.backdropSearchClickHandler} />;
    }

    return (
      <header className="udemyNavbar container">
        <SearchBoxMobile showSearchBox={this.state.searchBoxOpen} searchClick={this.searchToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}

        <nav className="header__navbar navbar navbar-expand-md navbar-light">

          <div className="header__left col-9 col-sm-10 col-md-8 col-lg-9 col-xl-9">
            <div className="row">
              <NavLink className="navbar-brand header__logo" to="/home">
                <img src="/img/CybersoftLogo.png" alt="header logo" />
              </NavLink>

              <DrawerToggleButton click={this.drawerToggleClickHandler} />

              <SearchToggleButton searchClick={this.searchToggleClickHandler} />

              <div className="nav-item navbar-toggle mr-3 categories">
                <div className="dropdown">
                  <div className="nav-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-th mr-2" />
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
                  <a href="!#" onClick={this.onSubmit} type="submit" className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">
                      <i className="fa fa-search" />
                    </span>
                  </a>
                </div>
              </form>
            </div>
          </div>

          <div className="header__right col-3 col-sm-2 col-md-4 col-lg-3 col-xl-3" >

            <div className="row">

              <ul className="navbar-nav mr-auto">
                {this.props.credentials ? (
                  <div className="d-flex">
                    <div className="nav-item navbar-toggle mr-3 header__right__shoppingCart">
                      <div className="shopingCart">
                        <CartModal />
                        <div className="icon-shopping" data-toggle="modal" data-target="#cartModal">
                        {
                          <i onClick={() => this.handleCheckCourse(taiKhoan, matKhau)} className={this.props.coursePending.length > 0 ? "fa fa-shopping-cart redNotice" : "fa fa-shopping-cart"} />
                        }
                        </div>
                      </div>
                    </div>

                    <li className="nav-item dropdown header__right__accountElement">
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

                    <li className="button-group loginSignupDivision d-flex">
                      <Login
                        isLoginOpen={this.state.modalLoginIsOpen}
                        switchRegister={() => this.openSignUpModal()}
                        isLoginClose={() => this.closeLoginModal()}
                      />
                      <div className="nav-link">
                        <button onClick={() => this.openLoginModal()} className="btn btn-udi-white buttonLogin">Log In</button>
                      </div>

                      <Register
                        isSignUpOpen={this.state.modalSignUpIsOpen}
                        switchLogin={() => this.openLoginModal()}
                        isSignUpClose={() => this.closeSignUpModal()} />
                      <div className="nav-link">
                        <button onClick={() => this.openSignUpModal()} className="btn btn-udi-yellow buttonSignUp">Sign up</button>
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

  openLoginModal() {
    this.setState({
      modalLoginIsOpen: true,
      modalSignUpIsOpen: false
    });
  }

  openSignUpModal() {
    this.setState({
      modalSignUpIsOpen: true,
      modalLoginIsOpen: false
    });
  }

  closeLoginModal() {
    this.setState({ modalLoginIsOpen: false });
  }

  closeSignUpModal() {
    this.setState({ 
      modalSignUpIsOpen: false 
    });
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  searchToggleClickHandler = () => {
    this.setState((prevState) => {
      return { searchBoxOpen: !prevState.searchBoxOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false,

    });
  };

  backdropSearchClickHandler = () => {
    this.setState({
      searchBoxOpen: false,

    });
  };

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
  coursePending: state.userReducer.userCheckCourse,
  courseSearch: state.courseReducer.courseSearch
});

export default withRouter(connect(mapStateToProps)(HeaderComponent));
