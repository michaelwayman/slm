import React from 'react';

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

export default ExplainerSection
