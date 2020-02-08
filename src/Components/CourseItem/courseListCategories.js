import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchCoursesByID } from "../../Redux/Action/Course/CourseAction";

// import Component
import CourseItemComponent from "./CourseItem";

// import SCSS
import "../../App.scss";
import CourseItemFilter from "./CourseItemSearch/CourseItemFilter";

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
                {courseListByID.map((item, index) => {
                    return (
                        <div>
                            <CourseItemFilter className="item" item={item} key={index} />
                        </div>
                    )
                })}
        </div>
    );
};

export default (CourseListCategoriesComponent);

