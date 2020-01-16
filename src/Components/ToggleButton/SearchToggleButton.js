import React, { Component } from 'react'

class SearchToggleButton extends Component {
    render() {
        return (
            <div className="searchMobileButton" onClick={this.props.searchClick}>
                <i className="fa fa-search" />
            </div>
        )
    }
}

export default SearchToggleButton;
