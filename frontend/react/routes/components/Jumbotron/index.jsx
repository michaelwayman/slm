import React from 'react';

import './styles.scss';

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

export default Jumbotron