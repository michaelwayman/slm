import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className="padY-64">
                <div className="container pageWidth">
                    <div className="row">
                        <div className="col-2">
                            <h4>SLM</h4>
                            <span className="font-12">© 2017</span>
                        </div>
                        <div className="col-2">
                            <h4>Features</h4>
                            <ul>
                                <li><a href="#">Discovery</a></li>
                                <li><a href="#">Management</a></li>
                                <li><a href="#">Analytics</a></li>
                                <li><a href="#">Solutions</a></li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h4>Partners</h4>
                            <ul>
                                <li><a href="#">Partner with us</a></li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h4>Company</h4>
                            <ul>
                                <li><Link to="/about">About</Link></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h4>Resources</h4>
                            <ul>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Help</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export {Footer}

