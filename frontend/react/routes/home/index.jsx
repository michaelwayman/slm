import React from 'react';
import { hashHistory } from 'react-router';

import Jumbotron from '../components/jumbotron/index.jsx';
import {Navigation} from '../components/navigation/index.jsx';
import {RegistrationForm} from './components/index.jsx';

import './styles.scss';


class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    onRegister() {
        hashHistory.push('/login')
    }

    render() {
        return (
            <section id="homePage">
                <Navigation/>
                <Jumbotron id="homeJumbo">
                    <div className="container row">
                        <div className="col-7">
                            <h1>Software Licenses. Management. Easy.</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="col-5">
                            <RegistrationForm onRegister={this.onRegister}/>
                        </div>
                    </div>
                </Jumbotron>
            </section>
        )
    }
}

export default HomePage