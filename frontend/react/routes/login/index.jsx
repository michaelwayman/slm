import React from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import {receiveLoginResponse} from '../../actions/index.jsx';
import auth from '../../managers/auth.jsx';
import {LoginForm} from './components/index.jsx';

import './styles.scss';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {};
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSuccessfulSubmit(responseData) {
        auth.saveTokenData(responseData.token, responseData.email);
        hashHistory.push('/dashboard');
        this.props.dispatch(receiveLoginResponse(responseData));
    }

    render() {

        const initialData = {
            username: this.props.user.email
        };

        return (
            <section id="loginPage">
                <div className="logo"></div>
                <h3>Sign in to SLM</h3>
                <div className="boxContainer login">
                    <LoginForm onSubmit={this.onSuccessfulSubmit} initialData={initialData}/>
                </div>
                <div className="boxContainer createAccount">
                    <span>New to SLM? <a href="#">Create an account.</a></span>
                </div>
            </section>
        )
    }
}

export default connect(
    (state) => {
        return {user: state.user}
    }
)(LoginPage)
