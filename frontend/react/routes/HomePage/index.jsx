import React from 'react';
import {Jumbotron, Navigation, Footer} from '../components/index.jsx';
import {RegistrationForm} from './components/index.jsx';

import './styles.scss';


class HomePage extends React.Component {

    render() {
        return (
            <section id="homePage">
                <Navigation/>
                <Jumbotron id="homeJumbo">
                    <div className="container row pageWidth">
                        <div className="col-7">
                            <h2>Software, licenses and subscriptions.</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam.
                            </p>
                        </div>
                        <div className="col-5">
                            <RegistrationForm />
                        </div>
                    </div>
                </Jumbotron>

                <div className="fooBar sectionPad">
                    <div className="iconTitle">
                        <i className="fa fa-id-card-o fa-4x"/>
                        <h5>License management for businesses</h5>
                    </div>
                    <div className="textTitle">
                        <h2>A better way to manage software</h2>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam.
                    </p>
                    <div className="link">
                        <a href="#">See how businesses manage their licenses</a>
                    </div>
                    <div className="button">
                        <button className="btn btnBlue">Sign up your business</button>
                    </div>
                </div>
                <Footer/>
            </section>
        )
    }
}

export default HomePage