import React from 'react';

import {Charts, CountBar, Card} from './components/index.jsx';

import './styles.scss';


class OverviewPresentation extends React.Component {
    render() {
        return (
            <section id="overviewPage">
            </section>
        )
    }
}


class Overview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <OverviewPresentation/>
        )
    }
}

export default Overview