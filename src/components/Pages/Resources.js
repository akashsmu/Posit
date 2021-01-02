import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100%",
    paddingBottom: "2%",
  },
  li: {
    listStyleType: "decimal",
    fontFamily: "Courier New",
    fontSize: "2rem",
    fontWeight: "700",
    textDecoration: "underline",
    paddingTop: "0.3%",
  },
  ul: {
    paddingTop: "0.5%",
    fontFamily: "Courier New",
    paddingLeft: "7%",
    width: "100%",
  },
  title: {
    paddingTop: "2%",
    fontFamily: "Courier New",
    fontWeight: "700",
    paddingLeft: "2%",
  },
}));
function Resources() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Typography variant="h2" className={classes.title}>
        Hello World
      </Typography>
      <ul className={classes.ul}>
        <li className={classes.li}>resource 1</li>
        <li className={classes.li}>resource 1</li>
        <li className={classes.li}>resource 1</li>
      </ul>
      <Typography variant="h2" className={classes.title}>
        Videos
      </Typography>
      <ul className={classes.ul}>
        <li className={classes.li}>resource 1</li>
        <li className={classes.li}>resource 1</li>
        <li className={classes.li}>resource 1</li>
      </ul>
      <Typography variant="h2" className={classes.title}>
        E-Books and Papers
      </Typography>
      <ul className={classes.ul}>
        <li className={classes.li}>resource 1</li>
        <li className={classes.li}>resource 1</li>
        <li className={classes.li}>resource 1</li>
      </ul>
    </div>
  );
}

export default Resources;
