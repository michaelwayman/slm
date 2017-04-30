import React from 'react';
import { Navigation, Footer } from '../../components/index.jsx';

import {
    FeatureSection,
    CategorySection,
} from '../../components/index.jsx';

// import './style.scss';

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <FeatureSection/>
                <div className="padTop-48">
                    <CategorySection title="New tools"/>
                    <CategorySection title="Category 1"/>
                    <CategorySection title="Category 2"/>
                </div>
            </div>
        )
    }
}


export default LandingPage;