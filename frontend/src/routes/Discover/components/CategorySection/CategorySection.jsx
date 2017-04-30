import React from 'react';

import './styles.css';

class CategoryItem extends React.Component {
    render() {
        return (
            <div className="item marginRight-32">
                <div>
                    <div className="img">img</div>
                    <div className="title padY-12 fontWeight-400">{this.props.title}</div>
                    <div className="description font-14">{this.props.description}</div>
                </div>
            </div>
        )
    }
}

class CategorySection extends React.Component {

    buildItems() {
        const items = [
            {title: 'FooBar1', description: 'I\'m a really good feature. That\'s why we want to talk about it'},
            {title: 'FooBar1', description: 'I\'m a really good feature. That\'s why we want to talk about it'},
            {title: 'FooBar1', description: 'I\'m a really good feature. That\'s why we want to talk about it'},
        ];

        return items.map((item, index) => {
            return <CategoryItem key={index} title={item.title} description={item.description}/>
        })
    }

    render() {
        return (
            <div className={`categorySection pageWidth padY-32 ${this.props.className}`}>
                <h3 className="fontWeight-500">{this.props.title}</h3>
                <div className="padTop-16 items">
                    {this.buildItems()}
                </div>
            </div>
        )
    }
}


export default CategorySection;