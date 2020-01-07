import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import "../App.scss";
import { connect } from 'react-redux';
import { searchCourse, fetchCourseSearch } from '../Redux/Action/Course/CourseAction';

class CarouselComponent extends Component {
    render() {
        return (
            <section className="udemyCarousel py-5">
                <div className="udemyCarousel__content container">
                    <h1>Your 2020 Plan</h1>
                    <p>Become a professional programmer</p>

                    <form className="formSearch" onSubmit={this.onSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                name="searchText"
                                className="form-control"
                                placeholder="Search for course"
                                onChange={this.onChange}
                            />
                            <Link to={`/page-result/${this.props.text}`} onClick={this.onSubmit} type="submit" className="input-group-append">
                                <span className="input-group-text" id="basic-addon2">
                                    <i className="fa fa-search" />
                                </span>
                            </Link>
                        </div>
                    </form>
                </div>
            </section>
        )
    }

    onChange = (event) => {
        this.props.dispatch(searchCourse(event.target.value));
    }
  
      onSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(fetchCourseSearch(this.props.text))
        this.props.history.push(`/page-result/${this.props.text}`)
    }
}

const mapStateToProps = (state) => ({
    credentials: state.userReducer.credentials,
    text: state.courseReducer.text,
  });

export default withRouter(connect(mapStateToProps)(CarouselComponent));