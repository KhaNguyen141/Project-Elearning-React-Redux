import React, { Component } from 'react'
import { userCancelCourse } from '../Redux/Action/User/UserActions';
import { connect } from 'react-redux';
import { fetchCoursesByID } from '../Redux/Action/Course/CourseAction';

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
                    <button onClick={() => this.handleCancel(taiKhoan, maKhoaHoc)} className="btn btn-cyber-red">Huỷ</button>
                </div>
                
            </div> 
        )
    }
    handleCancel = (taiKhoan, maKhoaHoc) => {
        this.props.dispatch(userCancelCourse(taiKhoan, maKhoaHoc));
    }

    componentDidMount() {
        this.props.dispatch(fetchCoursesByID())
    }
}

const mapStateToProps = (state) => ({
    credentials: state.userReducer.credentials,
    userCancelCourse: state.userReducer.userCancelCourse
  })

export default connect(mapStateToProps)(CoursePendingItemComponent);
