import { SectionsContainer, Section } from "react-fullpage";
import MainSlider from "../components/MainSlider";
import styled from "styled-components";

const MainPage = () => {
  let options = {
    anchors: ["home", "onAir", "works", "issue", "news"],
    delay: 500,
    navigation: true,
  };

  return (
    <SectionsContainer {...options}>
      <Section>
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            background: 'url("/img/bg.png") no-repeat center center',
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <div
            style={{
              zIndex: "100",
              color: "#fff",
              position: "absolute",
              left: "13%",
              fontSize: "30px",
            }}
          >
            <span
              style={{
                fontWeight: "600",
                display: "block",
                fontSize: "68px",
                fontFamily: "YDestreet",
              }}
            >
              ASIA NO.1 STUDIO
            </span>
            아시아의 콘텐츠와 라이프스타일을
            <br />
            선도합니다.
          </div>
          <MainSlider />
        </div>
      </Section>
      <Section>
        <div>섹션2</div>
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
