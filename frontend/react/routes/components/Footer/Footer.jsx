import React from 'react';

import './styles.scss';

class Jumbotron extends React.Component {
    render() {
        return (
            <footer className="sectionPad">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <h4>SLM</h4>
                            <span className="copyright">© 2017</span>
                        </div>
                        <div className="col-2">
                            <h4>Features</h4>
                            <ul>
                                <li><a href="#">Licenses</a></li>
                                <li><a href="#">Software</a></li>
                                <li><a href="#">Subscriptions</a></li>
                                <li><a href="#">Management</a></li>
                                <li><a href="#">Dashboard</a></li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h4>Partners</h4>
                            <ul>
                                <li><a href="#">Partner with us</a></li>
                                <li><a href="#">Terms</a></li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Customers</a></li>
                                <li><a href="#">Press</a></li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h4>Resources</h4>
                            <ul>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Training</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Jumbotron