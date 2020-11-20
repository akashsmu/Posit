import { AppBar, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navButtons: {
    marginRight: theme.spacing(2),
    color: "white",
    marginTop: theme.spacing(1),
  },
  app: {
    flexDirection: "row",
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
    padding: theme.spacing(1),
  },
  linkText: {
    textDecoration: "none",
    color: "#fff",
  },
}));
export default function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.app}>
        <Typography variant="h6" className={classes.title}>
          Posits
        </Typography>
        <Link className={classes.linkText} to="/">
          <Button className={classes.navButtons}>Home</Button>
        </Link>
        <Link className={classes.linkText} to="/about">
          <Button className={classes.navButtons}>About us</Button>
        </Link>
        <Link className={classes.linkText} to="/tools">
          <Button className={classes.navButtons}>Posit tools</Button>
        </Link>
      </AppBar>
    </div>
  );
}
