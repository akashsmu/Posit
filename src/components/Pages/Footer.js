import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    position: "sticky",
  },
  footerP: {
    fontFamily: "Courier New",
    fontSize: "1.5rem",
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
    minHeight: "200px",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />

      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1" className={classes.footerP}>
            My sticky footer can be found here.
          </Typography>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
