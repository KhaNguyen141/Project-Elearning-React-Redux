import React, { Component } from 'react';
import CoureItemComponent from '../Components/CourseItem/courseItem';

class ListCourseComponent extends Component {
    render() {
        return (
            <section className="udemyCourse">
                <div className="udemyCourse__content">
                    <div className="row">
                        <div className="col-md-4 udemyCourse__text">
                            <h2>Sự lựa chọn tốt nhất dành cho bạn</h2>
                            <p>Với hơn hàng trăm khóa học mỗi tháng</p>
                        </div>
                        <div className="col-md-8 udemyCourse__containerBox">
                            <div className="udemyCourse__tabs">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#dev" role="tab" aria-controls="nav-home" aria-selected="true">Các khóa học mới nhất</a>

                                    </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="dev" role="tabpanel" aria-labelledby="development">
                                       <CoureItemComponent />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default (ListCourseComponent);

