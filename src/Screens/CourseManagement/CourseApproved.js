import React, { Component } from 'react'
import { userCheckCourseApproved } from '../../Redux/Action/User/UserActions'
import { connect } from 'react-redux';
import CourseItemComponent from "../../Components/CourseItem/courseItem";

class CourseApprovedComponent extends Component {
    render() {

        return (
            <div className="container">
                <h1>My Course</h1>
                <div>
                    <h1>Course</h1>
                    <div className="row">
                    {this.props.myCourse.map((item, index) => {
                        return (
                            <div className="col-4 pt-4">
                                <div>
                                    <CourseItemComponent item={item} key={index}/>
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
});

export default connect(mapStateToProps)(CourseApprovedComponent);