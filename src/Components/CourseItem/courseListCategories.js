import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchCoursesByID } from "../../Redux/Action/Course/CourseAction";

// import Component
import CourseItemComponent from "../../Components/CourseItem/courseItem";

// import SCSS
import "../../App.scss";

// Import Library CSS
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';

import 'owl.carousel/dist/assets/owl.theme.default.css';

class CourseListCategoriesComponent extends Component {

    render() {

    console.log(this.props.courseByID)
    return (
        <div className="container">
            <h1> Khoá học:</h1>
            <h4> Các khoá học phổ biến</h4>
            <div className="tab-pane fade show" id="frontEndCourse" role="tabpanel">
                <OwlCarousel className="udemyCourse__items" margin={10} nav>
                    {this.props.courseListByID.map((item, index) => {
                        return <CourseItemComponent className="item" item={item} key={index}/>
                    })}
                </OwlCarousel>
              
            </div>

        </div>
        );
    }

    componentDidMount() {
        const {maDanhMuc} = this.props.match.params;
    
        //call api lấy chi tiết khoá học
        this.props.dispatch( fetchCoursesByID(maDanhMuc) )
  
    }

}

const mapStateToProps = (state, ownProps) => ({
    courseListByID: state.courseReducer.courses,
})

export default connect(mapStateToProps)(CourseListCategoriesComponent);
