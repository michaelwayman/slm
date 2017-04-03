import React from 'react';

import './styles.scss';

class Card extends React.Component {

    render() {
        return (
            <div className={`card ${this.props.className}`}>
                <div className="header">
                    <div className="title"><h3>{this.props.title}</h3></div>
                </div>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Card