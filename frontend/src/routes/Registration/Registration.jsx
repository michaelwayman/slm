import React from 'react';
import { connect } from 'react-redux';
import { Navigation, Footer } from '../components/index.jsx';
import { CreateUserPage, ChoosePlanPage, TailorExperiencePage } from './routes/index.jsx'
import { Route } from 'react-router-dom'
import './styles.css';


class RegistrationContainer extends React.Component {

    render() {
        return (
            <section id="registrationPage">
                <Navigation/>
                <Route exact path='/register' component={CreateUserPage}/>
                <Route path='/register/plan' component={ChoosePlanPage} />
                <Route path='/register/experience' component={TailorExperiencePage} />
                <Footer/>
            </section>
        )
    }
}

const Registration = connect(
    (state) => {
        return {page: state.page, user: state.user, account: state.account}
    }
)(RegistrationContainer);

export {Registration};
