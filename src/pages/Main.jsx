import { SectionsContainer, Section } from "react-fullpage";
import MainSlider from "../components/slider/MainSlider";
import styled, { keyframes } from "styled-components";
import "../fullpage/SectionsContainer.js";
import OnairSlider from "../components/slider/onairSlider";
import { popularWorks } from "../components/Main";
import { useState } from "react";

const MainPage = () => {
  const [workOn, setWorkOn] = useState(false);
  const handleOn = () => {
    setWorkOn(false);
  };

  let options = {
    anchors: ["home", "onAir", "works", "issue", "news"],
    delay: 500,
    navigation: true,
  };

  return (
    <div onMouseOver={handleOn}>
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
              <SectionTitle>ONAIR</SectionTitle>
              <SectionExplain>
                스튜디오 드래곤이 제작한 드라마가 현재 방영 중입니다.
              </SectionExplain>
            </div>

            <OnairSlider />
          </Section2Box>
        </Section>

        <Section>
          <Section3Box>
            <TitleNMore>
              <div style={{ textAlign: "left" }}>
                <SectionTitle>WORKS</SectionTitle>
                <SectionExplain>
                  많은 시청자들에게 사랑받은 역대 최고 인기 작품들입니다.
                </SectionExplain>
              </div>

              <ViewMore>VIEW MORE →</ViewMore>
            </TitleNMore>

            <div style={{ width: "85%", height: "60%" }}>
              <PopularUL>
                {popularWorks.map((work) => {
                  return (
                    <PopularList
                      key={work.id}
                      bg={work.id}
                      onMouseOver={(e) => {
                        e.stopPropagation();
                        setWorkOn(work.id);
                      }}
                    >
                      {workOn === work.id ? (
                        <PLInner bg={work.bg}>
                          <PLtitle>{work.title}</PLtitle>
                          <PLcontent>{work.result}</PLcontent>
                        </PLInner>
                      ) : undefined}
                    </PopularList>
                  );
                })}
              </PopularUL>
            </div>
          </Section3Box>
        </Section>

        <Section>
          <div>섹션4</div>
        </Section>

        <Section>
          <div>섹션5</div>
        </Section>
      </SectionsContainer>
    </div>
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
  box-sizing: border-box;
`;
const SectionTitle = styled.span`
  font-size: 60px;
  font-weight: 600;
  font-family: YDestreet;
  display: block;
`;
const SectionExplain = styled.span`
  font-size: 20px;
  background-color: #000;
  color: #fff;
  padding: 0 10px;
  margin-top: 10px;
`;
const Section3Box = styled.div`
  width: 74%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: 0 auto;
`;
const TitleNMore = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 60px;
`;
const ViewMore = styled.div`
  margin-bottom: 5px;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    color: #7c7c7c;
  }
`;
const PopularUL = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 22.75% 22.75% 22.75% 22.75%;
  grid-template-rows: 46% 46%;
  row-gap: 8%;
  justify-content: space-between;
`;
const PopularList = styled.li`
  background: url("/img/work${(props) => props.bg}.png") no-repeat center center;
  background-size: cover;
  cursor: pointer;
`;
const PLInner = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.bg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
  box-sizing: border-box;
  text-align: center;
  color: #fff;
  font-weight: 300;
  font-size: 18px;
`;
const PLtitle = styled.div`
  font-size: 26px;
  font-weight: 500;
  padding-bottom: 8px;
`;
const PLcontent = styled.div`
  border-top: 1px solid #fff;
  padding-top: 8px;
`;
