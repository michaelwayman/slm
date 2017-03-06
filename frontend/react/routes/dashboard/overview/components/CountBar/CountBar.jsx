import React from 'react';

import './styles.scss';

class CountItem extends React.Component {
    render() {
        return (
            <div className="item">
                <div className="container">
                    <div className="title"><i className={`fa ${this.props.fa} fa-1x`}/> {this.props.title}</div>
                    <div className="value"><span>{this.props.value}</span></div>
                </div>
            </div>
        )
    }
}

class CountBar extends React.Component {

    buildSummaryEntities() {
        const entities = [
            {title: 'Total Users',fa: 'fa-users',value: '18'},
            {title: 'Total Licenses',fa: 'fa-id-card-o',value: '5'},
            {title: 'Total Groups',fa: 'fa-object-group',value: '3'}
        ];

        return entities.map((item, index) => {
            return <CountItem key={index} fa={item.fa} title={item.title} value={item.value}/>
        })
    }

    addSeparator(items) {
        let returnValue = [];
        items.forEach((item, index) => {
            returnValue.push(item);
            if (index != items.length - 1) {
                let separator = <div key={items.length + index} className="separator"></div>;
                returnValue.push(separator)
            }
        });
        return returnValue;
    }

    render() {
        const items = this.buildSummaryEntities();
        return (
            <div className="countBar">
                {this.addSeparator(items)}
            </div>
        )
    }
}

export default CountBar