import React from 'react';
import { hashHistory, Link } from 'react-router'
import { connect } from 'react-redux';

import auth from '../../managers/auth.jsx';
// import dboard from '../../managers/dashboard.jsx';
import {fetchOrganizationData} from '../../actions/index.jsx';
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
                    <div className="title"><span>{this.props.userDetails.email}</span></div>
                    <ul>
                        {this.buildMenuItems()}
                    </ul>
                    <ul className="bottom">
                        <li><a href="#" onClick={this.props.onLogout}><i className="fa fa-sign-out fa-6x"/> Sign out</a></li>
                    </ul>
                </nav>
                <section className="content">
                    {this.props.children}
                </section>
            </div>
        )
    }

}


class DashboardA extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuItems: [
                {name: 'Dashboard', href: '/dashboard', fa: 'fa-dashboard'},
                {name: 'Licenses', href: '/dashboard/licenses', fa: 'fa-id-card-o'},
                {name: 'Groups', href: '/dashboard/groups', fa: 'fa-object-group'},
                {name: 'Users', href: '/dashboard/users', fa: 'fa-users'},
                {name: 'Account', href: '/dashboard/account', fa: 'fa-address-card'},
            ],
            userDetails: {}
        };

        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(fetchOrganizationData(this.props.organization.organizationDetails));

        // dboard.userDetails((status, data) => {
        //     this.setState({userDetails: data})
        // })

    }

    handleLogoutClick(e) {
        e.preventDefault();
        auth.logout(() => {
            hashHistory.push('/');
        });
    }

    render() {
        return (
            <DashboardPresentation menuItems={this.state.menuItems} onLogout={this.handleLogoutClick} userDetails={this.state.userDetails}>
                {this.props.children}
            </DashboardPresentation>
        )
    }
}

const Dashboard = connect(
    (state) => {
        return state
    }
)(DashboardA);


export default {Dashboard, OverviewPage, AccountPage, LicensesPage, GroupsPage, UsersPage}