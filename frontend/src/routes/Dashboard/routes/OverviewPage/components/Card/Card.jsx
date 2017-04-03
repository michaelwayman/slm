import React from 'react';

import {Charts} from '../index.jsx';

import './styles.scss';

class Card extends React.Component {

    render() {
        return (
            <div className="card">
                <div className="header">
                    <div className="title"><h4>Licenses</h4></div>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="col-4">
                            Top 5
                            <Charts.LicenseChart/>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-4">
                            Solution
                        </div>
                        <div className="col-2">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card