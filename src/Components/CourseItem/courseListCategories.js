import React, { Component } from "react";
import { connect } from "react-redux";

import CourseService from "../../Services/courseService";
import { fetchListCategory } from "../../Redux/Action/Course/CourseAction";

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
    
    return (
        <div className="container">
            <div>
                Front End Courses
            </div>
            <h1>Các khoá học phổ biến</h1>
            <div className="tab-pane fade show" id="frontEndCourse" role="tabpanel">
                <OwlCarousel className="udemyCourse__items" margin={10} nav>
                    {this.props.courseList.map((item, index) => {
                        return <CourseItemComponent className="item" item={item} key={index} />
                    })}
                </OwlCarousel>
              
            </div>

        </div>
        );
    }

    componentDidMount() {
        const {maDanhMuc} = this.props.match.params;
    
        //call api lấy chi tiết khoá học
        this.props.dispatch( fetchListCategory(maDanhMuc) )
  
    }
}

    const mapStateToProps = state => ({
        courseList: state.courseList,
        

    });

export default connect(mapStateToProps)(CourseListCategoriesComponent);
