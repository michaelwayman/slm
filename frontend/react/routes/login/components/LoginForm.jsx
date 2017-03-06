import React from 'react';
import fetch from 'isomorphic-fetch';

class Form extends React.Component {

    nonFieldErrors() {
        return this.props.formErrors.non_field_errors.map((item, index) => {
            return (
                <div key={index} className="formError">
                    <span>{item}</span>
                </div>
            )
        });
    }

    render() {
        return (
            <form className="form inline" onSubmit={this.props.handleSubmit}>
                {this.props.formErrors.non_field_errors && this.nonFieldErrors()}
                <input className="inputControl"
                       type="text"
                       name="username"
                       placeholder="username"
                       value={this.props.initialData.username}
                       onChange={this.props.handleInputChange}/>
                <input className="inputControl"
                       type="password"
                       name="password"
                       placeholder="password"
                       onChange={this.props.handleInputChange}/>
                <button className="btn" type="submit">Sign in</button>
            </form>
        )
    }
}

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: Object.assign({}, this.props.initialData),
            formErrors: {
                non_field_errors: [],
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
            formData: Object.assign({}, this.state.formData, {[name]: value})
        });
    }

    handleSubmit(e) {
        console.log(this.state);
        e.preventDefault();
        fetch('/api/obtain-auth-token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.formData)
        })
        .then(response => {
            if (response.status == 200) {
                response.json().then(data => {
                    this.props.onSuccessfulSubmit(data)
                });
            }
            else if (response.status == 400) {
                response.json().then(data => {
                    this.setState({ formErrors: data })
                });
            }
        })
    }

    render() {
        return (
            <Form handleSubmit={this.handleSubmit}
                  handleInputChange={this.handleInputChange}
                  formErrors={this.state.formErrors}
                  initialData={this.state.formData}/>
        )
    }
}

export default LoginForm