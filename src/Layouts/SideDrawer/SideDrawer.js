import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import NavbarProfileMobile from '../../Components/NavbarProfile/NavbarProfileMobile';
import Login from '../UserAction/Login';
import Register from '../UserAction/Register';
import Backdrop from '../Backdrop/Backdrop';

class SideDrawer extends Component {

  constructor() {
    super();
    this.state = {
      profileDrawerOpen: false,
      modalLoginIsOpen: false,
      modalSignUpIsOpen: false
    };
  }

  render() {

    let drawerClasses = 'side-drawer';
    if (this.props.show) {
      drawerClasses = 'side-drawer open';

    }

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <nav className={drawerClasses}>
        <NavbarProfileMobile showProfileMenu={this.state.profileDrawerOpen} click={this.profleToggleClickHandler} />
        {backdrop}
        <ul>
          <div className="navbarProfileContainer">
            {this.props.credentials ? (
              <div onClick={this.profleToggleClickHandler} className="navbarProfileContainer__profileName d-flex">
                <h5>Hi, {this.props.credentials.hoTen}</h5>
                <i className="fas fa-chevron-right"></i>
              </div>
            ) : (
                <div className="navbarProfileContainer__loginSignupDivision d-flex">
                  <Login
                    isLoginOpen={this.state.modalLoginIsOpen}
                    switchRegister={() => this.openSignUpModal()}
                    isLoginClose={() => this.closeLoginModal()}
                  />

                  <Register
                    isSignUpOpen={this.state.modalSignUpIsOpen}
                    switchLogin={() => this.openLoginModal()}
                    isSignUpClose={() => this.closeSignUpModal()} />

                  <div onClick={() => this.openSignUpModal()} className="navbarProfileContainer__signUpButton" data-toggle="modal" data-target="#modalRegister">Sign up</div>
                  <span>/</span>


                  <div onClick={() => this.openLoginModal()} className="ml-2 navbarProfileContainer__login" data-toggle="modal" data-target="#modalLogin">Log in</div>
                </div>
              )}
          </div>
          <hr className="divisionBorder"></hr>
          <div className="navbarProfileSection">
            <li>
              <h5>Category</h5>
            </li>
          </div>
          <hr className="divisionBorder"></hr>
          {this.props.courseCategory
            .sort((a, b) => a.tenDanhMuc.localeCompare(b.tenDanhMuc))
            .map((list, index) => {
              return (
                <div key={index} className="categoryList">
                  <li className="d-flex">
                    <NavLink
                      to={{
                        pathname: `/coursecategories/${list.maDanhMuc}`, courseID: list.tenDanhMuc

                      }}

                      key={index}
                    >{list.tenDanhMuc}</NavLink>
                    <span><i className="fas fa-chevron-right"></i></span>
                  </li>

                </div>

              )
            })}
        </ul>

      </nav>
    )
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
    this.setState({ modalSignUpIsOpen: false });
  }

  profleToggleClickHandler = () => {
    this.setState((previousState) => {
      return { profileDrawerOpen: !previousState.profileDrawerOpen };
    });
  }

}

const mapStateToProps = (state) => ({
  credentials: state.userReducer.credentials,
  courseCategory: state.courseReducer.courseListCategory,
  text: state.courseReducer.text,
});

export default connect(mapStateToProps)(SideDrawer);
