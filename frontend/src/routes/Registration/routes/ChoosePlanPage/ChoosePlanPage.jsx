import React from 'react';
import { connect } from 'react-redux';

import { Navigation, Footer } from '../../../components/index.jsx';
import {ProgressBar} from '../../components/index.jsx';

import {ChoosePlanForm} from './components/index.jsx';

import './styles.css';

class ChoosePlanPage extends React.Component {
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
                        <ProgressBar activeIndex={1}/>
                    </div>
                </div>
                <div className="row pageWidth padTop-32 padBottom-64">
                    <div className="col-6">
                        <ChoosePlanForm formErrors={this.props.page.formErrors}/>
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
)(ChoosePlanPage);
