import React from 'react';
import { hashHistory } from 'react-router'

import {LoginForm} from './components/index.jsx';

import './styles.scss';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
    }

    onLogin() {
        console.log(this.props);
        // if (this.props.location.state && location.state.nextPathname)
        hashHistory.push('/dashboard')
    }

    render() {
        return (
            <section id="loginPage">
                <div className="logo"></div>
                <h3>Sign in to SLM</h3>
                <div className="boxContainer login">
                    <LoginForm onLogin={this.onLogin}/>
                </div>
                <div className="boxContainer createAccount">
                    <span>New to SLM? <a href="#">Create an account.</a></span>
                </div>
            </section>
        )
    }
}

export default LoginPage