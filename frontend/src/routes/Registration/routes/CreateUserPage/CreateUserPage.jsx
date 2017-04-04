import React from 'react';
import { connect } from 'react-redux';

import { Navigation, Footer } from '../../../components/index.jsx';
import {ProgressBar} from '../../components/index.jsx';

import {CreateUserForm} from './components/index.jsx';

import './styles.css';

class CreateUserPage extends React.Component {

    constructor(props) {
        super(props);
        this.successfulSubmit = this.successfulSubmit.bind(this);
    }

    successfulSubmit() {
        this.props.history.push('/register/plan');
    }

    render() {
        return (
            <div>
                <Navigation/>
                <div className="row pageWidth padTop-64">
                    <div className="col-12">
                        <h1>Sign up with us.</h1>
                    </div>
                </div>
                <div className="row pageWidth padTop-64">
                    <div className="col-10">
                        <ProgressBar activeIndex={0}/>
                    </div>
                </div>
                <div className="row pageWidth padTop-32 padBottom-64">
                    <div className="col-6">
                        <CreateUserForm formErrors={this.props.page.formErrors}
                                        successfulSubmit={this.successfulSubmit}/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}


export default connect(
    (state) => {
        return {page: state.page, user: state.user, account: state.account}
    }
)(CreateUserPage);