import React, { Component } from "react";

import { connect } from "react-redux";
import CourseService from "../../Services/courseService";
import reduxAction from "../../Redux/Action/action";

import { FETCH_COURSES } from "../../Redux/Action/type";

// import Component
import CourseItemComponent from "../../Components/CourseItem/courseItem";

// import SCSS
import "../../App.scss";

// Import Library CSS
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// import layout
import CarouselComponent from '../../Layouts/Carousel';
import IntroductionComponent from '../../Layouts/Introduction';

const courseService = new CourseService();

class HomeScreen extends Component {
  render() {
    return (
      <section className="udemyCourse">
        <div>
          <CarouselComponent />
        </div>
          
        <div>
          <IntroductionComponent />
        </div>
        

        <div className="udemyCourse__content">
          <div className="row">
            <div className="col-md-4 udemyCourse__text">
              <h2>Sự lựa chọn tốt nhất dành cho bạn</h2>
              <p>Với hơn hàng trăm khóa học mỗi tháng</p>
            </div>
            <div className="col-md-8 udemyCourse__containerBox">
              <div className="udemyCourse__tabs">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#dev" role="tab" aria-controls="nav-home" aria-selected="true">Các khóa học mới nhất</a>

                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="dev" role="tabpanel" aria-labelledby="development">
                      <div>
                      {this.props.courseList.length && (
                      <OwlCarousel className="udemyCourse__items" margin={10} nav>
                          {this.props.courseList.map((item, index) => (
                            <CourseItemComponent className="item" item={item} key={index}/>
                          ))}
                      </OwlCarousel>
                      )}
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  //hàm tự động chạy 1 lần duy nhất khi component khởi
  //chạy sau render

  componentDidMount() {
    if (this.props.credentials) {
      courseService
        .fetchCourses()
        .then(res => {
          this.props.dispatch(reduxAction(FETCH_COURSES, res.data));
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.credentials && !prevProps.credentials) {
      //call api lấy danh sách khoá học
      courseService
        .fetchCourses()
        .then(res => {
          this.props.dispatch(reduxAction(FETCH_COURSES, res.data));
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
}

const mapStateToProps = state => ({
  courseList: state.courseList,
  credentials: state.user.credentials
});

export default connect(mapStateToProps)(HomeScreen);
