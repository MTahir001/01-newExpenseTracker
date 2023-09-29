import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          max={null}
        />
      ))}
    </div>
  );
};
