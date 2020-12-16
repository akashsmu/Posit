import { Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Courier New",
  },
  ieeeResource: {
    fontFamily: "Courier New",
  },
  positResource: {
    fontFamily: "Courier New",
  },
}));

function Resources() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2" align="center" className={classes.root}>
        Resources
      </Typography>
      <div className={classes.ieeeResource}>
        <Typography variant="h4"> IEEE 754 </Typography>
        <ul>
          <li>Wikipedia Page on IEEE 754</li>
          <li>Decimal To IEEE 754 Converter</li>
        </ul>
      </div>
      <div>
        <Typography variant="h4"> POSIT </Typography>
      </div>
    </div>
  );
}

export default Resources;
