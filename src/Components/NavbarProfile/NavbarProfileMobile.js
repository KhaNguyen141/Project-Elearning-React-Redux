import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom';
import { settings } from '../../Config/settings';
import { userCheckCourse } from '../../Redux/Action/User/UserActions';
import { connect } from 'react-redux';

class NavbarProfileMobile extends Component {

    render() {

        const {taiKhoan} = this.props.credentials;

        let drawerClasses = 'profileSideDrawer';
        if (this.props.showProfileMenu) {
            drawerClasses = 'profileSideDrawer open';

        }
        
        return (

            <nav className={drawerClasses}>
                <ul>
                    <div className="profileMenuContainer">
                   
                        <div onClick={this.props.click} className="profileMenuContainer__header d-flex">
                            <h5>Profile</h5>
                        </div> 
                  
                    </div>
                    <div className="navbarProfileSection">
                        <hr class="divisionBorder"></hr>
                        <div className="navbarProfileSection">
                            <li>
                                <a>Profile</a>
                            </li>
                        </div>
                        <hr class="divisionBorder"></hr>
                    </div>
                    <div className="menuProfileContent">
                        <li><NavLink to="/profile">My profile</NavLink></li>
                        <li><NavLink to="/my-course" onClick={() => this.handleCheckCourse(taiKhoan)}>My courses</NavLink></li>
                        <li onClick={this.handleLogout}>Log out</li>

                    </div>
                        
                </ul>
            </nav>
        )
    }

    handleCheckCourse = (taiKhoan, matKhau) => {
        this.props.dispatch(userCheckCourse(taiKhoan, matKhau))
      }

    handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem(settings.userLogin);
        window.location.replace("/home");
      
      }
}

const mapStateToProps = (state) => ({
    credentials: state.userReducer.credentials,
    courseCategory: state.courseReducer.courseListCategory,
    course: state.courseReducer.courses,
    text: state.courseReducer.text,
});

export default withRouter(connect(mapStateToProps)(NavbarProfileMobile));
