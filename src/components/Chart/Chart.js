import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const dataPointsValue = props.dataPoints.map((e) => e.value);
  const maxAmount = Math.max(...dataPointsValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          max={maxAmount}
        />
      ))}
    </div>
  );
};
export default Chart;
