import React from 'react';
import { LineChart, Grid } from 'react-native-svg-charts';

const Chart = props => {
  const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
  return (
    <LineChart
      style={{ height: 300 }}
      data={ data }
      svg={{ stroke: '#fff' }}
      contentInset={{ top: 20, bottom: 20 }}
    >
      <Grid />
    </LineChart>
  )
}

export default Chart;