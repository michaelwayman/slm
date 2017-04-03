import React from 'react';

import './styles.css';

class PriceTier extends React.Component {

    buildIncludeOptions() {
        const items = this.props.includeOptions.map((item, index) => {
            return <li key={index}>{item}</li>
        });
        return (
            <ul className="font-14 fontWeight-400">
                {items}
            </ul>
        )
    }

    render() {
        return (
            <div className="priceTier textCenter">
                <div className={`${this.props.colorClass} header`}>
                    <h2 className="font-24 padY-12 fontWeight-400">{this.props.title}</h2>
                </div>
                <div className="content">
                    <h3 className="font-24 padY-16 fontWeight-600">{this.props.price}</h3>
                    <h4 className="font-16 padTop-8 fontWeight-600">includes:</h4>
                    {this.buildIncludeOptions()}
                </div>
                <div className={`${this.props.colorClass} footer marginTop-16`}>
                    <h2 className="font-20 padY-12 fontWeight-600">Sign up</h2>
                </div>
            </div>
        )
    }
}

class PriceTiers extends React.Component {

    buildPriceTiers() {
        const priceTiers = [
            {
                title: 'Individual',
                price: 'Free',
                includeOptions: [
                    'Personal Account', 'Software Purchases', 'Subscription Management'
                ],
                colorClass: 'fontBlue'
            },
            {
                title: 'Team',
                price: '$15',
                includeOptions: [
                    'Personal Account', 'Software Purchases', 'Subscription Management'
                ],
                colorClass: 'fontGreen'
            },
            {
                title: 'Company',
                price: '$90',
                includeOptions: [
                    'Personal Account', 'Software Purchases', 'Subscription Management'
                ],
                colorClass: 'fontPurple'
            }
        ];

        return priceTiers.map((item, index) => {
            return (
                <div className="col-3">
                    <PriceTier key={index} title={item.title}
                               price={item.price} includeOptions={item.includeOptions}
                               colorClass={item.colorClass}/>
                </div>
            )
        });
    }

    render() {

        return (
            <div className="priceTiers row pageWidth padY-64 textCenter">
                {this.buildPriceTiers()}
            </div>
        )
    }
}

export default PriceTiers