import './Chart.css'
import ChartBar from "./ChartBar";


function Chart(props) {
  const valuesArray = props.dataPoints.map(i => i.value)
  const maxValue = Math.max(...valuesArray)

  return <div className={'chart'}>
    {props.dataPoints.map(dataPoint =>
      <ChartBar
        value={dataPoint.value}
        maxValue={maxValue}
        key={dataPoint.label}
        label={dataPoint.label}
      />)}
  </div>
}

export default Chart
