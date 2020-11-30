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
  const data = [
    { x: 0, y: 0 },
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 },
  ];
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
        <XAxis title="something" />
        <YAxis title="nothing" />
        <MarkSeries
          onValueMouseOver={rememberValue}
          onValueMouseOut={forgetValue}
          data={data}
        />
        {value ? <Hint value={value} /> : null}
      </XYPlot>
    </div>
  );
}
