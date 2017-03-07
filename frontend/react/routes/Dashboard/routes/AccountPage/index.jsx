import React from 'react';

import {Card} from './components/index.jsx';

// require('./styles.scss');


class AccountPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section id="accountPage">
                <h1>Account</h1>
                <Card className="col-12" title="Organization">
                    <div className="row">
                        <div className="col-4">
                            Top 5
                        </div>
                        <div className="col-1"></div>
                        <div className="col-4">
                            Solution
                        </div>
                        <div className="col-2">
                        </div>
                    </div>
                </Card>
            </section>
        )
    }
}

export default AccountPage