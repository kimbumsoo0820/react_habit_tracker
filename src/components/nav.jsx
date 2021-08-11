import React, { Component } from 'react';


class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <i className="fas fa-leaf"></i>
                <span className="title">Habit Tracker</span>
                <span className="nav-count">{this.props.totalCount}</span>


            </nav>
        );
    }
}

export default Nav;