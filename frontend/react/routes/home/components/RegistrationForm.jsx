import React from 'react';
import $ from 'jquery';

import auth from '../../../managers/auth.jsx';

class Form extends React.Component {

    formErrors() {
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
                {this.formErrors()}
                <input className="inputControl" type="email" placeholder="email" name="email" onChange={this.props.handleInputChange}/>
                <input className="inputControl" type="password" placeholder="password" name="password" onChange={this.props.handleInputChange}/>
                <input className="inputControl" type="password" placeholder="again" name="again" onChange={this.props.handleInputChange}/>
                <button className="btn" type="submit">Sign up for SLM</button>
            </form>
        );
    }
}


class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            again: '',
            formErrors: [],
            fieldErrors: {
                username: [],
                password: []
            },
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        auth.register(this.state.email, this.state.password, (statusCode, data) => {
            console.log(statusCode, data, 'REGISTRATION RESPONSE');
            if (statusCode == 201) {
                this.props.onRegister();
            } else {
                const errors = {};
                if (data.non_field_errors) errors.formErrors = data.non_field_errors;
                this.setState(errors);
            }
        })
    }

    render() {
        return <Form handleSubmit={this.handleSubmit}
                     handleInputChange={this.handleInputChange}
                     formErrors={this.state.formErrors}/>
    }
}

export default RegistrationForm