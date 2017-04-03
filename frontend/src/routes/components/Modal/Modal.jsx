import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import RegistrationForm from '../../HomePage/components/index.jsx';


require('./styles.css');


export class Modal extends React.Component {

    // componentDidMount() {
    //     document.body.style.overflow = 'hidden';
    // }
    //
    // componentWillUnmount() {
    //     document.body.style.overflow = 'initial';
    // }

    render () {
        return (
            <ReactCSSTransitionGroup transitionName="modal"
                                     transitionEnter={false}
                                     transitionLeave={false}
                                     transitionAppear={true}
                                     transitionAppearTimeout={1000}>
                <div className="modal">
                    <div className="backdrop"></div>
                    <div className="content">
                        <span className="close"><a href="#" onClick={this.props.close}>X</a></span>
                        {this.props.header}
                        {this.props.body}
                        {this.props.footer}
                    </div>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}


export class RegistrationModal extends React.Component {
    render() {
        return (
            <Modal {...this.props} body={<RegistrationForm/>}/>
        )
    }
}
