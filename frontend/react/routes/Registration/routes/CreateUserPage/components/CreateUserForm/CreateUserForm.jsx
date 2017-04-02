import React from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';

import { createUser, setPageFormErrors, loginUser, getAccountDetails } from '../../../../../../actions/index.jsx';

// import './styles.scss';

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
        const classes = ['inputControl', 'marginTop-12'];
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

                    <div className="row">
                        <div className="col-12 marginTop-16">
                            <label htmlFor="name">Email Address</label>
                            <input className={this.getInputClassName('email')}
                                   type="email"
                                   name="email"
                                   value={this.props.formData.email || ''}
                                   onChange={this.props.handleInputChange}/>
                            {this.fieldError('email')}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 marginTop-16">
                            <label htmlFor="name">Password</label>
                            <input className={this.getInputClassName('password')}
                                   type="password"
                                   name="password"
                                   value={this.props.formData.password || ''}
                                   onChange={this.props.handleInputChange}/>
                            {this.fieldError('password')}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p className="font-12">
                                Use at least one letter, one numeral, and seven characters.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 marginTop-16">
                            <label htmlFor="name">Repeat Password</label>
                            <input className={this.getInputClassName('repeat')}
                                   type="password"
                                   name="repeat"
                                   value={this.props.formData.repeat || ''}
                                   onChange={this.props.handleInputChange}/>
                            {this.fieldError('repeat')}
                        </div>
                    </div>

                    <div className="row marginY-32">
                        <div className="col-12">
                            <p className="font-12">
                                By clicking "Sign up for SLM", you agree to our <a href="#">terms of service</a> and <a href="#">privacy policy</a>.
                                We’ll occasionally send you account related emails.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 floatRight">
                            <button className="btn btnGreen" type="submit">Create Account</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


class CreateAccountForm extends React.Component {
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
        this.props.dispatch(createUser(this.state.formData,
            data => {
                this.props.dispatch(setPageFormErrors({}));
                this.props.dispatch(loginUser(this.state.formData,
                    data => {
                        this.props.dispatch(getAccountDetails(
                            data => {
                                hashHistory.push('/register/plan')
                            }
                        ))
                    }
                ));
            },
            data => {
                this.props.dispatch(setPageFormErrors(data));
            }
        ));
    }

    render() {
        return <Form handleSubmit={this.handleSubmit}
                     handleInputChange={this.handleInputChange}
                     formErrors={this.props.formErrors || this.state.formErrors}
                     formData={this.state.formData} />
    }
}

export default connect()(CreateAccountForm);
