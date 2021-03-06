import React, { useState } from "react";
import sample from "../InfoSection/pexels-skitterphoto.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import TextAnimation from "../../userContent/TextAnimation";

function ParallaxAlternate() {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <Herocontainer id="home">
      <Herobg>
        <Videobg src={sample} alt="hardware" />
      </Herobg>
      <HeroContent>
        <TextAnimation size="small" />
        <HeroP>
          Unum is a number format that is similar to IEEE 754 format (floating
          point numbers) that is publicly proposed by
          <span style={{ color: "#edb10c" }}> John L. Gustafson</span> in 2013.
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
    </Herocontainer>
  );
}

const Herocontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

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
  filter: blur(5px) contrast(60%);
`;

const HeroContent = styled.div`
  z-index: 3;
  margin-top: 200px;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroH1 = styled.div`
  color: #fff;
  font-size: 48px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

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
export default ParallaxAlternate;
