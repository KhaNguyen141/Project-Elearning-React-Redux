import React, { Component } from 'react'

class DrawerToggleButton extends Component {
    render() {
        return (
            <button 
            className="navbar-toggler header__left__responsiveButton" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            onClick={this.props.click}
            >
                <span className="navbar-toggler-icon" />
            </button>
        )
    }
}

export default DrawerToggleButton;