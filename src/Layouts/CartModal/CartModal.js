import React, { Component } from 'react'
import { connect } from 'react-redux';
import CoursePendingItemComponent from '../../Components/CourseItem/ModalPending/coursePendingItem';

class CartModalComponent extends Component {

    render() {
        return (
            <div className="modal fade" id="cartModal" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Course Pending</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h2>Course List</h2>
                            {this.props.coursePending.length ? (
                                this.props.coursePending.map((course, index) => {
                                    return (
                                        <div key={index}>
                                            <CoursePendingItemComponent course={course} />
                                        </div>
                                    )})
                                ) : (
                                    <div className="text-center" key>
                                        Cart Empty
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
     
        )
    }

}

const mapStateToProps = (state) => ({
    credentials: state.userReducer.credentials,
    courseCategory: state.courseReducer.courseListCategory,
    course: state.courseReducer.courses,
    coursePending: state.userReducer.userCheckCourse
});

export default connect(mapStateToProps)(CartModalComponent);
