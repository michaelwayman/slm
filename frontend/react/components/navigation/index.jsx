import React from 'react';

require('./styles.scss');

class ItemFontAwesome extends React.Component {
    render() {
        return (
            <div style={this.props.style}>
                <i className={this.props.classes} aria-hidden="true"/>
                <div>{this.props.text}</div>
            </div>
        )
    }
}


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

        const toolBarNav = (
            <ul key="toolbar" style={{top: 16, right: 16}} className="nav fixed horizontal">
                <li key="console">
                    <a href="#console" onClick={this.handleLinkClick}>
                        <ItemFontAwesome classes="fa fa-terminal fa-3x" text="console"/>
                    </a>
                </li>
            </ul>
        );

        return (
            <nav>
                {toolBarNav}
            </nav>
        )
    }
}

export default Navigation
