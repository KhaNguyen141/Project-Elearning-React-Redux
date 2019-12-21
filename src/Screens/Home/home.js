import React, { useState, useEffect, Component } from "react";

import { connect, useDispatch } from "react-redux";
import { fetchCourse } from "../../Redux/Action/Course/CourseAction";

// import Component
import CourseItemComponent from "../../Components/CourseItem/courseItem";
import HeaderComponent from "../../Layouts/Header";

// import SCSS
import "../../App.scss";

// Import Library CSS
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// import layout
import CarouselComponent from '../../Layouts/Carousel';
import IntroductionComponent from '../../Layouts/Introduction';
import UserCommentsComponent from "../../Layouts/UserComments";
import { withRouter } from "react-router-dom";

const HomeScreen = (props) => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch( fetchCourse() )
  }, [])

  return (
    <section className="udemyCourse">
        <div>
          <CarouselComponent />
        </div>
          
        <div>
          <IntroductionComponent />
        </div>
        

        <div className="udemyCourse__content">
      
            <div className="udemyCourse__containerBox">
              <div className="udemyCourse__tabs">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#latestCourse" role="tab" aria-controls="nav-home" aria-selected="true">Các khóa học mới nhất </a>
                  </div>
                </nav>
         
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="latestCourse" role="tabpanel">

                      {props.courseList.length && (
                          <OwlCarousel className="udemyCourse__items" margin={10} items={5} nav>
                            {props.courseList
                            .sort((a, b) => b.ngayTao.split('/').reverse().join().localeCompare(a.ngayTao.split('/').reverse().join()))
                            .map((item, index) => {
                                return <CourseItemComponent className="item" item={item} key={index} />
                              })}
                          </OwlCarousel>
                         )}
                    </div>
                </div>
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-profile-tab" data-toggle="tab" href="#frontEndCourse" role="tab" aria-controls="nav-profile" aria-selected="true">Front End</a>
                  </div>
                </nav>
                  <div className="tab-content" id="nav-tabContent">
                      <div className="tab-pane fade show active" id="frontEndCourse" role="tabpanel">
                          
                          {props.courseList.length && (
                            <OwlCarousel className="udemyCourse__items" margin={10} items={5} nav>
                              {props.courseList
                              .sort((a, b) => a.maKhoaHoc.localeCompare(b.maKhoaHoc))
                              .map((item, index) => {
                                if (item.danhMucKhoaHoc.maDanhMucKhoahoc === "FrontEnd") 
                                  return <CourseItemComponent className="item" item={item} key={index} />
                              })}
                            </OwlCarousel>
                          )}
                      </div>
                  </div>
                  
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-profile-tab" data-toggle="tab" href="#backEndCourse" role="tab" aria-controls="nav-profile" aria-selected="false">Back End</a>
                  </div>

                  <div className="tab-content" id="nav-tabContent">
                      <div className="tab-pane fade show active" id="backEndCourse" role="tabpanel">
                          
                          {props.courseList.length && (
                            <OwlCarousel className="udemyCourse__items" margin={10} items={5} nav>
                              {props.courseList
                              .sort((a, b) => a.maKhoaHoc.localeCompare(b.maKhoaHoc))
                              .map((item, index) => {
                                if (item.danhMucKhoaHoc.maDanhMucKhoahoc === "BackEnd")
                                  return <CourseItemComponent className="item" item={item} key={index} />
                                })}
                            </OwlCarousel>
                          )}
                      </div>
                  </div>

                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-profile-tab" data-toggle="tab" href="#designCourse" role="tab" aria-controls="nav-profile" aria-selected="false">Design</a>
                  </div>

                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="designCourse" role="tabpanel">
                        
                        {props.courseList.length && (
                          <OwlCarousel className="udemyCourse__items" margin={10} items={5} nav>
                            {props.courseList
                            .sort((a, b) => a.maKhoaHoc.localeCompare(b.maKhoaHoc))
                            .map((item, index) => {
                              if (item.danhMucKhoaHoc.maDanhMucKhoahoc === "Design")
                                return <CourseItemComponent className="item" item={item} key={index} />
                              })}
                          </OwlCarousel>
                        )}
                    </div>
                  </div>

                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a className="nav-item nav-link active" id="nav-profile-tab" data-toggle="tab" href="#mobileCourse" role="tab" aria-controls="nav-profile" aria-selected="false">Di động</a>
                  </div>
                  
                  <div className="tab-content" id="nav-tabContent">
                      <div className="tab-pane fade show active" id="mobileCourse" role="tabpanel">
                          
                          {props.courseList.length && (
                            <OwlCarousel className="udemyCourse__items" margin={10} items={5} nav>
                              {props.courseList
                              .sort((a, b) => a.maKhoaHoc.localeCompare(b.maKhoaHoc))
                              .map((item, index) => {
                                if (item.danhMucKhoaHoc.maDanhMucKhoahoc === "DiDong")
                                  return <CourseItemComponent className="item" item={item} key={index} />
                                })}
                            </OwlCarousel>
                          )}
                      </div>
                  </div>

                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a className="nav-item nav-link active" id="nav-profile-tab" data-toggle="tab" href="#thinkingCourse" role="tab" aria-controls="nav-profile" aria-selected="false">Tư Duy</a>
                  </div>

                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="thinkingCourse" role="tabpanel">
                         
                        {props.courseList.length && (
                          <OwlCarousel className="udemyCourse__items" margin={10} items={5} nav>
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

            <div>
               <UserCommentsComponent />
            </div>
      </section>
  );
};

  const mapStateToProps = state => ({
    courseList: state.courseReducer.courses,
    credentials: state.userReducer.credentials,

  });

export default withRouter(connect(mapStateToProps)(HomeScreen));

