import sample from "./video.mp4";
import styled from "styled-components";

function BackgroundVideo() {
  return (
    <Herocontainer>
      <Herobg>
        <Videobg autoPlay loop muted src={sample} type="video/mp4" />
      </Herobg>
    </Herocontainer>
  );
}

const Herocontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  height: 800px;
`;

const Herobg = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -999;
`;

const Videobg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default BackgroundVideo;
