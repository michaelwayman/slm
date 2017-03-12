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
                <div className="row">
                    <div className="col-12 textCenter">
                        <h3>Create an account.</h3>
                    </div>
                </div>
                <div className="boxContainer">
                    <div className="row">
                        <div className="col-12">
                            <RegistrationForm formErrors={this.props.page.formErrors}
                                              formData={this.props.page.formData} />
                        </div>
                    </div>
                </div>
                <div className="boxContainer">
                    <div className="row">
                        <div className="col-12 textCenter">
                            <span>already have an account? <a href="#">Login.</a></span>
                        </div>
                    </div>
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