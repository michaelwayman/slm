import React from 'react';
import ReactChart from 'react-chartjs';

import './styles.scss';

class LicenseChart extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.refs.chart.getCanvas().width = this.refs.chartContainer.offsetWidth;
    }

    render() {

        const data = [
            {
                value: 300,
                color:"#F7464A",
                highlight: "#FF5A5E",
                label: "Red"
            },
            {
                value: 50,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Green"
            },
            {
                value: 100,
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "Yellow"
            }
        ];

        const option = {
            responsive: true,
            maintainAspectRatio: true,
        };
        return (
            <div className="licenseChart">
                <div className="chartContainer" ref="chartContainer">
                    <ReactChart.Doughnut ref="chart" width="100" height="100" data={data} options={option}/>
                </div>
            </div>
        )
    }
}

export default LicenseChart