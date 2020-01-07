import React, { Component } from 'react'

class IntroductionComponent extends Component {
    render() {
        return (
            <section className="udemyIntro">
                <div className="udemyIntro__content container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="udemyIntro__item d-flex">
                                <div className="udemyIntro__icon">
                                    <i className="fa fa-bullseye" aria-hidden="true" />
                                </div>
                                <div className="udemyIntro__content">
                                    <p>Lifetime access</p>
                                    <p>Learn on your schedule</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="udemyIntro__item d-flex">
                                <div className="udemyIntro__icon">
                                    <i className="fa fa-check-square-o" aria-hidden="true" />
                                </div>
                                <div className="udemyIntro__content">
                                    <p>Expert instruction</p>
                                    <p>Find the right instructor for you.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="udemyIntro__item d-flex">
                                <div className="udemyIntro__icon">
                                    <i className="fa fa-clock-o" aria-hidden="true" />
                                </div>
                                <div className="udemyIntro__content">
                                    <p>100,000 online courses</p>
                                    <p>Explore a variety of fresh topics.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default (IntroductionComponent);
