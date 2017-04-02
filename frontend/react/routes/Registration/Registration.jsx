import React from 'react';
import { connect } from 'react-redux';
import { Navigation, Footer } from '../components/index.jsx';

import './styles.scss';


class Registration extends React.Component {

    render() {
        return (
            <section id="registrationPage">
                <Navigation/>
                {this.props.children}
                <Footer/>
            </section>
        )
    }
}


export default connect(
    (state) => {
        return {page: state.page, user: state.user, account: state.account}
    }
)(Registration);