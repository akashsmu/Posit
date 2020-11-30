import React, { useState } from "react";
import {
  Hint,
  HorizontalGridLines,
  MarkSeries,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis,
} from "react-vis";

export default function PositGraph({ allEnv, allEnvKeys }) {
  const [value, setValue] = useState();
  const data1 = [
    allEnvKeys.map((key) => ({
      x: parseInt(key.split("_")[0]),
      y: allEnv[key][1],
    })),
  ];
  console.log(data1);
  const rememberValue = (value) => {
    setValue(value);
  };

  const forgetValue = () => {
    setValue(null);
  };
  return (
    <div>
      <XYPlot height={350} width={350}>
        {/* <LineSeries data={data} /> */}
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title="Posit Length (N value)" />
        <YAxis title="Relative Error" />
        <MarkSeries
          onValueMouseOver={rememberValue}
          onValueMouseOut={forgetValue}
          data={data1[0]}
        />
        {value ? <Hint value={value} /> : null}
      </XYPlot>
    </div>
  );
}
