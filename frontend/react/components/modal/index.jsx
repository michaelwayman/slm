import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


require('./styles.scss');


class Modal extends React.Component {

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

class RegistrationModal extends React.Component {
    render() {

        const header = (
            <div className="header">
                <div className="title"><h1>Registration</h1></div>
            </div>
        );

        const body = (
            <div className="body">
                <form className="form">
                    <div className="input"><input type="email" placeholder="email" /></div>
                    <div className="input"><input type="password" placeholder="password" /></div>
                    <div className="input"><input type="password" placeholder="again" /></div>
                    <div className="submitButton"><a href="#">register</a></div>
                </form>
            </div>
        );
        return <Modal {...this.props} body={body} header={header}/>
    }
}

export default {RegistrationModal, Modal}
