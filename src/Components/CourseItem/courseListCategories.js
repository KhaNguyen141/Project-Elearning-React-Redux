import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchCoursesByID } from "../../Redux/Action/Course/CourseAction";

// import Component
import CourseItemComponent from "./CourseItem";

// import SCSS
import "../../App.scss";

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
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-3">
                            <CourseItemComponent className="item" item={item} key={index} />
                        </div>
                    )
                })}
            </div>

        </div>
    );
};

export default (CourseListCategoriesComponent);

