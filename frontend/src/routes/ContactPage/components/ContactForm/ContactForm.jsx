import React from 'react';
import { connect } from 'react-redux';
import { contactSubmit } from './actions.jsx';

import './styles.scss';


class ContactForm extends React.Component {

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
        const classes = ['inputControl'];
        if (!!this.props.formErrors[name]) classes.push('error');
        return classes.join(' ')
    }

    fieldError(name) {
        const error = this.props.formErrors[name];
        return error && <div className="formError"><span>{error}</span></div>
    }

    render() {
        return (
            <form className="form contactForm inline" onSubmit={this.props.handleSubmit}>
                {this.props.formErrors.non_field_errors && this.nonFieldErrors()}
                <div className="row">
                    <div className="col-4 marginTop-16">
                        <label htmlFor="name">Name</label>
                        <input className={this.getInputClassName('name')}
                               type="name"
                               name="name"
                               value={this.props.formData.name || ''}
                               onChange={this.props.handleInputChange}/>
                        {this.fieldError('name')}
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 marginTop-16">
                        <label htmlFor="email">Email</label>
                        <input className={this.getInputClassName('email')}
                               type="email"
                               name="email"
                               value={this.props.formData.email || ''}
                               onChange={this.props.handleInputChange}/>
                        {this.fieldError('email')}
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 marginTop-16">
                        <label htmlFor="subject">Subject</label>
                        <input className={this.getInputClassName('subject')}
                               type="text"
                               name="subject"
                               onChange={this.props.handleInputChange}/>
                        {this.fieldError('subject')}
                    </div>
                </div>
                <div className="marginTop-16 row">
                    <div className="col-8">
                        <label htmlFor="message">How can we help?</label>
                        <textarea className={this.getInputClassName('subject')}
                               type="text"
                               name="message"
                                  placeholder="Please be as specific as possible"
                               onChange={this.props.handleInputChange}/>
                        {this.fieldError('message')}

                        <div className="padTop-32">
                            <button className="btn btnGreen" type="submit">Send Request</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

class ContactFormContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: Object.assign({}, {
                username: this.props.user.email
            }),
            formErrors: {},
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
        this.props.dispatch(contactSubmit(
            this.state.formData,
            data => {
                console.log('success bitches')
            },
            data => {
                console.log(data);
                this.setState({formErrors: data})
            }
        ));
    }

    render() {
        return (
            <ContactForm handleSubmit={this.handleSubmit}
                         handleInputChange={this.handleInputChange}
                         formErrors={this.state.formErrors}
                         formData={this.state.formData}/>
        )
    }
}

export default connect(
    (state) => {
        return {user: state.user}
    }
)(ContactFormContainer)
