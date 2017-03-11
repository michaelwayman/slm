import React from 'react';
import { connect } from 'react-redux';
import { RegistrationForm } from '../HomePage/components/index.jsx';
import { setPageState } from '../../actions.jsx';

import './styles.scss';

class RegistrationPage extends React.Component {

    componentDidMount() {
        this.props.dispatch(setPageState({}))
    }

    render() {
        return (
            <section id="registrationPage">
                <div className="logo"></div>
                <h3>Create an account.</h3>
                <div className="boxContainer login">
                    <RegistrationForm formErrors={this.props.page.formErrors} formData={this.props.page.formData} />
                </div>
                <div className="boxContainer createAccount">
                    <span>already have an account? <a href="#">Login.</a></span>
                </div>
            </section>
        )
    }
}


export default connect(
    (state) => {
        return state
    }
)(RegistrationPage);