import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userCancelCourse } from '../../../Redux/Action/User/UserActions';
import { NavLink } from 'react-router-dom';

class CourseApprovedItem extends Component {
    render() {

        const { tenKhoaHoc, maKhoaHoc } = this.props.item;
    
        const { taiKhoan } = this.props.credentials;
        
        return (
            
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Course: </h2>
                        <h4>{tenKhoaHoc}</h4>
                        <div className="text-center">

                            <button onClick={() => this.handleCancel(taiKhoan, maKhoaHoc)} type="button" className="btn btn-cyber-red mt-2">Cancel</button>

                            <NavLink to={`/coursedetail/${maKhoaHoc}`} className="btn btn-udi-white ml-2 mt-2">Detail</NavLink>
                        </div>
                </div>
            </div>
        )
    }

    _shortenString = (string) => {
        if (string && string.length > 20) {
          return string.substr(0, 20) + "..."
        }
        return string;
      }

      handleCancel = (taiKhoan, maKhoaHoc) => {
          this.props.dispatch(userCancelCourse(taiKhoan, maKhoaHoc))
      }
}

const mapStateToProps = (state) => ({
    credentials: state.userReducer.credentials,
    userCancelCourse: state.userReducer.userCancelCourse,
    checkCourse: state.courseReducer.courses,
})

export default connect(mapStateToProps)(CourseApprovedItem);
