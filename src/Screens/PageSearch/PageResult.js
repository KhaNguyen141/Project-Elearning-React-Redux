import React, { Component } from 'react'
import CourseItemComponent from '../../Components/CourseItem/courseItem'
import { connect } from 'react-redux'
import { fetchCourseSearch } from '../../Redux/Action/Course/CourseAction'

class PageResault extends Component {
    render() {
        const {keyword} = this.props.text;
        return (
            
            <div className="container">
                <h2>Courses found: {keyword}</h2>
                <div>
                    <h3>Course List</h3>
                    <div className="row">
                    {this.props.courseSearch.map((item, index) => {
                        return (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 pt-4">
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

    componentDidMount(tenKhoaHoc) {
        this.props.dispatch(fetchCourseSearch(tenKhoaHoc))
    }
}

const mapStateToProps = (state) => ({
    credentials: state.userReducer.credentials,
    courseCategory: state.courseReducer.courseListCategory,
    text: state.courseReducer.text,
    courseSearch: state.courseReducer.courseSearch,
  });

export default connect(mapStateToProps)(PageResault);
