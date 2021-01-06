import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import YouTube from "react-youtube";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  youtubeSize: {
    [theme.breakpoints.down("md")]: {
      height: "300px",
      width: "500px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "200px",
      width: "300px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      height: "300px",
      width: "450px",
    },
    [theme.breakpoints.up("md")]: {
      height: "390px",
      width: "640px",
    },
  },
}));

function Resources() {
  const classes = useStyles();

  const onready = (event) => {
    event.target.pauseVideo();
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Styles>
      <Typography variant="h1" className="resources">
        Resources
      </Typography>
      <div className="wrapper">
        <Typography variant="h2" className="title">
          Websites
        </Typography>
        <ul className="ul">
          <li className="li">
            Description here -
            <a href="https://posithub.org/khub ">(Hyperlink here)</a>
          </li>
          <li className="li">
            Description here -
            <a
              href="https://www.h-schmidt.net/FloatConverter/IEEE754.html
          ">
              (Hyperlink here)
            </a>
          </li>
          <li className="li">
            Description here -
            <a
              href="https://www.geeksforgeeks.org/ieee-standard-754-floating-point-numbers
          ">
              (Hyperlink here)
            </a>
          </li>
          <li className="li">
            Description here -
            <a href="https://en.wikipedia.org/wiki/IEEE_754">
              (Hyperlink here)
            </a>
          </li>
          <li className="li">
            Description here -
            <a
              href="https://insidehpc.com/2017/02/john-gustafson-presents-beyond-floating-point-next-generation-computer-arithmetic/
          ">
              (Hyperlink here)
            </a>
          </li>
        </ul>
        <Typography variant="h2" className="title">
          Videos
        </Typography>
        <ul className="ul">
          <li className="li">
            This video describes the IEEE 754 standard for floating point binary
            -
          </li>
          <div className="vid-wrapper">
            <YouTube
              className={classes.youtubeSize}
              opts={opts}
              videoId="RuKkePyo9zk"
              onReady={onready}></YouTube>
          </div>
          <li className="li">
            Talk given by Dr. John L Gustafson on Posits at Stanford EE Computer
            Systems Colloquium -
          </li>
          <div className="vid-wrapper">
            <YouTube
              className={classes.youtubeSize}
              opts={opts}
              videoId="aP0Y1uAA-2Y"
              onReady={onready}></YouTube>
          </div>
          <li className="li">
            In this video from the HPC Advisory Council Australia Conference,
            John Gustafson presents: Beating Floats at Their Own Game -
          </li>
          <div className="vid-wrapper">
            <YouTube
              className={classes.youtubeSize}
              opts={opts}
              videoId="N05yYbUZMSQ"
              onReady={onready}></YouTube>
          </div>
        </ul>
        {/* <Typography variant="h2" className="title">
          E-Books and Papers
        </Typography>
        <ul className="ul">
          <li className="li">resource 1'></a></li>
          <li className="li">resource 1'></a></li>
          <li className="li">resource 1'></a></li>
        </ul> */}
      </div>
    </Styles>
  );
}

const Styles = styled.div`
  .resources {
    text-align: center;
    padding-top: 20px;
  }
  .wrapper {
    height: 100%;
    padding-bottom: 2%;
  }
  .li {
    list-style-type: decimal;
    font-family: "Courier New";
    font-size: 2rem;
    font-weight: 700;
    padding-top: 0.3%;
    width: 100%;
  }
  .ul {
    padding-top: 0.5%;
    font-family: "Courier New";
    padding-left: 10rem;
    width: 100%;
  }
  .title {
    padding-top: 2%;
    font-family: "Courier New";
    font-weight: 700;
    padding-left: 3rem;
  }

  a {
    text-decoration: underline;
    color: blue;
    width: 100%;
    word-wrap: break-word;
  }

  .vid-wrapper {
    margin: 20px 0 20px 0;
    margin-left: -4rem;
  }
`;

export default Resources;
