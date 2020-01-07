import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCourseDetail } from "../../Redux/Action/Course/CourseAction";
import { userAddCourse } from "../../Redux/Action/User/UserActions";

class CourseDetail extends Component {

  render() {

    const {tenKhoaHoc, maKhoaHoc, moTa, hinhAnh, ngayTao, luotXem} = this.props.courseDetail;

    const { taiKhoan } = this.props.credentials;
    
    return (
      <div className="courseDetailContainer container">
        
        <h1>Course detail of {tenKhoaHoc}</h1>

        <img src={hinhAnh} alt="course detail"/>
        <div className="mt-4">
          <h4>Course description: {moTa}</h4>
        </div>
        <div>
          <div className="rating__star">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half-o" aria-hidden="true" />
              <span> 4.6 </span>
              <span> (25,554)</span>
              <div>Number of students: {luotXem}</div>
          </div>
          <p>Creation date: {ngayTao}</p>
          <button onClick={() => this.handleDangKy(taiKhoan, maKhoaHoc)} type="button" className="btn btn-udi-yellow mt-2">Enroll</button>
        </div>

      </div>
    );
  }
  
  componentDidMount() {
    //Lấy tham số mã khóa học từ url
    const {courseid} = this.props.match.params;

    //call api lấy chi tiết khoá học
    this.props.dispatch( fetchCourseDetail(courseid) )
  }

  handleDangKy = (taiKhoan, maKhoaHoc) => {
    this.props.dispatch(userAddCourse(taiKhoan, maKhoaHoc));
  }
}

const mapStateToProps = state => ({
  credentials: state.userReducer.credentials,
  courseDetail: state.courseReducer.detail
});

export default connect(mapStateToProps)(CourseDetail);
