import React from 'react';
import { connect } from 'react-redux';

import {
    createUser,
    setPageFormErrors,
    loginUser,
} from '../../actions/index.jsx';

import {Jumbotron, Navigation, Footer} from '../components/index.jsx';

import {CategorySection} from './components/index.jsx';

import './styles.css';


class HomePage extends React.Component {

    handleRegistrationSubmit = (formData) => {
        const {email, password} = formData;

        this.props.dispatch(createUser(email, password))
            .then(() => this.props.dispatch(setPageFormErrors({})))
            .then(() => this.props.dispatch(loginUser(email, password)))
            .then(() => this.props.history.push('/register/plan'))
            .catch((error) => this.props.history.push('/register'));
    };

    render() {

        return (
            <section id="homePage">
                <Navigation/>
                <Jumbotron id="homeJumbo">
                    <div className="row pageWidth textCenter padBottom-48">
                        <div className="col-12"><h1>Built for technology companies</h1></div>
                    </div>
                    <div className="row pageWidth">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <form>
                                <input className="inputControl" type="text" placeholder="Find the solutions you're missing"/>
                            </form>
                        </div>
                    </div>
                </Jumbotron>

                <CategorySection className="pageWidth padY-48"/>

                <Footer/>
            </section>
        )
    }
}

export default connect(state => {
    return {page: state.page, user: state.user}
})(HomePage)
