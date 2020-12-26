import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import TextAnimation from "../../userContent/TextAnimation";

export default function ParallaxPage(props) {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <div style={{ height: "100%" }}>
      <Parallax className="custom-class" y={["0px", "0px"]} tagOuter="figure">
        <Videobg src={props.Image} alt={props.alt} />
      </Parallax>
      <Parallax y={[props.topOff, props.bottomOff]}>
        <div style={{ height: "100%", maxWidth: "50%" }}>
          <div
            style={{
              position: "absolute",
              top: "0%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "2rem",
              color: props.Color,
            }}>
            <HeroContent>
              <TextAnimation size="small" />

              <HeroP>
                Unum is a number format that is similar to IEEE 754 format
                (floating point numbers) that is publicly proposed by
                <span style={{ color: "#edb10c" }}> John L. Gustafson</span> in
                2013.
                <br />
                <span style={{ color: "#d2eb34" }}>
                  For More Info On Posit , Head To Resources
                </span>
              </HeroP>
              <HeroBtnWrapper>
                <Button
                  to="/resources"
                  primary="true"
                  dark="true"
                  big="false"
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}>
                  Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
              </HeroBtnWrapper>
            </HeroContent>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

// const Herocontainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0 30px;
//   height: 800px;
//   position: relative;
//   z-index: 1;

//   :before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     background: linear-gradient(
//         180deg,
//         rgba(0, 0, 0, 0.2) 0%,
//         rgba(0, 0, 0, 0.6) 100%
//       ),
//       linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
//     z-index: 2;
//   }
// `;

const Herobg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Videobg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(3px) contrast(70%);
`;

const HeroContent = styled.div`
  z-index: 3;
  min-width: 550px;
  max-width: 1200px;
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const HeroH1 = styled.div`
//   color: #fff;
//   font-size: 48px;
//   text-align: center;
//   @media screen and (max-width: 768px) {
//     font-size: 40px;
//   }
//   @media screen and (max-width: 480px) {
//     font-size: 32px;
//   }
// `;

const HeroP = styled.p`
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
  }
`;

const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
