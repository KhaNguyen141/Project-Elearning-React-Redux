import React, { Component } from 'react'
import CourseItemComponent from '../../Components/CourseItem/CourseItem'
import { connect } from 'react-redux'
import ResultNotFound from './ResultNotFound';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import CourseItemFilter from '../../Components/CourseItem/CourseItemSearch/CourseItemFilter';

class PageResault extends Component {

    state = {
        isLoading: true,
    }

    

    render() {
            return (
                <div>
                    
                {this.props.courseSearch.length > 0 ? (
                    <div className="pageResultContainer container">
                    <h2>Courses result: </h2>
                   
                        {this.props.courseSearch.map((item, index) => {
                            return (
                                
                                <div>
                                    <CourseItemFilter item={item} key={index} />
                                </div>
                            )
                        })
                      }
                </div>
                ) : (
                    <div className="searchNotFoundContainer">
                        <ResultNotFound />
                    </div>
                    
                )}

                
                </div>
            )
    }

    stopLoading = () => {
        this.setState({
            isLoading: false,
        })
    }
}

const mapStateToProps = (state) => ({
    credentials: state.userReducer.credentials,
    courseCategory: state.courseReducer.courseListCategory,
    text: state.courseReducer.text,
    courseSearch: state.courseReducer.courseSearch,
  });

export default connect(mapStateToProps)(PageResault);
