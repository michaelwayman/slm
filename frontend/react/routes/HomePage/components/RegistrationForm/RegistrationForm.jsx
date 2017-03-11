import React from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';

import { registerUser } from './actions.jsx';
import { setPageState } from '../../../../actions.jsx';

import './styles.scss';

class Form extends React.Component {

    nonFieldErrors() {
        return this.props.formErrors.map((item, index) => {
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
            <div id="registrationForm">
                <form onSubmit={this.props.handleSubmit}>
                    {this.props.formErrors.nonFieldErrors && this.nonFieldErrors()}
                    <input className={this.getInputClassName('email')}
                           type="email"
                           placeholder="email"
                           name="email"
                           value={this.props.formData.email}
                           onChange={this.props.handleInputChange}/>
                    {this.fieldError('email')}
                    <input className={this.getInputClassName('password')}
                           type="password"
                           placeholder="password"
                           name="password"
                           value={this.props.formData.password}
                           onChange={this.props.handleInputChange}/>
                    {this.fieldError('password')}
                    <input className={this.getInputClassName('again')}
                           type="password"
                           placeholder="again"
                           name="again"
                           value={this.props.formData.again}
                           onChange={this.props.handleInputChange}/>
                    {this.fieldError('again')}
                    <button className="btn btnGreen" type="submit">Sign up for SLM</button>
                </form>
                <p>
                    By clicking "Sign up for SLM", you agree to our <a href="#">terms of service</a> and <a href="#">privacy policy</a>. We’ll occasionally send you account related emails.
                </p>
            </div>
        );
    }
}


class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: this.props.formData || {},
            formErrors: this.props.formErrors || {}
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
        this.props.dispatch(registerUser(
            this.state.formData,
            data => {
                hashHistory.push('/login');
            },
            data => {
                if (hashHistory.getCurrentLocation().pathname !== '/register') {
                    this.props.dispatch(setPageState({formErrors: data, formData: this.state.formData}));
                    hashHistory.push('/register');
                }
                else {
                    this.setState({formErrors: data})
                }
            }
        ));
    }

    render() {
        return <Form handleSubmit={this.handleSubmit}
                     handleInputChange={this.handleInputChange}
                     formErrors={this.state.formErrors}
                     formData={this.state.formData} />
    }
}

export default connect()(RegistrationForm)