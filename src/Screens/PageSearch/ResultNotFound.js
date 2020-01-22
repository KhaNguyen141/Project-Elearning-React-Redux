import React, { Component } from 'react'

class ResultNotFound extends Component {

    render() {
            return (
                <div className="notFoundContainer">
                    <div className="container">
                        <h1>Sorry, we couldn't find any results: </h1>
                        <div>
                            <p>Try adjusting your search. Here are some ideas: </p>
                            <ul>
                                <li>Make sure all words are spelled correctly.</li>
                                <li>Try different search terms.</li>
                                <li>Try more general search terms.</li>
                            </ul>
                        </div>
                    </div>
               
                </div>
            )
        }
    }

export default (ResultNotFound);
