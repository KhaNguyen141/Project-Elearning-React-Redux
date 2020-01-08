import React, { Component } from 'react';

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer__container container">
                <section className="footer__top">
                    <div className="row" >
                        <div className="col-6">
                            <p><i className="fas fa-map-marker-alt" /> Brand 1: Bis 376 Vo Van Tan Street – District 3</p>
                            <p><i className="fas fa-map-marker-alt" /> Brand 2: Bis 459 Su Van Hanh Street – District 10</p>
                            <p><i className="fas fa-map-marker-alt" /> Brand 3: Bis 82 Ung Van Khiem Street – Binh Thanh District</p>
                            <p><i className="fas fa-map-marker-alt" /> Brand 4: Da Nang City – Hai Chau District</p>
                            <p><i className="fas fa-phone" /> 096.105.1014 – 098.407.5835</p>
                        </div>

                        <div className="col-6" >
                            <p><a href="!#">Careers</a></p>
                            <p><a href="!#">Blog</a></p>
                            <p><a href="!#">Help and Support</a></p>
                            <p><a href="!#">About us</a></p>
                        </div>

                    </div>
                </section>
                
                <section className="row footer__bottom pt-4">
                    <div className="footer__left d-flex col-md-7 col-xl-6">
                        <div>
                            <img src="/img/CybersoftLogo.png" alt="logoFooter" />
                        </div>
                        <span className="ml-4 text-license">Bản quyền © 2019 Cybersoft.</span>
                    </div>
                    <div className="footer__right col-md-5 col-xl-6">

                    </div>
                </section>
            </footer>

        )
    }
}

export default (FooterComponent);
