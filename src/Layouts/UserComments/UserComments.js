import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const UserCommentsComponent = () => {
    return (
        <section className="udemyInfo mt-5">
            <div className="udemyComments__top container">
                <div className="udemyComments__text">
                    What our students have to say
                </div>
                <OwlCarousel className="udemyComments__sliders" nav>
                    <div className="card">
                        <div className="card-body">
                            <div className="userInfo d-flex">
                                <img src="https://i.udemycdn.com/user/100x100/8872940_27b4_3.jpg" />
                                <h3 className="card-subtitle mb-2 text-muted">Borivoje</h3>
                            </div>
                            <p className="card-text">Cybersoft is a life saver. I don't have the time or money for a college education. My goal is to become a freelance web developer, and thanks to Udemy, I'm really close.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="userInfo d-flex">
                                <img src="https://i.udemycdn.com/user/100x100/22869844_edad.jpg" />
                                <h3 className="card-subtitle mb-2 text-muted">Dipesh</h3>
                            </div>
                            <p className="card-text">I believe in lifelong learning and Cybersoft is a great place to learn from experts. I've learned a lot and recommend it to all my friends.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="userInfo d-flex">
                                <img src="https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2019/12/0/0/Banana-iStock.jpg?ve=1&tl=1" width="100px" height="50px" />
                                <h3 className="card-subtitle mb-2 text-muted">Kathy</h3>
                            </div>
                            <p className="card-text">Cybersoft is a life saver. I don't have the time or money for a college education. My goal is to become a freelance web developer, and thanks to Cybersoft, I'm really close.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="userInfo d-flex">
                                <img src="https://i.udemycdn.com/user/100x100/26154780_76c8.jpg" />
                                <h3 className="card-subtitle mb-2 text-muted">Zulaika</h3>
                            </div>
                            <p className="card-text">I work in project management and joined Udemy because I get great courses for less. The instructors are fantastic, interesting, and helpful. I plan to use Cybersoft for a long time!</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="userInfo d-flex">
                                <img src="https://i.udemycdn.com/user/100x100/31841220_f398_2.jpg" />
                                <h3 className="card-subtitle mb-2 text-muted">Marco</h3>
                            </div>
                            <p className="card-text">Thank you Cybersoft! You've renewed my passion for learning and my dream of becoming a web developer.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="userInfo d-flex">
                                <img src="https://www.apple.com/ac/structured-data/images/open_graph_logo.png?201810040211" width="100px" height="50px" />
                                <h3 className="card-subtitle mb-2 text-muted">Justin</h3>
                            </div>
                            <p className="card-text">The best part about Cybersoft is the selection. You can find a course for anything you want to learn!</p>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </section>

    );
};

export default UserCommentsComponent;