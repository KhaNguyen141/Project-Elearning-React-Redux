import React, { Component } from "react";

import { connect } from "react-redux";
import CourseService from "../../Services/courseService";

import { fetchCourseDetail } from "../../Redux/Action/action";

const courseService = new CourseService();

class CourseDetail extends Component {

  render() {

    const {tenKhoaHoc, moTa, hinhAnh} = this.props.course;
    return (
      <div>
        <img src={hinhAnh} style={{width: "100%", height: "50rem"}} />
        
        <h1>Chi tiết khóa học {tenKhoaHoc}</h1>
        <div>
          <p>Mô tả chi tiết khóa học {moTa}</p>
        </div>
      </div>
    );
  }
  componentDidMount() {
    //Lấy tham số mã khóa học từ url
    const {courseid} = this.props.match.params;
    // const courseid = this.props.match.params.courseid;

  
    //call api lấy chi tiết khoá học
    this.props.dispatch( fetchCourseDetail(courseid) )

  }
}

/**
 * 1.Khi load trang, dùng axios gửi lên server
http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=111
 * 2. lưu cái course detail lên store (trên store phải có 1 dữ liệu mới, 1 reducer mới)
 * 3. ở courseDetail component, lấy "chi tiết khoá học" từ store xuống, hiện ra màn hình
 * các thông tin sau: tên, mã, hình ảnh, mô tả, người tao.
 */

const mapStateToProps = state => ({
  course: state.courseDetail
});

export default connect(mapStateToProps)(CourseDetail);
