import React from 'react';
import {LoginForm} from './components/index.jsx';

import './styles.css';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSuccess = ()  => this.props.history.push('/dashboard');

    render() {
        return (
            <section id="loginPage">
                <div className="logo"></div>
                <h3>Sign in to SLM</h3>
                <div className="boxContainer login">
                    <LoginForm handleSuccess={this.handleSuccess}/>
                </div>
                <div className="boxContainer createAccount">
                    <span>New to SLM? <a href="#">Create an account.</a></span>
                </div>
            </section>
        )
    }
}

export {LoginPage}
