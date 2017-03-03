import React from 'react';
import $ from 'jquery';

import auth from '../../managers/auth.jsx';

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first: '',
            last: '',
            email: '',
            password: '',
            repeat: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        if(this.state.password == this.state.repeat) {
            $.ajax({
                type: "POST",
                url: '/api/users/',
                dataType: "json",
                data: {
                    first_name: this.state.first,
                    last_name: this.state.last,
                    email: this.state.email,
                    username: this.state.email,     // TODO: Change username to something besides email
                    password: this.state.password
                },
                success: function(data) {
                    console.log('success');
                    alert("Successfully created user")
                },
                error: function(data, status, error) {
                    console.log(data,status,error)
                }
            });
        }

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="First" name="first" value={this.state.first} onChange={this.handleInputChange}/>
                <input type="text" placeholder="Last" name="last" value={this.state.last} onChange={this.handleInputChange}/>
                <input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleInputChange}/>
                <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleInputChange}/>
                <input type="password" placeholder="Repeat" name="repeat" value={this.state.repeat} onChange={this.handleInputChange}/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        auth.login(this.state.username, this.state.password, () => {
            console.log('some call happened');
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="username" placeholder="username" onChange={this.handleInputChange}/>
                <input type="password" name="password" placeholder="password" onChange={this.handleInputChange}/>
                <input type="submit"/>
            </form>
        )
    }
}

export {RegistrationForm, LoginForm}