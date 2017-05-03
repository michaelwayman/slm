import React, { Component } from 'react'
import { ProductDetailHeading, ScreenShotSelector, RatingsContainer } from './components/index.jsx'
import { Navigation, Footer } from '../components/index.jsx'
import {StarRating} from '../components/Rating/index.jsx'
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
        <div className="infoSection padTop-8">
            <h5>Updated</h5>
            <p>Lorem ipsum dolor sit amet, consectetur </p>
        </div>
        <div className="infoSection padTop-8">
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


const ProductContent = () => (
    <div className="productDetailPage pageWidth">
        <div className="mainContent">
            <ProductDetailHeading/>
            <ScreenShotSelector/>
        </div>
        <SideBar>
            <InfoBox/>
        </SideBar>
    </div>
);


class ProductDetailPage extends Component {

    render() {
        return (
            <div>
                <Navigation/>
                <ProductContent/>
                <RatingsContainer/>
                <Footer/>
            </div>
        )
    }
}


export {ProductDetailPage}
