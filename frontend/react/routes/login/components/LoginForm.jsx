import React from 'react'
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
            <form className="form inline" onSubmit={this.props.handleSubmit}>
                {this.formErrors()}
                <input className="inputControl" value={this.props.username} type="text" name="username" placeholder="username" onChange={this.props.handleInputChange}/>
                <input className="inputControl" type="password" name="password" placeholder="password" onChange={this.props.handleInputChange}/>
                <button className="btn" type="submit">Sign in</button>
            </form>
        )
    }
}

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: localStorage.email || '',
            password: '',
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
        auth.login(this.state.username, this.state.password, (statusCode, data) => {
            console.log(statusCode, data, 'LOGIN RESPONSE');
            if (statusCode == 200) {
                this.props.onLogin();
            } else {
                const errors = {};
                if (data.non_field_errors) errors.formErrors = data.non_field_errors;
                this.setState(errors);
            }
        })
    }

    render() {
        return (
            <Form handleSubmit={this.handleSubmit}
                  handleInputChange={this.handleInputChange}
                  formErrors={this.state.formErrors}
                  username={this.state.username}/>
        )
    }
}

export default LoginForm