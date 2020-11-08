import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <StyledBrand to="\">
      <Image
        src="https://gramiksha.in/images/logo_gramiksha_128x128.png"
        alt="Company Logo"
      />
      <h2>GRAMIKSHA</h2>
    </StyledBrand>
  );
};

export default Brand;

const Image = styled.img`
  height: 70%;
  margin: auto 0;
`;

const StyledBrand = styled(Link)`
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  align-items: center;
  text-decoration: none;

  h2 {
    display: inline-block;
    margin: auto 0;
  }
`;
