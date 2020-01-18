import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCourseDetail } from "../../Redux/Action/Course/CourseAction";
import { userAddCourse } from "../../Redux/Action/User/UserActions";

import '../../App.scss';
class CourseDetail extends Component {

  render() {

    const {tenKhoaHoc, maKhoaHoc, moTa, hinhAnh, ngayTao, luotXem} = this.props.courseDetail;

    const { taiKhoan } = this.props.credentials;
    
    return (
      <div className="courseDetailContainer">
        <div className="courseDetailContainer__background">
          <div className="courseDetailContainer__content container">
            <div className="row">

              <div className="courseDetailContainer__courseInfo col-7">
                <h2>{tenKhoaHoc}</h2>
                <p>{moTa}</p>

                <div>
                  <div className="rating__star">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-half-o" aria-hidden="true" />
                    <span> 4.6 </span>
                    <span> (25,554 Ratings)</span>
                    <span className="pl-3"> {luotXem} students enrolled</span>
                    <p>Last updated: {ngayTao}</p>
                  </div>

                </div>
              </div>

              <div className="card col-5">
                <img className="card-img-top" src={hinhAnh} alt="course detail" style={{ width: "18rem" }} />
                <div className="card-body">
                  <h4 className="card-title">Course detail of {tenKhoaHoc}</h4>
                  <p className="card-text">Course description: {moTa}</p>
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
              </div>

            </div>
          </div>

        </div>
        <div className="container mt-3">
          <div className="row ">
            <div className="col-7">
              <h2>What you'll learn</h2>
              <p>Build amazing single page applications with React JS and Redux</p>
              <p>Realize the power of building composable components</p>
              <p>Become fluent in the toolchain supporting React, including NPM, Webpack, Babel, and ES6/ES2015 Javascript syntax</p>
              <p>Master fundamental concepts behind structuring Redux applications</p>
              <p>Be the engineer who explains how Redux works to everyone else, because you know the fundamentals so well</p>

              </div>
            </div>
          </div>

          <div className="container mt-3">
          <div className="row ">
            <div className="col-7">
              <h2>Description</h2>
              <h4>Course Last Updated for React v16.6.3 and Redux v4.0.1!  All content is brand new!  Update includes detailed videos on the new React Hooks system.</h4>
              <p>Congratulations!  You've found the most popular, most complete, and most up-to-date resource online for learning React and Redux!</p>
              <p>Thousands of other engineers have learned React and Redux, and you can too.  This course uses a time-tested, battle-proven method to make sure you understand exactly how React and Redux work, and will get you a new job working as a software engineer or help you build that app you've always been dreaming about.</p>
              <p>The difference between this course and all the others: you will understand the design patterns used by top companies to build massively popular web apps.</p>
              <p>React is the most popular Javascript library of the last five years, and the job market is still hotter than ever.  Companies large and small can't hire engineers who understand React and Redux fast enough, and salaries for engineers are at an all time high.  It's a great time to learn React!</p>

              </div>
            </div>
          </div>

          <div className="container mt-3">
          <div className="row ">
            <div className="col-7">
              <h2>Who this course is for:</h2>
              <p>Programmers looking to learn React</p>
              <p>Developers who want to grow out of just using jQuery</p>
              <p>Engineers who have researched React but have had trouble mastering some concepts</p>
            
              </div>
            </div>
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