import React from 'react';
import { connect } from 'react-redux';

import {ProgressBar} from '../../components/index.jsx';

import {CreateUserForm} from './components/index.jsx';

import './styles.css';

class CreateUserPageChild extends React.Component {

    handleSuccess = () => {
      this.props.history.push('/register/plan')
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
                        <CreateUserForm formErrors={this.props.page.formErrors} handleSuccess={this.handleSuccess}/>
                    </div>
                </div>
            </div>
        )
    }
}

const CreateUserPage = connect(
    (state) => {
        return {page: state.page, user: state.user, account: state.account}
    }
)(CreateUserPageChild);

export default CreateUserPage;
