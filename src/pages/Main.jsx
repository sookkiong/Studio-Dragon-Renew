import { SectionsContainer, Section } from "react-fullpage";
import MainSlider from "../components/slider/MainSlider";
import styled, { keyframes } from "styled-components";
import "../fullpage/SectionsContainer.js";
import OnairSlider from "../components/slider/onairSlider";

const MainPage = () => {
  const location = window.scrollY;
  console.log(location);

  let options = {
    anchors: ["home", "onAir", "works", "issue", "news"],
    delay: 500,
    navigation: true,
  };

  return (
    <SectionsContainer {...options}>
      <Section>
        <Section1Box>
          <MainText>
            <MainTextTitle>ASIA NO.1 STUDIO</MainTextTitle>
            아시아의 콘텐츠와 라이프스타일을
            <br />
            선도합니다.
          </MainText>

          <MainSlider />

          <ScrollMouse>
            <img src="/img/mouse.png" width="100%" alt="mouse" />
          </ScrollMouse>
        </Section1Box>
      </Section>

      <Section>
        <Section2Box>
          <div style={{ textAlign: "center" }}>
            <span
              style={{
                fontSize: "60px",
                fontWeight: "600",
                fontFamily: "YDestreet",
              }}
            >
              ONAIR
            </span>
            <span
              style={{
                fontSize: "20px",
                display: "block",
                backgroundColor: "#000",
                color: "#fff",
                padding: "0 10px",
                marginTop: "10px",
              }}
            >
              스튜디오 드래곤이 제작한 드라마가 현재 방영 중입니다.
            </span>
          </div>

          <OnairSlider />
        </Section2Box>
      </Section>

      <Section>
        <div>섹션3</div>
      </Section>

      <Section>
        <div>섹션4</div>
      </Section>

      <Section>
        <div>섹션5</div>
      </Section>
    </SectionsContainer>
  );
};

export default MainPage;

const MainText = styled.div`
  z-index: 100;
  color: #fff;
  position: absolute;
  left: 13%;
  font-size: 30px;
`;
const MainTextTitle = styled.span`
  font-weight: 600;
  display: block;
  font-size: 68px;
  font-family: YDestreet;
`;
const Section1Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: url("/img/bg.png") no-repeat center center;
  background-size: cover;
  position: relative;
`;
const animation = keyframes`
    0%{
        bottom: 6%;
    }
    
    100%{
        bottom: 8%;
    }
`;
const ScrollMouse = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 7%;
  left: calc(50% - 20px);
  animation: ${animation} 0.5s linear infinite;
  animation-direction: alternate;
`;
const Section2Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
