import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router-dom';

import { logUserIn } from './actions.jsx';

class LoginForm extends React.Component {

    nonFieldErrors() {
        return this.props.formErrors.non_field_errors.map((item, index) => {
            return (
                <div key={index} className="formError">
                    <span>{item}</span>
                </div>
            )
        });
    }

    getInputClassName(name) {
        const classes = ['inputControl'];
        if (!!this.props.formErrors[name]) classes.push('error');
        return classes.join(' ')
    }

    fieldError(name) {
        const error = this.props.formErrors[name];
        return error && <div className="formError"><span>{error}</span></div>
    }

    render() {
        return (
            <form className="form inline" onSubmit={this.props.handleSubmit}>
                {this.props.formErrors.non_field_errors && this.nonFieldErrors()}
                <input className={this.getInputClassName('username')}
                       type="text"
                       name="username"
                       placeholder="username"
                       value={this.props.formData.username || ''}
                       onChange={this.props.handleInputChange}/>
                {this.fieldError('username')}
                <input className={this.getInputClassName('password')}
                       type="password"
                       name="password"
                       placeholder="password"
                       onChange={this.props.handleInputChange}/>
                {this.fieldError('password')}
                <button className="btn btnGreen" type="submit">Sign in</button>
            </form>
        )
    }
}

class LoginFormContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: Object.assign({}, {
                username: this.props.user.email
            }),
            formErrors: {},
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            formData: Object.assign({}, this.state.formData, {[name]: value})
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.dispatch(logUserIn(
            this.state.formData,
            data => {
                hashHistory.push('/dashboard');
            },
            data => {
                this.setState({formErrors: data})
            }
        ));
    }

    render() {
        return (
            <LoginForm handleSubmit={this.handleSubmit}
                       handleInputChange={this.handleInputChange}
                       formErrors={this.state.formErrors}
                       formData={this.state.formData}/>
        )
    }
}

export default connect(
    (state) => {
        return {user: state.user}
    }
)(LoginFormContainer)
