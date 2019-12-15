import React, { useState, useEffect, Component } from "react";

import { connect } from "react-redux";
import { fetchCourse } from "../../Redux/Action/Course/CourseAction";

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

const HomeScreen = (props) => {

  useEffect(() => {
    if (props.credentials) {
      props.dispatch( fetchCourse() )
    }
  }, [props.credentials])

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
                 
                      <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#latestCourse" role="tab" aria-controls="nav-home" aria-selected="true">Các khóa học mới nhất</a>
                      <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#frontEndCourse" role="tab" aria-controls="nav-profile" aria-selected="false">Front End</a>
                      <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#backEndCourse" role="tab" aria-controls="nav-profile" aria-selected="false">Back End</a>
                      <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#designCourse" role="tab" aria-controls="nav-profile" aria-selected="false">Design</a>
                      <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#mobileCourse" role="tab" aria-controls="nav-profile" aria-selected="false">Di động</a>
                      <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#thinkingCourse" role="tab" aria-controls="nav-profile" aria-selected="false">Tư Duy</a>

                    
                  </div>
                </nav>
         
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="latestCourse" role="tabpanel">

                      {props.courseList.length && (
                          <OwlCarousel className="udemyCourse__items" margin={10} nav>
                            {props.courseList
                            .sort((a, b) => b.ngayTao.split('/').reverse().join().localeCompare(a.ngayTao.split('/').reverse().join()))
                            .map((item, index) => {
                                return <CourseItemComponent className="item" item={item} key={index} />
                              })}
                          </OwlCarousel>
                         )}
                    </div>

                    <div className="tab-pane fade show" id="frontEndCourse" role="tabpanel">
                      
                      {props.courseList.length && (
                        <OwlCarousel className="udemyCourse__items" margin={10} nav>
                          {props.courseList
                          .sort((a, b) => a.maKhoaHoc.localeCompare(b.maKhoaHoc))
                          .map((item, index) => {
                            if (item.danhMucKhoaHoc.maDanhMucKhoahoc === "FrontEnd") 
                              return <CourseItemComponent className="item" item={item} key={index} />
                          })}
                        </OwlCarousel>
                      )}
                  </div>

                  <div className="tab-pane fade show" id="backEndCourse" role="tabpanel">
                      
                      {props.courseList.length && (
                        <OwlCarousel className="udemyCourse__items" margin={10} nav>
                          {props.courseList
                          .sort((a, b) => a.maKhoaHoc.localeCompare(b.maKhoaHoc))
                          .map((item, index) => {
                            if (item.danhMucKhoaHoc.maDanhMucKhoahoc === "BackEnd")
                              return <CourseItemComponent className="item" item={item} key={index} />
                            })}
                        </OwlCarousel>
                      )}
                  </div>

                  <div className="tab-pane fade show" id="designCourse" role="tabpanel">
                      
                      {props.courseList.length && (
                        <OwlCarousel className="udemyCourse__items" margin={10} nav>
                          {props.courseList
                          .sort((a, b) => a.maKhoaHoc.localeCompare(b.maKhoaHoc))
                          .map((item, index) => {
                            if (item.danhMucKhoaHoc.maDanhMucKhoahoc === "Design")
                              return <CourseItemComponent className="item" item={item} key={index} />
                            })}
                        </OwlCarousel>
                      )}
                  </div>

                  <div className="tab-pane fade show" id="mobileCourse" role="tabpanel">
                      
                      {props.courseList.length && (
                        <OwlCarousel className="udemyCourse__items" margin={10} nav>
                          {props.courseList
                          .sort((a, b) => a.maKhoaHoc.localeCompare(b.maKhoaHoc))
                          .map((item, index) => {
                            if (item.danhMucKhoaHoc.maDanhMucKhoahoc === "DiDong")
                              return <CourseItemComponent className="item" item={item} key={index} />
                            })}
                        </OwlCarousel>
                      )}
                  </div>

                  <div className="tab-pane fade show" id="thinkingCourse" role="tabpanel">
                      
                      {props.courseList.length && (
                        <OwlCarousel className="udemyCourse__items" margin={10} nav>
                          {props.courseList
                          .sort((a, b) => a.maKhoaHoc.localeCompare(b.maKhoaHoc))
                          .map((item, index) => {
                            if (item.danhMucKhoaHoc.maDanhMucKhoahoc === "TuDuy")
                              return <CourseItemComponent className="item" item={item} key={index} />
                            })}
                        </OwlCarousel>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

  const mapStateToProps = state => ({
    courseList: state.courseReducer.courses,
    credentials: state.userReducer.credentials,

  });

export default connect(mapStateToProps)(HomeScreen);

