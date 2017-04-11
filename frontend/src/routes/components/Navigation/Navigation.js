import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

import { logoutUser } from '../../../actions/index.jsx';

import './styles.css';


class LoggedInDropDown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    toggleDropdown(e) {
        e.preventDefault();
        this.setState({open: !this.state.open})
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.dispatch(logoutUser());
    }

    render() {
        let classes = 'drop';
        if (this.state.open) classes += ' open';
        return (
            <div className="account dropdown">
                <a href="#" className="navLink" onClick={this.toggleDropdown}>{this.props.user.username} <i className="fa fa-angle-down fa-1x"/></a>
                <div className={classes}>
                    <ul>
                        <li><a href="#" onClick={this.handleLogout}>Account</a></li>
                        <li><a href="#" onClick={this.handleLogout}>Log out</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

const LoggedInDropDownWrap = connect(state => {
    return {user: state.user}
})(LoggedInDropDown);



class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    buildActions() {
        if (this.props.user.username) {
            return (
                <section className="actions user">
                    <LoggedInDropDownWrap />
                </section>
            )
        } else {
            return (
                <section className="actions anonymous">
                    <NavLink to="/login" className="navLink">Sign in</NavLink> or <NavLink to="/register" className="navLink">Sign up</NavLink>
                </section>
            )
        }
    }

    render() {
        return (
            <nav className="nav">
                <div className="container pageWidth">
                    <section className="navLinks">
                        <Link to="/" className="navLink">SLM</Link>
                        <NavLink to="/features" className="navLink" activeClassName="active">Features</NavLink>
                        <NavLink to="/blog" className="navLink" activeClassName="active">Blog</NavLink>
                    </section>
                    {this.buildActions()}
                </div>
            </nav>
        )
    }
}

export default connect(state => {
    return {user: state.user}
})(Navigation)
