import React, { Component } from 'react'
import { connect } from 'react-redux';
import CourseApprovedItem from "../../Components/CourseItem/CourseApprovedItem";

class CourseApprovedComponent extends Component {
    render() {
        return (
            <div className="container">
                <h1>My Course</h1>
                <div>
                    <div className="row">
                    {this.props.myCourse.map((item, index) => {
                        return (
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 pt-4">
                                <div>
                                    <CourseApprovedItem item={item} key={index}/>
                                </div>
                                
                            </div> 
                        )
                    })}
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    myCourse: state.userReducer.userCheckCourseAccepted,
    checkCourse: state.courseReducer.courses,
});

export default connect(mapStateToProps)(CourseApprovedComponent);