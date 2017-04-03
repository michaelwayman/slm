import React from 'react';
import { Navigation, Footer } from '../components/index.jsx';
import { ExplainerSection, SegmentedTableSections } from './components/index.jsx';

import './styles.css';

class AboutPage extends React.Component {
  render() {
    return (
      <section id="aboutPage">
        <Navigation/>
          <div className="headerImage"/>
          <div className="pageWidth padBottom-64">
              <div className="padTop-32 padBottom-32">
                <ExplainerSection title="SLM"
                                  subtitle=" is how people manage their services."
                                  description="We're supporting a community of makers, builders, and innovators manage their forest of licenses."
                  />
              </div>
              <SegmentedTableSections/>
          </div>
          <Footer/>
      </section>
    )
  }
}

export {AboutPage}
