import React, { Component, useEffect, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";

import { fetchCoursesByID } from "../../Redux/Action/Course/CourseAction";

// import Component
import CourseItemComponent from "../../Components/CourseItem/courseItem";

// import SCSS
import "../../App.scss";

// Import Library CSS
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';

import 'owl.carousel/dist/assets/owl.theme.default.css';

const CourseListCategoriesComponent = (props) => {

    const courseListByID = useSelector(
        state => state.courseReducer.courseByID,
        
        );

    const dispatch = useDispatch();

    useEffect (() => {
        const {maDanhMuc} = props.match.params;
        dispatch( fetchCoursesByID(maDanhMuc) );
        
    }, [])
    return (
        <div className="container">
            <h1> Khoá học: {props.location.courseID}</h1>
            <h4> Các khoá học phổ biến</h4>
            <div className="tab-pane fade show" id="frontEndCourse" role="tabpanel">
            {courseListByID.length && (
                <OwlCarousel className="udemyCourse__items" margin={10} nav={true}>
                    {courseListByID.map((item, index) => {
                        return <CourseItemComponent className="item" item={item} key={index}/>
                    })}
                </OwlCarousel>
            )}
            </div>

        </div>
    );
};

export default (CourseListCategoriesComponent);

