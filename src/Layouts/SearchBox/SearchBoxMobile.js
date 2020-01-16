import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { searchCourse, fetchCourseSearch } from '../../Redux/Action/Course/CourseAction';
import { connect } from 'react-redux';

class SearchBoxMobile extends Component {
    render() {
        let drawerClasses = 'formSearchMobile';
        if (this.props.showSearchBox) {
            drawerClasses = 'formSearchMobile open';

        }

        return (
            <form className={drawerClasses} onSubmit={this.onSubmit}>
                  <div className="input-group">
                    <Link to={`/page-result/${this.props.text}`} onClick={this.onSubmit} type="submit" className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">
                            <i className="fa fa-search" />
                        </span>
                    </Link>
                    <input
                        type="text"
                        name="searchText"
                        className="form-control formControlMobile"
                        placeholder="Search for course"
                        onChange={this.onChange}
                    />
                    <div className="input-group-append" onClick={this.props.searchClick}>
                        <span className="input-group-text" id="basic-addon2">
                            <i className="fas fa-times"></i>
                        </span>
                    </div>
                  </div>
            </form>
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
    course: state.courseReducer.courses,
    text: state.courseReducer.text,
});

export default withRouter(connect(mapStateToProps)(SearchBoxMobile));