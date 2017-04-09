import React from 'react';

import './styles.css';

class ConfirmationDialogue extends React.Component {

  render() {
    return (
      <section id="confirmationDialogue">
        <div className="body padTop-64">
          <div className="title">
            <h2>Success!</h2>
          </div>
          <div className="message padTop-16">
            <p>We'll be in touch with you soon.</p>
          </div>
        </div>
      </section>
    )
  }
}

export default ConfirmationDialogue
