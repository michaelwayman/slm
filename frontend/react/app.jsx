import React from 'react';
import ReactDOM from 'react-dom';

import {LandingPage} from "./pages/landing/index.jsx";
import {DashboardPage} from "./pages/dashboard/index.jsx";
import Navigation from "./components/navigation/index.jsx";

require('./pages/styles/styles.scss');

class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleLinkClick = this.handleLinkClick.bind(this);
        this.state = {}
    }

    handleLinkClick(event) {
        let url = event.currentTarget.getAttribute('href');

        switch(url) {
            case '#':
                event.preventDefault();
                this.setState({});
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div id="app">
                {/*<Navigation onLinkClick={this.handleLinkClick}/>*/}
                <LandingPage/>
                {/*<DashboardPage/>*/}
            </div>
        )
    }
}

const app = <App/>;
ReactDOM.render(
  app,
  document.getElementById('reactEntry')
);
