import React from 'react';

import AccountPage from './account/index.jsx';
import OverviewPage from './overview/index.jsx';
import LicensesPage from './licenses/index.jsx';

require('./styles.scss');


class DashboardPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: <OverviewPage/>
        };

        this.handleNavClick = this.handleNavClick.bind(this);
    }

    handleNavClick(e) {
        e.preventDefault();

        const target = e.currentTarget.getAttribute('href');
        switch (target) {
            case '#overview':
                this.setState({page: <OverviewPage/>});
                break;
            case '#licenses':
                this.setState({page: <LicensesPage/>});
                break;
            case '#groups':
                this.setState({page: <OverviewPage/>});
                break;
            case '#users':
                this.setState({page: <OverviewPage/>});
                break;
            case '#account':
                this.setState({page: <AccountPage/>});
                break;
        }
    }

    render() {
        return (
            <section id="dashboardPage">
                <nav>
                    <div className="heading"></div>
                    <ul>
                        <li className="active"><a href="#overview" onClick={this.handleNavClick}>Overview</a></li>
                        <li><a href="#licenses" onClick={this.handleNavClick}>Licenses</a></li>
                        <li><a href="#groups" onClick={this.handleNavClick}>Groups</a></li>
                        <li><a href="#users" onClick={this.handleNavClick}>Users</a></li>
                        <li><a href="#account" onClick={this.handleNavClick}>Account</a></li>
                    </ul>
                </nav>
                <section>
                    {this.state.page}
                </section>
            </section>
        )
    }
}

export default DashboardPage