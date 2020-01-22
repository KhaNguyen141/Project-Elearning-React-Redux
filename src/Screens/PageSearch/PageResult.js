import React, { Component } from 'react'
import CourseItemComponent from '../../Components/CourseItem/courseItem'
import { connect } from 'react-redux'
import ResultNotFound from './ResultNotFound';

class PageResault extends Component {

    render() {
            return (
                <div>
                {this.props.courseSearch.length > 0 ? (
                    <div className="pageResultContainer container">
                    <h2>Courses result: </h2>
                    <div className="row">
                        {this.props.courseSearch.map((item, index) => {
                                return (
                                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 pt-4">
                                        <div>
                                            <CourseItemComponent item={item} key={index} />
                                        </div>
                                    </div>
                                )
                            })
                  
                      }
                    </div>
                </div>
                ) : (
                    <div className="searchNotFoundContainer">
                        <ResultNotFound />
                    </div>
                    
                )}
                </div>
            )
    }
}

const mapStateToProps = (state) => ({
    credentials: state.userReducer.credentials,
    courseCategory: state.courseReducer.courseListCategory,
    text: state.courseReducer.text,
    courseSearch: state.courseReducer.courseSearch,
  });

export default connect(mapStateToProps)(PageResault);
