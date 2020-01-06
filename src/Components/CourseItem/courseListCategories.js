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

    
    useEffect (() => {
        const {maDanhMuc} = props.match.params;
        dispatch( fetchCoursesByID(maDanhMuc) );
        
    }, [courseListByID])

    return (
        <div className="container">
            <h1> Course: {props.location.courseID}</h1>

            <div className="row" role="tabpanel">
                
                {courseListByID.map((item, index) => {
                    return (
                        <div className="col-3">
                            <CourseItemComponent className="item" item={item} key={index} />
                        </div>
                    )
                })}
            </div>

        </div>
    );
};

export default (CourseListCategoriesComponent);

