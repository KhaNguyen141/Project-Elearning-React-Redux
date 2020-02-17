import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchCoursesByID } from "../../../Redux/Action/Course/CourseAction";

// import Component
import CourseItemFilter from "../CourseItemSearch/CourseItemFilter";

const CourseListCategoriesComponent = (props) => {

    const [visible, setVisible] = useState(3);

    const courseListByID = useSelector(
        state => state.courseReducer.courseByID,
        
        );
    
    const dispatch = useDispatch();

    useEffect (() => {
        const {maDanhMuc} = props.match.params;
        dispatch( fetchCoursesByID(maDanhMuc) );
        
    }, [courseListByID, dispatch, props.match.params])

    const loadMore = () => {
        setVisible(visible + 5);
    }
    

    return (
        <div className="container courseListCategoriesContainer">
            <h1> Course: {props.location.courseID}</h1>
                {courseListByID.slice(0, visible).map((item, index) => {
                    return (
                        <div key={index} >
                            <CourseItemFilter className="item" item={item} />
                        </div>
                    )
                })}
                <div className="courseListCategoriesContainer__buttonLoadMore">
                    {visible < courseListByID.length &&
                        <button type="button" onClick={loadMore} className="btn btn-udi-white">Load more</button>
                    } 
                </div>
        </div>
    );
};

export default (CourseListCategoriesComponent);

