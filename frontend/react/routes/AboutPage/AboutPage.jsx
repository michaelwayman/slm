import React from 'react';
import { Navigation, Footer } from '../components/index.jsx';
import './styles.scss';

class ExplainerSection extends React.Component {
  render() {
    return (
      <div className="padTop-64">
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

class SegmentedTableSection extends React.Component {
  render() {
    return (
      <div className="segmentedTableSection textCenter">
        <div className="header padTop-32">
          <h2 className="font-24 fontWeight-200">{this.props.title}</h2>
        </div>
        <div className="content padBottom-32">
          <h3 className="font-16 fontWeight-400">{this.props.description}</h3>
        </div>
      </div>
    )
  }
}

class SegmentedTableSections extends React.Component {
  buildSegementedTableSections() {
    const sections = [
      {
        title: 'March 2017',
        description: 'First Commit'
      },
      {
        title: 'New York',
        description: 'Headquarters'
      },
      {
        title: 'Over 100',
        description: 'Services Integrated'
      }
    ];

    return sections.map((item, index) => {
      return (
        <div className='col-3'>
          <SegmentedTableSection key={index} title={item.title}
                                 description = {item.description}/>
        </div>
      )
    });
  }

  render() {
    return (
      <div className="segmentedTableSections row pageWidth padY-64 textCenter">
        {this.buildSegementedTableSections()}
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

export default AboutPage
