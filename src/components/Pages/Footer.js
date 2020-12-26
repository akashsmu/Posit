import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    position: "sticky",
    width: "auto",
    height: "100%",
  },
  footerP: {
    fontFamily: "Courier New",
    fontSize: "2.5rem",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  footer: {
    padding: theme.spacing(6, 3),
    marginTop: "auto",
    textAlign: "center",
    backgroundColor: "white",
    color: "black",
    minHeight: "200px",
    backgroundImage: "linear-gradient(to top, #feada6 0%, #f5efef 100%);",
  },
  linkedin: {
    marginTop: "10px",
  },
  line: {
    border: "2px solid black",
    width: "650px",
    position: "relative",
    left: "30%",
    [theme.breakpoints.down("md")]: {
      width: "500px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "250px",
      left: "25%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "350px",
      left: "35%",
    },
  },
  ReduceScreen: {
    [theme.breakpoints.down("md")]: {
      marginTop: "15px",
    },
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.line} />
      <footer className={classes.footer}>
        <Container maxWidth="sm" className={classes.footerP}>
          <div>
            <Typography variant="h4">
              <italic>Narayana M Hedge</italic>
            </Typography>
            <Typography variant="h5">
              <bold>Email:</bold>narayanahedge83@gmail.com
            </Typography>
          </div>
          <div className={classes.ReduceScreen}>
            <Typography variant="h4">
              <italic>Akash S M U</italic>
            </Typography>
            <Typography variant="h5">
              <bold>Email:</bold> smu.akash9@gmail.com
            </Typography>
            <a
              href="https://www.linkedin.com/in/akash-s-m-u-16789b97"
              target="_blank"
              rel="noreferrer">
              <IconContext.Provider
                value={{
                  color: "#0ac8f2",
                  className: `${classes.linkedin}`,
                }}>
                <div>
                  <FaLinkedinIn />
                </div>
              </IconContext.Provider>
            </a>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
