import React from 'react';
import { NavLink } from 'react-router-dom'

import './styles.css';


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
                        <NavLink exact activeOnlyWhenExact to="/">SLM</NavLink>
                        <NavLink to="/features" activeClassName="active">Features</NavLink>
                        <NavLink to="/pricing" activeClassName="active">Pricing</NavLink>
                        <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                    </nav>
                    <section className="actions">
                        <NavLink to="/login">Sign in</NavLink> or <NavLink to="/register">Sign up</NavLink>
                    </section>
                </div>
            </section>
        )
    }
}

export {Navigation}
