import React from 'react';

import { PriceTiers } from './components/index.jsx';

import { Navigation, Footer } from '../components/index.jsx';

import './styles.scss';


class PricingPage extends React.Component {

    render() {
        return (
            <section id="pricingPage">
                <Navigation/>
                <div className="pricingBg">
                    <div className="row padTop-96 pageWidth textCenter">
                        <div className="col-12">
                            <h1>Plans for all sizes</h1>
                            <p className="font-24 fontWeight-200 padTop-16">
                                SLM is free to use for individuals. <br/>
                                Manage a team or entire company with a paid plan.
                            </p>
                        </div>
                    </div>
                    <PriceTiers/>
                </div>
                <Footer/>
            </section>
        )
    }
}

export default PricingPage