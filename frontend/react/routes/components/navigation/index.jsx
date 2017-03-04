import React from 'react';

require('./styles.scss');


class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.handleLinkClick = this.handleLinkClick.bind(this);
        this.state = {};
    }

    handleLinkClick(event) {
        this.props.onLinkClick(event);
    }

    render() {

        return (
            <section className="nav">
                <div className="container">
                    <nav className="navLinks">
                        <a href="#">Features</a>
                        <a href="#">Explore</a>
                        <a href="#">Pricing</a>
                    </nav>
                    <section className="actions">
                        <a href="#">Sign in</a> or <a href="#">Sign up</a>
                    </section>
                </div>
            </section>
        )
    }
}

export default Navigation
