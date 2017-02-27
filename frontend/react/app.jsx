import React from 'react';
import ReactDOM from 'react-dom';


import LandingPage from "./pages/landing/index.jsx";
import ConsolePage from "./components/console/index.jsx";
import Navigation from "./components/navigation/index.jsx";

require('./styles/styles.scss');

class App extends React.Component {

    constructor(props) {
        super(props);

        this.handleCloseConsole = this.handleCloseConsole.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);

        this.state = {
            renderConsole: false
        }
    }

    componentDidMount() {
        this.scrollListener = window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener(this.scrollListener);
    }

    handleScroll() {
    }

    handleLinkClick(event) {
        let url = event.currentTarget.getAttribute('href');

        switch(url) {
            case '#console':
                event.preventDefault();
                this.setState({renderConsole: !this.state.renderConsole});
                break;
        }
    }

    handleCloseConsole() {
        this.setState({renderConsole: false});
    }

    render() {
        return (
            <div id="app">
                <Navigation onLinkClick={this.handleLinkClick}/>
                {this.state.renderConsole && <ConsolePage closeConsole={this.handleCloseConsole}/>}
                <LandingPage/>
            </div>
        )
    }
}

const app = <App/>;
ReactDOM.render(
  app,
  document.getElementById('reactEntry')
);
