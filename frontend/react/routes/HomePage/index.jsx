import React from 'react';
import {Jumbotron, Navigation} from '../components/index.jsx';
import {RegistrationForm} from './components/index.jsx';

import './styles.scss';


class HomePage extends React.Component {

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
                            <RegistrationForm />
                        </div>
                    </div>
                </Jumbotron>
            </section>
        )
    }
}

export default HomePage