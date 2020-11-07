import React from "react";
import styled from "styled-components";

import { useSpring, animated } from "react-spring";

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
        }}>
        <NavLinks>
          <li>
            <a
              href="https://github.com/gramiksha/website-new/blob/master/src/modules/Navbar/Navbar.js"
              onClick={props.handleNavbar}>
              HOME
            </a>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              PROJECTS
            </a>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              EVENTS
            </a>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              JOIN US
            </a>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              SUPPORT US
            </a>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              RAHAT COVID-19
            </a>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              BLOG
            </a>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;
// background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);
// background-color: rgba(30, 60, 30, 1);
const CollapseWrapper = styled(animated.div)`
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(0, 0, 0, 0.15) 100%
    ),
    radial-gradient(
        at top left,
        rgba(255, 55, 5, 1) 0%,
        rgba(0, 88, 206, 1) 120%
      )
      #989898;
  background-blend-mode: multiply, multiply;

  height: 100%;
  width: 100%;
  overflow: auto;
  position: absolute;
  z-index: 999;
  top: 4.5rem;
  left: 0;
  right: 0;
  bottom: 0;

  @media (min-width: 873px) {
    display: none;
  }
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 4rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    line-height: 4;
    color: #000;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease-out;

    &:hover {
      color: #4facfe;
      font-size: 2.4rem;
    }
  }
`;
