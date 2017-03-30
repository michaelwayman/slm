import React from 'react';
import { connect } from 'react-redux';
import { Navigation, Footer } from '../components/index.jsx';
import { ProgressBar, CreateUserForm } from './components/index.jsx';
import {loggedIn} from '../../auth.jsx';

import { createAccount } from '../components/index.jsx';

import './styles.scss';


class RegistrationPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: this.getRegistrationPhase()
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({
            activeIndex: this.getRegistrationPhase()
        })
    }

    getRegistrationPhase() {
        if (!loggedIn()) {
            return 0;
        } else {
            return 1;
        }
    }

    getRegistrationForm() {
        switch (this.state.activeIndex) {
            case 0:
                return <CreateUserForm formErrors={this.props.page.formErrors}/>;
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
                        <ProgressBar activeIndex={this.state.activeIndex}/>
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
        return {page: state.page, user: state.user, account: state.account}
    }
)(RegistrationPage);