import React from "react";
import { Parallax } from "react-parallax";
const inlineStyle = {
  background: "#000",
  left: "50%",
  top: "50%",
  position: "absolute",
  padding: "20px",
  transform: "translate(-50%, 50%)",
};
const image1 =
  "https://images.unsplash.com/photo-1429153243204-48d8e868f40d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
export default function ParallaxPage() {
  return (
    <div>
      <Parallax bgImage={image1} strength={400} bgImageSizes={"contain"}>
        <div style={{ height: "450px", width: "100%" }}>
          <div style={inlineStyle}>HTML inside Parallax</div>
        </div>
      </Parallax>
      <div style={{ height: "100vh" }}></div>
    </div>
  );
}

