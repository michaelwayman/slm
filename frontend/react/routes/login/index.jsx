import React from 'react';
import { hashHistory } from 'react-router'

import {LoginForm} from '../home/components/index.jsx';

class LoginPage extends React.Component {

    onLogin() {
        hashHistory.push('/dashboard')
    }

    render() {
        return (
            <section id="loginPage">
                <LoginForm onLogin={this.onLogin}/>
            </section>
        )
    }
}

export default LoginPage