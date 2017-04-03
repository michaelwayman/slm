import React from 'react';

import { Navigation, Footer, Jumbotron } from '../components/index.jsx';

import './styles.css';

class FeaturesPage extends React.Component {
    render() {
        return (
            <section id="featuresPage">
                <Navigation/>
                <Jumbotron>
                    <div className="pageWidth">
                    <h1>Features</h1>
                    </div>
                </Jumbotron>
                <Footer/>
            </section>
        )
    }
}

export {FeaturesPage}
