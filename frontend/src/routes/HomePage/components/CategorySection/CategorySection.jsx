import React from 'react';

import './styles.css';


class CategoryItem extends React.Component {
    render() {
        return (
            <div className="col-2 categoryItemWrapper">
                <a href="#">
                <div className="categoryItem marginCenter textCenter padY-24">
                    <i className={`fa ${this.props.icon} fa-3x`}/>
                    <h5 className="fontWeight-400 marginTop-16">{this.props.name}</h5>
                </div>
                </a>
            </div>
        )
    }
}


class CategorySection extends React.Component {

    buildItems() {
        const items = [
            {name: 'Developer Tools', icon: 'fa-code-fork'},
            {name: 'Design Tools', icon: 'fa-photo'},
            {name: 'Project Management', icon: 'fa-calendar'},
            {name: 'Hosting', icon: 'fa-server'},
            {name: 'Cloud Services', icon: 'fa-cloud'},
            {name: 'Communication', icon: 'fa-phone'},
            {name: 'Financial Tools', icon: 'fa-balance-scale'},
            {name: 'Marketing', icon: 'fa-line-chart'},
            {name: 'Employee Management', icon: 'fa-group'},
            {name: 'Dev Ops', icon: 'fa-terminal'},
            {name: 'Sales', icon: 'fa-shopping-cart'},
        ];

        return items.map((item, index) => {
            return <CategoryItem key={index} name={item.name} icon={item.icon}/>
        })
    }

    buildRows() {
        const items = this.buildItems();
        const numRows = Math.ceil(items.length / 6);

        const rows = [];

        for (let i = 0; i < numRows; i++) {
            let classes = 'row';
            if (i !== 0) classes += ' padTop-16';
            rows.push(
                <div key={i} className={classes}>
                    {items.slice(i*6, i*6 + 6)}
                </div>
            )
        }
        return rows
    }

    render() {
        return (
            <div className={this.props.className}>{this.buildRows()}</div>
        )
    }
}

export default CategorySection;
