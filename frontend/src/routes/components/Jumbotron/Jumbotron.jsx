import React from 'react';

import './styles.css';

class Jumbotron extends React.Component {
    render() {
        return (
            <div className="jumbotron" id={this.props.id}>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export {Jumbotron}
