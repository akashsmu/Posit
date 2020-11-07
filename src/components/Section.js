import React from "react";
import styled from "styled-components";

function Section() {
  return (
    <SomeDiv>
      <section className="introduction">
        <h1 style={{ fontSize: 100 }}>Posits</h1>
        <p>lofnjfkvjdfkvfvbdfv fvfdv d v d vv fv d v dfffffffvvvvdvvffffdvd</p>
      </section>
    </SomeDiv>
  );
}

const SomeDiv = styled.div`
  position: absolute;
  top: 50rem;
`;
export default Section;
