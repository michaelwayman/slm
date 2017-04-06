import React from 'react';
import { connect } from 'react-redux';

import {
    createUser,
    setPageFormErrors,
    loginUser,
    // getAccountDetails
} from '../../../../actions/index.jsx';

import {ProgressBar} from '../../components/index.jsx';

import {CreateUserForm} from './components/index.jsx';

import './styles.css';

class CreateUserPageChild extends React.Component {

    handleFormSubmit = (formData) => {
        const {email, password} = formData;

        this.props.dispatch(createUser(email, password))
            .then(() => this.props.dispatch(setPageFormErrors({})))
            .then(() => this.props.dispatch(loginUser(email, password)))
            .then(() => this.props.history.push('/register/plan'))
            .catch((error) => {});
    };

    render() {
        return (
            <div>
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
                                        handleSubmit={this.handleFormSubmit}/>
                    </div>
                </div>
            </div>
        )
    }
}

const CreateUserPage = connect(
    (state) => {
        return {page: state.page}
    }
)(CreateUserPageChild);

export default CreateUserPage;
