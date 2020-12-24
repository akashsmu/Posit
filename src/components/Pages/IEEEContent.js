import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import TextAnimation from "../../userContent/TextAnimation";

function IEEEContent() {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <Herocontainer id="home">
      <Herobg>
        <Videobg />
      </Herobg>
      <HeroContent>
        {/* <TextAnimation size="small" /> */}
        <HeroH1> IEEE 754</HeroH1>
        <HeroP>
          IEEE 754-1985 was an industry standard for representing floating-point
          numbers in computers, officially adopted in 1985 and superseded in
          2008 by IEEE 754-2008, and then again in 2019 by minor revision IEEE
          754-2019.During its 23 years, it was the most widely used format for
          floating-point computation. It was implemented in software, in the
          form of floating-point libraries, and in hardware, in the instructions
          of many CPUs and FPUs. The first integrated circuit to implement the
          draft of what was to become IEEE 754-1985 was the Intel 8087. IEEE
          754-1985 represents numbers in binary, providing definitions for four
          levels of precision.
          <br />
          The standard also defines representations for positive and negative
          infinity, a "negative zero", five exceptions to handle invalid results
          like division by zero, special values called NaNs for representing
          those exceptions, denormal numbers to represent numbers smaller than
          shown above, and four rounding modes.
          <br />
          This article explains the concept lucidly and Recommend to take a look
          at this:
          <a href="src\components\InfoSection\ieeePaper.pdf" download>
            Click Here
          </a>
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="/"
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
  padding: 0 20px;
  height: 1000px;
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

const Videobg = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(3px) contrast(70%);
  background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
`;

const HeroContent = styled.div`
  z-index: 3;
  margin-top: 0px;
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
  margin-top: 20px;
  color: #000;
  font-size: 20px;
  text-align: justify;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 13px;
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

export default IEEEContent;
