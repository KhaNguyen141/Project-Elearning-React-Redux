import React, { Component } from 'react'
import CourseItemComponent from '../../Components/CourseItem/courseItem'

export default class PageResault extends Component {
    render() {
        return (
            <div className="container">
                <h1>Tìm thấy khoá học</h1>
                <div>
                    <h1>Khoá học: </h1>
                    <CourseItemComponent />
                </div>
            </div>
        )
    }
}
