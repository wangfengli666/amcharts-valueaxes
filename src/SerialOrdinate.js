import React, { Component } from 'react';

import AmCharts from 'amcharts3-react';

function rand() {
  return Math.round(Math.random() * 1000);
}

class SerialOrdinate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ordinate: true,
    };

    this.updateOrdinate = this.updateOrdinate.bind(this);
  }

  updateOrdinate() {
    this.setState({ ordinate: !this.state.ordinate });
  }

  render() {
    const config = {
      theme: 'light',
      type: 'serial',
      categoryField: 'time',
      graphs: [{
        title: 'Titre 1',
        valueField: 'val1',
        type: 'line',
      }],
      dataProvider: [
        { time: '08:00', val1: rand() },
        { time: '09:00', val1: rand() },
        { time: '10:00', val1: rand() },
        { time: '11:00', val1: rand() },
        { time: '12:00', val1: rand() },
      ],
      valueAxes: [{
        labelsEnabled: true,
      }],
    };

    config.valueAxes[0].labelsEnabled = this.state.ordinate;

    return (
      <div>
        <button onClick={this.updateOrdinate}>Ordinate {this.state.ordinate ? 1 : 0}</button>
        <div style={{ width: '1000px', height: '500px' }}>
          <AmCharts {...config} />
        </div>
      </div>
    );
  }
}

export default SerialOrdinate;
