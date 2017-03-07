import React from 'react';
import { Link } from 'react-router'

import './styles.scss';

class NavLink extends React.Component {
    render() {
        let isActive = this.context.router.isActive(this.props.to, true);
        let className = isActive ? "active" : "";

        return (
            <li className={className}>
                <Link {...this.props}/>
            </li>
        );
    }
}

NavLink.contextTypes = {
    router: React.PropTypes.object
};


class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <section className="nav">
                <div className="container">
                    <nav className="navLinks">
                        <a href="#">Features</a>
                        <a href="#">Explore</a>
                        <a href="#">Pricing</a>
                    </nav>
                    <section className="actions">
                        <Link to="/login">Sign in</Link> or <a href="#">Sign up</a>
                    </section>
                </div>
            </section>
        )
    }
}

export {Navigation, NavLink}
