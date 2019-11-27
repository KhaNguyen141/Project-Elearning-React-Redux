import React, { Component } from 'react'

class CarouselComponent extends Component {
    render() {
        return (
            <section className="udemyCarousel py-5">
                <div className="container udemyCarousel__content">
                    <h1>Khởi đầu sự nghiệp của bạn</h1>
                    <p>Trở thành lập trình chuyên nghiệp</p>
                    <button className="btn-udi-yellow">Xem khóa học</button>
                </div>
            </section>
        )
    }
}

export default (CarouselComponent);