import React from 'react';

import {connect} from 'react-redux';

import {contactSubmit, setPageFormErrors} from '../../actions/index.jsx';

import { Navigation, Footer } from '../components/index.jsx';
import { ContactForm } from './components/index.jsx';

import './styles.css';


class ContactPage extends React.Component {

    handleFormSubmit = (formData) => {
        this.props.dispatch(contactSubmit(formData))
            .then(() => this.props.dispatch(setPageFormErrors({})))
            .then(() => { console.log('success') })
            .catch(() => {});
    };

    render() {
        return (
            <section id="contactPage">
                <Navigation/>
                <div className="pageWidth padBottom-64">
                    <h1 className="padTop-64">Contact Us</h1>
                    <div className="row padTop-32 padBottom-32">
                        <div className="col-1">
                            <i className={`fa fa-envelope-o fa-1x`}/>
                        </div>
                        <div className="col-4">
                            <p>We have an open contact policy at SLM. Contact us about anything</p>
                        </div>
                    </div>
                    <ContactForm formErrors={this.props.page.formErrors}
                                 handleSubmit={this.handleFormSubmit}/>
                </div>
                <Footer/>
            </section>
        )
    }
}


export default connect(state => {
    return {page: state.page, user: state.user}
})(ContactPage)
