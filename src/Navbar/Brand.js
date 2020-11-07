import React from "react";
import styled from "styled-components";

const Brand = () => {
  return (
    <StyledBrand>
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

const StyledBrand = styled.div`
  display: flex;
  justify-content: flex-start;

  h2 {
    display: inline-block;
    margin: auto 0;
  }
`;
