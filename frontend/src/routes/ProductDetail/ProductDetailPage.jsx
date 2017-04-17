import React, { Component } from 'react'
import { ProductDetailHeading, ScreenShotSelector } from './components/index.jsx'
import { Navigation, Footer } from '../components/index.jsx'

import './styles.css'


const SideBar = (props) => (
    <section className="sideBar">
        <div className="sideBarWrapper">
            {props.children}
        </div>
    </section>
);

const InfoBox = ({category, updated, version, price, languages}) => (
    <div className="infoBox padTop-64">
        <h3>More Info</h3>
        <div className="infoSection padTop-32">
            <h5>Category</h5>
            <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className="infoSection padTop-16">
            <h5>Updated</h5>
            <p>Lorem ipsum dolor sit amet, consectetur </p>
        </div>
        <div className="infoSection padTop-16 ">
            <h5>Version</h5>
            <p>Lorem ipsum dolor sit elit</p>
        </div>
        <div className="infoSection padTop-8">
            <h5>Price</h5>
            <p>Lorem elit</p>
        </div>
        <div className="infoSection padTop-8">
            <h5>Language</h5>
            <p>Lorem ipsum</p>
        </div>
    </div>
);


class CurrentRating extends React.Component {
    render() {
        let emptyStars = [];
        let filledStars = [];
        const filled = this.props.stars;
        const empty = 5 - this.props.stars;

        for(let i = 0; i < filled; i++) {
            filledStars.push(<i className="fa fa-star"></i>)
        }

        for(let i = 0; i < empty; i++) {
            emptyStars.push(<i className="fa fa-star-o"></i>)
        }

        return (
            <div>
                {filledStars} {emptyStars}
            </div>
        )

    }
}


class ProductDetailPage extends Component {

    render() {
        return (
            <div>
                <Navigation/>
                <div className="productDetailPage pageWidth">
                    <div className="mainContent">
                        <ProductDetailHeading/>
                        <ScreenShotSelector/>
                    </div>
                    <SideBar>
                        <InfoBox/>
                    </SideBar>

                    {/*<Ratings/>*/}
                </div>
                <CurrentRating stars={4}/>
                <Footer/>
            </div>
        )
    }
}


export {ProductDetailPage}
