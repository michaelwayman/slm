import React from 'react';
import {Link} from 'react-router';

import {NavLink} from '../components/navigation/index.jsx';

import AccountPage from './account/index.jsx';
import OverviewPage from './overview/index.jsx';
import LicensesPage from './licenses/index.jsx';
import GroupsPage from './groups/index.jsx';
import UsersPage from './users/index.jsx';

import './styles.scss';


class DashboardPresentation extends React.Component {
    buildMenuItems() {
        return this.props.menuItems.map((item, index) => {
            return (
                <NavLink onlyActiveOnIndex={true} key={index} to={item.href} activeClassName="active">
                    {/*<i className={`fa ${item.fa} fa-1x`}/>*/}
                    {item.name}
                </NavLink>
            )
        })
    }

    render() {
        return (
            <div id="dashboard">
                <nav>
                    <ul>
                        {this.buildMenuItems()}
                    </ul>
                    <ul className="bottom">
                        <li><a href="#"><i className="fa fa-sign-out fa-6x"/> Sign out</a></li>
                    </ul>
                </nav>
                <section className="content">
                    {this.props.children}
                </section>
            </div>
        )
    }

}


class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuItems: [
                {name: 'Dashboard', href: '/dashboard', fa: 'fa-dashboard'},
                {name: 'Licenses', href: '/dashboard/licenses', fa: 'fa-id-card-o'},
                {name: 'Groups', href: '/dashboard/groups', fa: 'fa-object-group'},
                {name: 'Users', href: '/dashboard/users', fa: 'fa-users'},
                {name: 'Account', href: '/dashboard/account', fa: 'fa-address-card'},
            ]
        };
    }

    render() {
        return (
            <DashboardPresentation menuItems={this.state.menuItems}>
                {this.props.children}
            </DashboardPresentation>
        )
    }
}

export default {Dashboard, OverviewPage, AccountPage, LicensesPage, GroupsPage, UsersPage}