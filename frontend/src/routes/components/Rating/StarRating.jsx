import React from 'react'

class StarRating extends React.Component {
    render() {
        const fullStars = Math.floor(this.props.stars);
        let halfStar = false;
        let content = [];

        for (let i=0; i < fullStars; i++) {
            content.push(<i className="fa fa-star fa-2x"></i>)
        }

        if (this.props.stars % 1 !== 0) {
            halfStar = true
        }

        if (halfStar){
            content.push(<i className="fa fa-star-half fa-2x"></i>)
        }

        return (
            <div>
                {content}
            </div>
        )

    }
}

export {StarRating}
