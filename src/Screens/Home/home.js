import React, { useState, useEffect, Component } from "react";

import { connect, useDispatch } from "react-redux";
import { fetchCourse, fetchListCategory } from "../../Redux/Action/Course/CourseAction";

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
                            .slice(17)
                            .sort((a, b) => b.ngayTao.split('/').reverse().join().localeCompare(a.ngayTao.split('/').reverse().join()))
                            .map((item, index) => {
                                return <CourseItemComponent className="item" item={item} key={index} />
                              })}
                          </OwlCarousel>
                         )}
                    </div>
                </div>
 
                  {props.courseCategory.map((list, index) => {
                    return (
                      <div>
                        <nav className="mt-2">
                          <div className="nav nav-tabs" id="nav-tab" role="tablist" key={index} >
                            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" role="tab" aria-controls="nav-home" aria-selected="true">{list.tenDanhMuc}</a>
                          </div>
                        </nav>

                        <div className="tab-content" id="nav-tabContent">
                          <div className="tab-pane fade show active" id="latestCourse" role="tabpanel">

                            {props.courseList.length && (
                              <OwlCarousel className="udemyCourse__items" margin={10} items={5} nav>
                                {props.courseList
                                  .sort((a, b) => a.maKhoaHoc.localeCompare(b.maKhoaHoc))
                                  .map((item, index) => {
                                    if (item.danhMucKhoaHoc.maDanhMucKhoahoc === list.maDanhMuc)
                                      return <CourseItemComponent className="item" item={item} key={index} />
                                  })}
                              </OwlCarousel>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
            

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
    courseCategory: state.courseReducer.courseListCategory,
    credentials: state.userReducer.credentials,
    

  });

export default withRouter(connect(mapStateToProps)(HomeScreen));

