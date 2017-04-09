import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import RegistrationForm from '../../HomePage/components/index.jsx';
import ConfirmationDialogue from '../dialogues/index.jsx';


require('./styles.css');


export class Modal extends React.Component {

    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
        document.body.style.overflow = 'initial';
    }

    render () {
        return (
            <CSSTransitionGroup transitionName="modal"
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
            </CSSTransitionGroup>
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

export class ConfirmationModal extends React.Component {
    render() {
        return (
          <Modal {...this.props} body={<ConfirmationDialogue/>}/>
        )
    }
}
