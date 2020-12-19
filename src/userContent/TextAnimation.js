import React from "react";
import { Frame } from "framer";

function TextAnimation(props) {
  const string = Array.from("POSIT");
  return (
    <Frame
      center={"y"}
      height={26}
      width={"100%"}
      background={""}
      style={{
        fontFamily: "Montserrat, Work Sans, sans-serif",
        fontWeight: "bold",
        letterSpacing: "-0.04em",
        fontSize: `${props.size === "small" ? "7rem" : "10rem"}`,
        color: "#fff",
        display: "flex", // Set the display value to flex
        justifyContent: "center", // Center all children elements on the x axis
        top: "-40%",
      }}
      variants={containerVariants}
      initial={"before"}
      animate={"after"}>
      {string.map((letter, index) => (
        <Frame
          key={index}
          width={"auto"} // Set the width to the width of the letter
          height={26} // Set the height to the height of the text
          background={""}
          style={{ position: "relative" }} // Position elements
          variants={letterVariants}>
          {letter === " " ? "\u00A0" : letter}
        </Frame>
      ))}
    </Frame>
  );
}

const containerVariants = {
  before: {},
  after: { transition: { staggerChildren: 0.06 } },
};

// Variants for animating each letter
const letterVariants = {
  before: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 200,
    },
  },
  after: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 200,
    },
  },
};

export default TextAnimation;
