import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import NavbarProfileMobile from '../../Components/NavbarProfile/NavbarProfileMobile';

class SideDrawer extends Component {

    state = {
        profileDrawerOpen: false,
    }

    profleToggleClickHandler = () => {
        this.setState((previousState) => {
          return {profileDrawerOpen: !previousState.profileDrawerOpen};
        });
    }

    render() {

        let drawerClasses = 'side-drawer';
        if (this.props.show) {
            drawerClasses = 'side-drawer open';

        }

        return (
            <nav className={drawerClasses}>
                <NavbarProfileMobile showProfileMenu={this.state.profileDrawerOpen} click={this.profleToggleClickHandler}/>
                <ul>
                    <div className="navbarProfileContainer">
                    {this.props.credentials ? (
                        <div onClick={this.profleToggleClickHandler} className="navbarProfileContainer__profileName d-flex">
                            <h5>Hi, {this.props.credentials.hoTen}</h5>
                            <i class="fas fa-chevron-right"></i>
                        </div> 
                    ) : (
                        <div className="navbarProfileContainer__loginSignupDivision d-flex">
                            <a className="mr-2" data-toggle="modal" data-target="#modalRegister">Sign up</a> 
                            <span>/</span> 
                            <a className="ml-2" data-toggle="modal" data-target="#modalLogin">Log in</a>
                        </div>
                    )}
                    </div>
                    <hr class="divisionBorder"></hr>
                    <div className="navbarProfileSection">
                        <li>
                            <a>Category</a>
                        </li>
                    </div>
                    <hr class="divisionBorder"></hr>
                    {this.props.courseCategory
                    .sort((a, b) => a.tenDanhMuc.localeCompare(b.tenDanhMuc))
                    .map((list, index) => {
                        return (
                            <div className="categoryList">
                                <li className="d-flex">
                                    <NavLink
                                        to={{
                                            pathname: `/coursecategories/${list.maDanhMuc}`, courseID: list.tenDanhMuc

                                        }}

                                        key={index}
                                        >{list.tenDanhMuc}</NavLink>
                                        <span><i class="fas fa-chevron-right"></i></span>
                                </li>
                                
                            </div>
                            
                        )
                    })}
                </ul>
                
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    credentials: state.userReducer.credentials,
    courseCategory: state.courseReducer.courseListCategory,
    text: state.courseReducer.text,
  });

export default connect(mapStateToProps)(SideDrawer);
