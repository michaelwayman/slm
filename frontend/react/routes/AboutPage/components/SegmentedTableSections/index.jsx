import React from 'react';
import './styles.scss';

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
        <div className='col-3' key={index}>
          <SegmentedTableSection title={item.title}
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

export default SegmentedTableSections
