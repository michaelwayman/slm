import React from 'react';

import {AccountPage} from './account/index.jsx';
import {OverviewPage} from './overview/index.jsx';
import {LicensesPage} from './licenses/index.jsx';

require('./styles.scss');


export class DashboardPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: '#overview'
        };
        this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
    }

    getPage(page) {
        switch (page) {
            case '#overview':
                return <OverviewPage/>;
                break;
            case '#licenses':
                return <LicensesPage/>;
                break;
            case '#groups':
                return <OverviewPage/>;
                break;
            case '#users':
                return <OverviewPage/>;
                break;
            case '#account':
                return <AccountPage/>;
                break;
        }
    }

    handleMenuItemClick(e) {
        e.preventDefault();
        const target = e.currentTarget.getAttribute('href');
        this.setState({page: target});
    }

    buildMenuItems() {
        const menuItems = [
            {name: 'Overview', href: '#overview'},
            {name: 'Licenses', href: '#licenses'},
            {name: 'Groups', href: '#groups'},
            {name: 'Users', href: '#users'},
            {name: 'Account', href: '#account'},
        ];

        return menuItems.map((item, index) => {
            return (
                <li key={index} className={this.state.page == item.href && 'active'}>
                    <a href={item.href} onClick={this.handleMenuItemClick}>{item.name}</a>
                </li>
            )
        })
    }

    render() {

        return (
            <section id="dashboardPage">
                <nav>
                    <div className="heading"></div>
                    <ul>
                        {this.buildMenuItems()}
                    </ul>
                </nav>
                <section>
                    {this.getPage(this.state.page)}
                </section>
            </section>
        )
    }
}
