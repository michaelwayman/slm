import React from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../../actions/index.jsx';

import {LoginForm} from './components/index.jsx';

import './styles.css';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleFormSubmit = (formData)  => {
        const {email, password} = formData;

        this.props.dispatch(loginUser(email, password))
            .then(() => this.props.history.push('/'))
            .catch(() => {});
    };

    render() {
        return (
            <section id="loginPage">
                <div className="logo"></div>
                <h3>Sign in to SLM</h3>
                <div className="boxContainer login">
                    <LoginForm handleSubmit={this.handleFormSubmit}
                               formErrors={this.props.page.formErrors}/>
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
        return {user: state.user, page: state.page}
    }
)(LoginPage)
