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
            </section>
        )
    }
}

export default AccountPage