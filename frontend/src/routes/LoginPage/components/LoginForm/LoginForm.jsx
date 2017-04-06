import React from 'react';

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

    getInputClassName(name) {
        const classes = ['inputControl', 'marginTop-24'];
        if (!!this.props.formErrors[name]) classes.push('error');
        return classes.join(' ')
    }

    fieldError(name) {
        const error = this.props.formErrors[name];
        return error && <div className="formError"><span>{error}</span></div>
    }

    render() {
        return (
            <form className="form inline" onSubmit={this.props.handleSubmit}>
                {this.props.formErrors.non_field_errors && this.nonFieldErrors()}
                <input className={this.getInputClassName('email')}
                       type="email"
                       name="email"
                       placeholder="email"
                       value={this.props.formData.email || ''}
                       onChange={this.props.handleInputChange}/>
                {this.fieldError('username')}
                <input className={this.getInputClassName('password')}
                       type="password"
                       name="password"
                       placeholder="password"
                       onChange={this.props.handleInputChange}/>
                {this.fieldError('password')}
                <button className="btn btnGreen marginTop-24" type="submit">Sign in</button>
            </form>
        )
    }
}

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {},
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
        this.props.handleSubmit(this.state.formData);
    }

    render() {
        return (
            <Form handleSubmit={this.handleSubmit}
                  handleInputChange={this.handleInputChange}
                  formErrors={this.props.formErrors || {}}
                  formData={this.state.formData}/>
        )
    }
}

export default LoginForm
