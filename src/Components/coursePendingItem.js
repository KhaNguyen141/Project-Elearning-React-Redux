import React, { Component } from 'react'
import { userCancelCourse } from '../Redux/Action/User/UserActions';
import { connect } from 'react-redux';

class CoursePendingItemComponent extends Component {
    render() {
       const {tenKhoaHoc, maKhoaHoc} = this.props.course;

       const { taiKhoan } = this.props.credentials;

        return (
            
            <div className="cyberCartModal row" >
                <div className="col-8">
                    <h4 className="card-text">Course: {tenKhoaHoc}</h4>
                </div>
                
                <div className="col-4" >
                    <div className="statusPending">Pending...</div>
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
