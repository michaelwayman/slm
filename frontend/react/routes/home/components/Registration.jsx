import React from 'react';
import $ from 'jquery';

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            again: '',
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
        if(this.state.password == this.state.repeat) {
            $.ajax({
                type: "POST",
                url: '/api/users/',
                dataType: "json",
                data: {
                    email: this.state.email,
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
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input className="inputControl" type="email" placeholder="email" name="email" onChange={this.handleInputChange}/>
                <input className="inputControl" type="password" placeholder="password" name="password" onChange={this.handleInputChange}/>
                <input className="inputControl" type="password" placeholder="again" name="again" onChange={this.handleInputChange}/>
                <button className="btn" type="submit">Sign up for SLM</button>
            </form>
        );
    }
}

export default RegistrationForm