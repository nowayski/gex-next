import React from "react";
import Image from "./Image";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import Description from "./Description";

function ExpandedItem(props) {
  const graphData = props.graphData;

  return (
    <div className="expanded-div">
      <button onClick={props.expand}>X</button>
      <Image imgSrc={props.imgSrc} altDesc={props.altDesc}/>
      <Description />
      <div className="graphDiv">
        <LineChart width={900} height={400} data={graphData}>
          <Line
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            dot={false}
            activeDot={{ r: 8 }}
          />
          <CartesianGrid strokeDasharray="0" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
}

export default ExpandedItem;
