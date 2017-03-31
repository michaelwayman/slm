import React from 'react';
import { Navigation, Footer } from '../components/index.jsx';
// import './styles.scss';

class AboutPage extends React.Component {
  render() {
    return (
      <section id="aboutPage">
        <Navigation/>
        <div>Hello world</div>
        <Footer/>
      </section>
    )
  }
}

export default AboutPage
