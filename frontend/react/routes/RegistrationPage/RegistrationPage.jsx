import React from 'react';
import { connect } from 'react-redux';
import { Navigation, Footer } from '../components/index.jsx';
import { ProgressBar, CreateAccountForm } from './components/index.jsx';
import { setPageState } from '../../actions.jsx';
import {loggedIn} from '../../auth.jsx';

import { createAccount } from '../components/index.jsx';

import './styles.scss';


function getRegistrationPhase() {
    if (!loggedIn()) {
        return 0;
    } else {
        return 1;
    }
}


class RegistrationPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: this.props.page.formData || {},
            formErrors: this.props.page.formErrors || {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(setPageState({}))
    }

    handleSubmit(e) {
        e.prventDefault();
        this.props.dispatch(createAccount(
            this.state.formData,
            data => {
                if (getRegistrationPhase() === 'COMPLETE') hashHistory.push('/dashboard');
            },
            data => {
                if (hashHistory.getCurrentLocation().pathname !== '/register') {
                    this.props.dispatch(setPageState({formErrors: data, formData: this.state.formData}));
                    hashHistory.push('/register');
                }
                else {
                    this.setState({formErrors: data})
                }
            }
        ));
    }

    getRegistrationForm() {
        switch (getRegistrationPhase()) {
            case 0:
                return <CreateAccountForm formErrors={this.props.page.formErrors}
                                          formData={this.props.page.formData}
                                          handleSubmit={this.handleSubmit}/>;
                break;
            case 1:
                break;
            case 2:
                break;
            default:
                return ''
        }
    }

    render() {

        return (
            <section id="registrationPage">
                <Navigation/>
                <div className="row pageWidth padTop-64">
                    <div className="col-12">
                        <h1>Sign up with us.</h1>
                    </div>
                </div>
                <div className="row pageWidth padTop-64">
                    <div className="col-10">
                        <ProgressBar activeIndex={getRegistrationPhase()}/>
                    </div>
                </div>
                <div className="row pageWidth padTop-32 padBottom-64">
                    <div className="col-6">
                        {this.getRegistrationForm()}
                    </div>
                </div>
                <Footer/>
            </section>
        )
    }
}


export default connect(
    (state) => {
        return state
    }
)(RegistrationPage);