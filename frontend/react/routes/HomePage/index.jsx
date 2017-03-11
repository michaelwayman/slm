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
                            <h2>Software. Licenses. Subscription management.</h2>
                            <p className="font-20">
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

                <div className="iconSection pageWidth padTop-64">
                    <div className="row">
                        <div className="col-12 textCenter">
                            <i className="fa fa-id-card-o fa-4x"/>
                            <h5 className="padTop-8">License management for businesses</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 textCenter">
                            <h2 className="padTop-16">A better way to manage software</h2>
                            <p className="padTop-8 mSectionWidth font-20">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam.
                            </p>
                            <div className="padTop-16"><a href="#">See how businesses manage their licenses</a></div>
                        </div>
                    </div>
                    <div className="row padTop-32">
                        <div className="col-12 textCenter">
                            <button className="btn btnBlue">Sign up your business</button>
                        </div>
                    </div>
                </div>

                <div className="imageSection pageWidth padTop-64">
                    <div className="row">
                        <div className="col-6">
                            <div className="padTop-96">
                                <h4>Save time and money</h4>
                                <p className="font-16">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam.
                                </p>
                            </div>
                        </div>
                        <div className="col-6 textCenter">
                            <img src="images/img1.svg" />
                        </div>
                    </div>
                </div>

                <div className="imageSection pageWidth padY-64">
                    <div className="row">
                        <div className="col-6 textCenter">
                            <img src="images/img1.svg" />
                        </div>
                        <div className="col-6">
                            <div className="padTop-96">
                                <h4>Save time and money</h4>
                                <p className="font-16">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
            </section>
        )
    }
}

export default HomePage