import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class PageNotFound extends Component {
    render() {
        return (
            <div className="pageNotFoundContainer">
                <div className="container">
                    <h1>404 NOT FOUND</h1>
                    <div>
                        <p>We're sorry, the page you requested could not be found</p>
                        <ul>
                            <li>Make sure you access right URL Site.</li>
                            <li>Please go back to the homepage.</li>
                        </ul>
                        <Link className="btn btn-cyber-red" to="/home">Back to home</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default (PageNotFound);
