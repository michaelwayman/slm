import React from 'react';
import { connect } from 'react-redux';
import {RegistrationForm} from '../HomePage/components/index.jsx';

import './styles.scss';

class RegistrationPage extends React.Component {
    render() {
        return (
            <section id="registrationPage">
                <div className="logo"></div>
                <h3>Create an account.</h3>
                <div className="boxContainer login">
                    <RegistrationForm />
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