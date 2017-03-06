import React from 'react';


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
        fetch('/api/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.formData)
        })
        .then(response => {
            if (response.status == 201) {
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
        return <Form handleSubmit={this.handleSubmit}
                     handleInputChange={this.handleInputChange}
                     formErrors={this.state.formErrors}/>
    }
}

export default RegistrationForm