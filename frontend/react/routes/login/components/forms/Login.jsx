import React from 'react'
import auth from '../../../../managers/auth.jsx';

class Form extends React.Component {
    render() {
        return (
            <form className="form inline" onSubmit={this.props.handleSubmit}>
                <div>
                    <input type="text" name="username" placeholder="username" onChange={this.props.handleInputChange}/>
                </div>
                <div>
                    <input type="password" name="password" placeholder="password" onChange={this.props.handleInputChange}/>
                </div>
                <div>
                    <input type="submit"/>
                </div>
            </form>
        )
    }
}

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};

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
        auth.login(this.state.username, this.state.password, (response) => {
            console.log(response);
            this.props.onLogin();
        })
    }

    render() {
        return (
            <Form handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange}/>
        )
    }
}

export default LoginForm