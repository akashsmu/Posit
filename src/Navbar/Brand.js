import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <StyledBrand>
      <h1>POSITS</h1>
    </StyledBrand>
  );
};

export default Brand;

const StyledBrand = styled.div`
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  color: #fff;
`;
