import React from 'react';
import {Jumbotron, Navigation, Footer} from '../components/index.jsx';
import {RegistrationForm} from '../components/index.jsx';

import './styles.css';

class IconSection extends React.Component {
    render() {
        return (
            <div className="iconSection pageWidth padTop-64">
                <div className="row">
                    <div className="col-12 textCenter">
                        <i className={`fa ${this.props.icon} fa-4x`}/>
                        <h5 className="padTop-8">{this.props.iconText}</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 textCenter">
                        <h2 className="padTop-16">{this.props.title}</h2>
                        <p className="padTop-8 mSectionWidth font-20 fontWeight-300">
                            {this.props.text}
                        </p>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}


class ImageSection extends React.Component {
    render() {
        return (
            <div className="imageSection pageWidth padTop-64">
                <div className="row">
                    <div className="col-6">
                        <div className="padTop-96">
                            <h4>Your software in one place</h4>
                            <p className="font-16 padTop-8">
                                Give teams the software they need with a single click.
                                Find the best solutions for your company.
                            </p>
                        </div>
                    </div>
                    <div className="col-6 textCenter">
                        <img alt="" src={`${this.props.image}`} />
                    </div>
                </div>
            </div>
        )
    }
}


class HomePage extends React.Component {

    render() {
        return (
            <section id="homePage">
                <Navigation/>
                <Jumbotron id="homeJumbo">
                    <div className="container row pageWidth">
                        <div className="col-7 padTop-48">
                            <h2>Built for technology companies.</h2>
                            <p className="font-20 padTop-12">
                                SLM is a software management platform for the technologies you use.
                                Manage your subscriptions and licenses from a single place to give your teams the tools they need.
                            </p>
                        </div>
                        <div className="col-5">
                            <RegistrationForm />
                        </div>
                    </div>
                </Jumbotron>

                <IconSection icon="fa-id-card-o"
                             iconText="Software management for business"
                             title="A better way to manage software"
                             text="SLM brings your software, subscriptions and licenses into one place.">
                    <div className="row padTop-16">
                        <div className="col-12 textCenter"><a href="#">See how businesses manage their software</a></div>
                    </div>
                    <div className="row padTop-32">
                        <div className="col-12 textCenter">
                            <button className="btn btnBlue">Sign up your business</button>
                        </div>
                    </div>
                </IconSection>

                <div className="imageSection pageWidth padTop-64">
                    <div className="row">
                        <div className="col-6">
                            <div className="padTop-96">
                                <h4>Your software in one place</h4>
                                <p className="font-16 padTop-8">
                                    Give teams the software they need with a single click.
                                    Find the best solutions for your company.
                                </p>
                            </div>
                        </div>
                        <div className="col-6 textCenter">
                            <img alt="" src="images/img2.svg" />
                        </div>
                    </div>
                </div>

                <div className="imageSection pageWidth padY-64">
                    <div className="row">
                        <div className="col-6 textCenter">
                            <img alt="" src="images/img2.svg" />
                        </div>
                        <div className="col-6">
                            <div className="padTop-96">
                                <h4>Manage the chaos</h4>
                                <p className="font-16 padTop-8">
                                    Make sure your licenses and subscription don't expire.
                                    Deactivate accounts you no longer use.
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

export {HomePage, ImageSection}