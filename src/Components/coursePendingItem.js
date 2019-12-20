import React, { Component } from 'react'
import { userCancelCourse } from '../Redux/Action/User/UserActions';
import { connect } from 'react-redux';

class CoursePendingItemComponent extends Component {
    render() {
       const {tenKhoaHoc, maKhoaHoc} = this.props.course;

       const { taiKhoan } = this.props.credentials;

        return (
            
            <div className="cyberCartModal row" >
                <div className="col-6">
                    <h2 className="card-text">Khoá học: {tenKhoaHoc}</h2>
                    <p>Người tạo: </p>
                </div>
                
                <div className="col-6" >
                    <button onClick={() => this.props.handleCancel(taiKhoan, maKhoaHoc)} className="btn btn-cyber-red">Huỷ</button>
                </div>
                
            </div> 
        )
    }

}

const mapStateToProps = (state) => ({
    credentials: state.userReducer.credentials,
    userCancelCourse: state.userReducer.userCancelCourse
})

const mapDispatchToProps = (dispatch) => {
    return {
        handleCancel: (taiKhoan, maKhoaHoc) => {
            dispatch(userCancelCourse(taiKhoan, maKhoaHoc));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePendingItemComponent);
