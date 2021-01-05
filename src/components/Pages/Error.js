import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Courier New",
    fontWeight: "700",
  },
  container: {
    marginTop: "5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    marginBottom: "10rem",
  },
  btn: {
    margin: "auto",
    fontSize: "2rem",
    justifySelf: "space around",
    marginTop: "7rem",
    borderRadius: "30px",
  },
  para: {
    fontFamily: "Courier New",
    fontWeight: "700",
    marginTop: "5rem",
  },
}));
export default function Error() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h1" align="center" className={classes.title}>
        Error 404!
      </Typography>
      <Typography variant="h4" align="center" className={classes.para}>
        Page you are searching for doesn't exist
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        centerRipple
        classes={{
          root: classes.btn,
        }}
      >
        <FaArrowLeft></FaArrowLeft>
        <span style={{ width: "10px" }}></span>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Return to Home Page
        </Link>
      </Button>
    </div>
  );
}
