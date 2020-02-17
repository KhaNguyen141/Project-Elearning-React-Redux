import React, { Component } from 'react'
import { connect } from 'react-redux'
import ResultNotFound from './ResultNotFound';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import CourseItemFilter from '../../Components/CourseItem/CourseItemSearch/CourseItemFilter';

class PageResault extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: 3,

        }
    }

    render() {
        return (
            <div>
                {this.props.courseSearch.length > 0 ? (
                    <div className="pageResultContainer container">
                        <h2>Courses result: </h2>

                        {this.props.courseSearch.slice(0, this.state.visible).map((item, index) => {
                            return (
                                <div key={index} >
                                    <CourseItemFilter item={item}/>
                                </div>
                            )
                        })
                        }
                        <div className="pageResultContainer__buttonLoadMore">
                            {this.state.visible < this.props.courseSearch.length &&
                                <button type="button" onClick={() => this.loadMore()} className="btn btn-udi-white">Load more</button>
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

    loadMore = () => {
        this.setState((oldItem) => {
            return { visible: oldItem.visible + 10 }
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
