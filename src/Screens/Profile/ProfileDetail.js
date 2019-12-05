import React, { Component } from 'react'
import { connect } from 'react-redux';
import { userProfileAction } from '../../Redux/Action/User/UserActions';
import Axios from 'axios';

class ProfileDetailComponent extends Component {

    constructor() {
        super();
        let userProfile = JSON.parse(localStorage.getItem('userLogin'));
        this.state = {
            userProfile: userProfile,
        };
    }

    render() {
        
        const {taiKhoan, matKhau, hoTen, soDT, email} = this.state.userProfile;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://blog.techiehunter.org/wp-content/uploads/2018/09/product_16032_product_shot_wide_image.jpg" className="card-img-top" alt="profile picture" />
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <div>
                                    <a href="#">Profile</a>
                                </div>
                                <div>
                                    <a href="#">Course Registered</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div class="card text-center">
                        <form>
                            <div>
                                <div className="card-header">
                                    <h2>Public profile</h2>
                                    <p>Add information about yourself</p>
                                </div>
                                
                                <div className="card-body text-left">
                                    
                                        <div>
                                            <div className="form-group">
                                                <label>Họ tên: </label>
                                                <input name="hoTen" type="text" value={hoTen} className="form-control" placeholder="Họ tên" />
                                            </div>
                                            <div className="form-group">
                                                <label>Email: </label>
                                                <input name="email" type="email" value={email} className="form-control" placeholder="Email" />
                                            </div>
                                            <div className="form-group">
                                                <label>Số điện thoại: </label>
                                                <input name="soDT" type="text" value={soDT} className="form-control" placeholder="Số điện thoại" />
                                            </div>
                                            <div className="form-group">
                                                <label>Tài khoản: </label>
                                                <input name="taiKhoan" type="text" value={taiKhoan} className="form-control" placeholder="Tài khoản" />
                                            </div>
                                            <div className="form-group">
                                                <label>Mật khẩu: </label>
                                                <input name="matKhau" type="text" className="form-control" placeholder="Mật khẩu" />
                                            </div>
                                        </div>
                                    
                                </div>
                                        <div className="card-footer text-muted">
                                            <button className="btn btn-udi-yellow">Update profile</button>    
                                        </div>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </div>
        )
    }
}

export default (ProfileDetailComponent);