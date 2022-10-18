import ChartBar from "./ChartBar";
import './Chart.css'
function Chart(props){
    const tempArr=props.dataPoints.map((point)=>{
        return point.value
    });
    const maxHeight=Math.max(...tempArr)
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint)=>(
                <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxvalue={maxHeight}
                label={dataPoint.label}
                ></ChartBar>
            ))}
        </div>
    );
}

export default Chart;