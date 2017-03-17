import React from 'react';
import { Link } from 'react-router'

import './styles.scss';

export class NavLink extends React.Component {
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
                <div className="container pageWidth">
                    <nav className="navLinks">
                        <Link to="/">SLM</Link>
                        <Link to="/features" onlyActiveOnIndex={true} activeClassName="active">Features</Link>
                        <a href="#">Discover</a>
                        <Link to="/pricing" onlyActiveOnIndex={true} activeClassName="active">Pricing</Link>
                    </nav>
                    <section className="actions">
                        <Link to="/login">Sign in</Link> or <Link to="/register">Sign up</Link>
                    </section>
                </div>
            </section>
        )
    }
}

export default Navigation
