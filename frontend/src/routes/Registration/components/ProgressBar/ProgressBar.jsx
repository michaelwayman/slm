import React from 'react';

import './styles.scss';

class ProgressItem extends React.Component {
    render() {

        let classes = 'progressItem row padY-16';
        if (this.props.active) classes += ' active';

        return (
            <div className={classes}>
                <div className="col-4 textCenter">
                    <i className={`fa ${this.props.icon} fa-2x`}/>
                </div>
                <div className="col-8">
                    <p className="title">{this.props.title}</p>
                    <p className="description">{this.props.description}</p>
                </div>
            </div>
        )
    }
}


class ProgressBar extends React.Component {

    constructor(props) {
        super(props);

        this.progressItems = [
            {title: 'Step 1:', description: 'Create your account', icon: 'fa-user-o'},
            {title: 'Step 2:', description: 'Choose your plan', icon: 'fa-handshake-o'},
            {title: 'Step 3:', description: 'Tailor your experience', icon: 'fa-gear'}
        ];
    }

    buildProgressItems() {
        return this.progressItems.map((item, index) => {
            return (
                <div className="col-4" key={index}>
                    <ProgressItem title={item.title}
                                  description={item.description}
                                  icon={item.icon}
                                  active={this.props.activeIndex === index}/>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="progressBar">
                <div className="row">
                    {this.buildProgressItems()}
                </div>
            </div>
        )
    }
}

export default ProgressBar;
