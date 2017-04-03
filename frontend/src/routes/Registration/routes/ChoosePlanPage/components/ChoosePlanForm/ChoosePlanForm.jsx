import React from 'react';

import { updateAccount } from '../../../../../../actions/index.jsx';

import './styles.css';

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

    getInputClassName(name) {
        const classes = [];
        if (!!this.props.formErrors[name]) classes.push('error');
        return classes.join(' ')
    }

    fieldError(name) {
        const error = this.props.formErrors[name];
        return error && <div className="formError"><span>{error}</span></div>
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    {this.props.formErrors.nonFieldErrors && this.nonFieldErrors()}

                    <div className="marginTop-16 fontWeight-600">
                        Choose your plan
                    </div>
                    <div className="row marginTop-16">
                        <div className="col-12 inlineRadio">
                            <label htmlFor="free" className="padY-16">
                                <span>Individual</span><br/>
                                <span className="font-12">free</span>
                                <input className={this.getInputClassName('plan')}
                                       type="radio"
                                       id="free"
                                       value="individual"
                                       name="plan"
                                       onChange={this.props.handleInputChange}/>
                            </label>
                            <label htmlFor="team" className="padY-16">
                                <span>Team</span><br/>
                                <span className="font-12">$3 per user per month (max 7 users)</span>
                                <input className={this.getInputClassName('plan')}
                                       type="radio"
                                       id="team"
                                       value="team"
                                       name="plan"
                                       onChange={this.props.handleInputChange}/>
                            </label>
                            <label htmlFor="organization" className="padY-16">
                                <span>Organization</span><br/>
                                <span className="font-12">$5 per user per month</span><br/>
                                <span className="font-12">Organizations are suited for businesses
                                    who need to manage software and subscriptions for multiple employees.</span>
                                <input className={this.getInputClassName('plan')}
                                       type="radio"
                                       id="organization"
                                       value="organization"
                                       name="plan"
                                       onChange={this.props.handleInputChange}/>
                            </label>
                        </div>
                    </div>
                    <div className="padTop-8 font-12">
                        Don't worry, you can cancel or upgrade at any time.
                    </div>

                    <div className="row marginTop-32">
                        <div className="col-4 floatRight">
                            <button className="btn btnGreen" type="submit">Select Plan</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


class ChoosePlanForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: this.props.formData || {},
            formErrors: this.props.formErrors || {},
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            formData: Object.assign({}, this.state.formData, {[name]: value}),
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.dispatch(updateAccount(
            this.state.formData,
            data => {
            },
            data => {
                this.setState({formErrors: data});
            }
        ));
    }

    render() {
        return <Form handleSubmit={this.handleSubmit}
                     handleInputChange={this.handleInputChange}
                     formErrors={this.state.formErrors}
                     formData={this.state.formData} />
    }
}

export default ChoosePlanForm;
