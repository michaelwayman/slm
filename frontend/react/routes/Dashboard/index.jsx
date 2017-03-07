import React from 'react';
import { hashHistory, Link } from 'react-router'
import { connect } from 'react-redux';

import {NavLink} from '../components/Navigation/index.jsx';

import {
    fetchDashboardDetails,
    logUserOut
} from './actions.jsx';

import {
    AccountPage,
    OverviewPage,
    LicensesPage,
    GroupsPage,
    UsersPage
} from './routes/index.jsx';

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
        console.log(this.props);
        return (
            <div id="dashboard">
                <nav>
                    <div className="title"><span>{this.props.user.email}</span></div>
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
        this.props.dispatch(fetchDashboardDetails(
            this.props.user.token,
            data => {
                console.log(data)
            },
            data => {
                console.log(data)
            }
        ))
    }

    handleLogoutClick(e) {
        e.preventDefault();
        this.props.dispatch(logUserOut());
        hashHistory.push('/');
    }

    render() {
        return (
            <DashboardPresentation menuItems={this.state.menuItems} onLogout={this.handleLogoutClick} user={this.props.user}>
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