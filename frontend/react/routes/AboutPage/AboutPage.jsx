import React from 'react';
import { Navigation, Footer } from '../components/index.jsx';
import './styles.scss';

class ExplainerSection extends React.Component {
  render() {
    return (
      <div className="pageWidth row padTop-64">
        <div>
          <div className="col-12 textCenter">
            <h3><b>{this.props.title}</b>{this.props.subtitle}</h3>
            <p className="padTop-16">{this.props.description}</p>
          </div>
        </div>
      </div>
    )
  }
}

class AboutPage extends React.Component {
  render() {
    return (
      <section id="aboutPage">
        <Navigation/>
          <div className="headerImage"/>
          <div className="pageWidth padBottom-64">
              <div className="row padTop-32 padBottom-32">
                <ExplainerSection title="SLM"
                                  subtitle=" is how people manage their services."
                                  description="We're supporting a community of makers, builders, and innovators manage their forest of licenses."
                  />
              </div>
          </div>
        <Footer/>
      </section>
    )
  }
}

export default AboutPage
