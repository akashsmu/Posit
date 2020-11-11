import React from "react";
import { Parallax } from "react-scroll-parallax";

export default function ParallaxPage(props) {
  return (
    <div style={{ height: "200vh" }}>
      <Parallax
        className="custom-class"
        y={["-11px", "10px"]}
        tagOuter="figure">
        <img src={props.Image} alt={props.alt} width="100%" height="100%" />
      </Parallax>
      <Parallax y={["-200px", "-800px"]}>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur lorem donec massa sapien faucibus et molestie ac. At
            elementum eu facilisis sed odio. At elementum eu facilisis sed odio.
            Egestas tellus rutrum tellus pellentesque eu tincidunt tortor
            aliquam. Nunc sed blandit libero volutpat sed. Diam sollicitudin
            tempor id eu nisl nunc mi ipsum faucibus. Quam elementum pulvinar
            etiam non quam lacus suspendisse faucibus interdum. Varius morbi
            enim nunc faucibus a pellentesque sit. Odio ut sem nulla pharetra
            diam. Sit amet facilisis magna etiam. Ut morbi tincidunt augue
            interdum velit euismod in. Ipsum faucibus vitae aliquet nec.
          </div>
        </div>
      </Parallax>
    </div>
  );
}
