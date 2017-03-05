import React from 'react';
import ReactChart from 'react-chartjs';

import './styles.scss';

class AccountActivityChart extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.refs.lineChart.getCanvas());
        this.refs.lineChart.getCanvas().width = this.refs.chartContainer.offsetWidth;
    }

    render() {

        const data = {
            labels: ["Jan '16", "Jan '16", "Jan '16", "Jan '16", "Jan '16", "Jan '16"],
            datasets: [
                {
                    label: '# Licenses',
                    data: [2, 3, 13, 15, 20, 30],
                    fillColor: "rgba(45,220,43,0.2)",
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1
                },
                {
                    label: '# Users',
                    data: [2, 4, 9, 9, 10, 15],
                    fillColor: "rgba(10,20,243,0.2)",
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1
                }]
        };

        const option = {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        };
        return (
            <div className="accountActivityChart">
                <div className="title"><h3>Account activity</h3></div>
                <div className="chartContainer" ref="chartContainer">
                    <ReactChart.Line ref="lineChart" width="800" height="200" data={data} options={option}/>
                </div>
                <div></div>
            </div>
        )
    }
}

export default AccountActivityChart