import React from 'react';
import { connect } from 'react-redux';
import {LoginForm} from './components/index.jsx';

import './styles.scss';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section id="loginPage">
                <div className="logo"></div>
                <h3>Sign in to SLM</h3>
                <div className="boxContainer login">
                    <LoginForm />
                </div>
                <div className="boxContainer createAccount">
                    <span>New to SLM? <a href="#">Create an account.</a></span>
                </div>
            </section>
        )
    }
}


export default LoginPage;