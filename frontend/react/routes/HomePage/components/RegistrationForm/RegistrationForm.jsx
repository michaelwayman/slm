import React from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';

import { registerUser } from './actions.jsx';

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

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                {this.props.formErrors.nonFieldErrors && this.nonFieldErrors()}
                <input className="inputControl"
                       type="email"
                       placeholder="email"
                       name="email"
                       onChange={this.props.handleInputChange}/>
                <input className="inputControl"
                       type="password"
                       placeholder="password"
                       name="password"
                       onChange={this.props.handleInputChange}/>
                <input className="inputControl"
                       type="password"
                       placeholder="again"
                       name="again"
                       onChange={this.props.handleInputChange}/>
                <button className="btn" type="submit">Sign up for SLM</button>
            </form>
        );
    }
}


class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {},
            formErrors: {}
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
                this.setState({formErrors: data})
            }
        ));
    }

    render() {
        return <Form handleSubmit={this.handleSubmit}
                     handleInputChange={this.handleInputChange}
                     formErrors={this.state.formErrors}/>
    }
}

export default connect()(RegistrationForm)