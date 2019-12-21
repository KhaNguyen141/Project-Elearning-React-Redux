import React, { Component } from 'react'
import CourseItemComponent from '../../Components/CourseItem/courseItem'
import { connect } from 'react-redux'
import { fetchCourse, fetchCourseSearch } from '../../Redux/Action/Course/CourseAction'

class PageResault extends Component {
    render() {
        const {keyword} = this.props.text;
        return (
            
            <div className="container">
                <h1>Tìm thấy khoá học: {keyword}</h1>
                <div>
                    <h1>Khoá học</h1>
                    <div className="row">
                    {this.props.courseFilter.map((item, index) => {
                        return (
                            <div className="col-3">
                                <CourseItemComponent item={item} key={index}/>
                            </div> 
                        )
                    })}
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(tenKhoaHoc) {
        this.props.dispatch(fetchCourseSearch(tenKhoaHoc))
    }
}

const mapStateToProps = (state) => ({
    credentials: state.userReducer.credentials,
    courseCategory: state.courseReducer.courseListCategory,
    text: state.courseReducer.text,
    courseFilter: state.courseReducer.courseFilter,
  });

export default connect(mapStateToProps)(PageResault);
