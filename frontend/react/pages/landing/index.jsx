import React from 'react';

import {BGImage} from '../../components/bgimage/index.jsx';
import {RegistrationModal} from '../../components/modal/index.jsx';
import {Footer} from '../../components/footer/index.jsx';

require('./styles.scss');


export class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {showRegister: false};
        this.handleRegisterClick = this.handleRegisterClick.bind(this);
    }

    handleRegisterClick(e) {
        e.preventDefault();
        this.setState({showRegister: !this.state.showRegister});
    }

    render() {
        return (
            <section id="landingPage">

                <BGImage imgUrl={'images/landing.jpg'} parallax={true}/>
                <div className="content">
                        <div className="title"><h1 className="title">Software License Management. Easy.</h1></div>
                        {/*<p className="description">*/}
                            {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit,*/}
                            {/*sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.*/}
                            {/*Ut enim ad minim veniam, quis nostrud exercitation ullamco*/}
                            {/*laboris nisi ut aliquip ex ea commodo consequat.*/}
                        {/*</p>*/}
                        <div id="registerButton"><a href="#register" onClick={this.handleRegisterClick}>register</a></div>
                </div>
                {this.state.showRegister && <RegistrationModal close={this.handleRegisterClick}/>}
                <Footer/>
            </section>
        )
    }
}