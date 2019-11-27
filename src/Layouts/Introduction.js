import React, { Component } from 'react'

class IntroductionComponent extends Component {
    render() {
        return (
            <section class="udemyIntro">
                <div class="udemyIntro__content">
                    <div class="row">
                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div class="udemyIntro__item d-flex">
                                <div class="udemyIntro__icon">
                                    <i class="fa fa-bullseye" aria-hidden="true"></i>
                                </div>
                                <div class="udemyIntro__content">
                                    <p>Học theo lộ trình, có định hướng</p>
                                    <p>CyberSoft sẽ định hướng và đưa ra các lộ trình học lập trình nhằm phát triển năng lực và niềm đam mê lập trình của bạn.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div class="udemyIntro__item d-flex">
                                <div class="udemyIntro__icon">
                                    <i class="fa fa-check-square-o" aria-hidden="true"></i>
                                </div>
                                <div class="udemyIntro__content">
                                    <p>Mài giũa bạn qua kinh nghiệm, dự án thực tế</p>
                                    <p>Đội ngũ Giảng viên và các Mentor là những người dày dạn kinh nghiệm qua các dự án thực tế tại các công ty lớn sẽ truyền đạt những kinh nghiệm "máu lửa" cho bạn.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div class="udemyIntro__item d-flex">
                                <div class="udemyIntro__icon">
                                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                                </div>
                                <div class="udemyIntro__content">
                                    <p>Công nghệ mới, chuyên sâu, thực tế</p>
                                    <p>Bạn được học và trải nghiệm các công nghệ lập trình mới nhất, chuyên sâu, bám sát nhu cầu tuyển dụng thực tế từ doanh nghiệp.</p>
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
