import React, { Component } from 'react'

class SideDrawer extends Component {
    render() {

        let drawerClasses = 'side-drawer';
        if (this.props.show) {
            drawerClasses = 'side-drawer open';

        }
        return (
            <nav className={drawerClasses}>
                <ul>
                    <li><a href="!#">Products</a></li>
                    <li><a href="!#">Users</a></li>
                </ul>
                
            </nav>
        )
    }
}

export default SideDrawer;
