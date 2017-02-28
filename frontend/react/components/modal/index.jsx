import React from 'react';

require('./styles.scss');


class Modal extends React.Component {
    render () {
        return (
            <div className="modal">
                <div className="backdrop"></div>
                <div className="content">
                    <span className="close"><a onClick={this.props.close}>X</a></span>
                </div>
            </div>
        )
    }
}

export default Modal
