import { SectionsContainer, Section } from "react-fullpage";
import MainSlider from "../components/slider/MainSlider";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import { useRecoilState } from "recoil";
import styled, { keyframes } from "styled-components";
import "../fullpage/SectionsContainer.js";
import OnairSlider from "../components/slider/onairSlider";
import { popularWorks } from "../components/Main";
import { Works } from "../components/Contents";
import { ArticleList } from "../components/Article";
import SideBar from "../components/FullpageNav";

const MainPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [workOn, setWorkOn] = useState(false);
  const [textOn, setTextOn] = useState(false);
  const firstArticle = ArticleList.find((element) => element.id === 1);
  const fiveArticle = ArticleList.slice(0, 5);
  const handleOn = () => {
    setWorkOn(false);
  };
  const goWork = (value) => {
    const finding = Works.find((element) => element.title === value).id;
    return finding;
  };
  let options = {
    anchors: ["home", "onAir", "works", "slogan", "recruit", "news"],
    delay: 800,
    navigation: false,
  };
  const pageHash = () => {
    if (location.hash === "#slogan") {
      setTextOn(true);
    } else {
      setTextOn(false);
    }
  };

  useEffect(() => {
    pageHash();
  }, [location.hash]);

  return (
    <div onMouseOver={handleOn}>
      <SideBar />
      <SectionsContainer {...options}>
        {/* HOME */}
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

        {/* ONAIR 섹션 */}
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

        {/* WORKS 섹션 */}
        <Section>
          <Section3Box>
            <TitleNMore>
              <div style={{ textAlign: "left" }}>
                <SectionTitle>WORKS</SectionTitle>
                <SectionExplain>
                  많은 시청자들에게 사랑받은 역대 최고 인기 작품들입니다.
                </SectionExplain>
              </div>

              <ViewMore onClick={() => navigate("/contents")}>
                VIEW MORE →
              </ViewMore>
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
                      onClick={() =>
                        navigate(`contents/detail?id=${goWork(work.title)}`)
                      }
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

        {/* SLOGAN 섹션 */}
        <Section>
          <Section4Box>
            <SloganTxtRight id={textOn ? "ani" : undefined}>
              EXPAND YOUR MIND
            </SloganTxtRight>
            <SloganTxtLeft id={textOn ? "ani" : undefined}>
              CHANGE YOUR WORLD
            </SloganTxtLeft>
          </Section4Box>
        </Section>

        {/* RECRUIT 섹션 */}
        <Section>
          <Section5Box>
            <Section5Content>
              <RecruitEng>
                As a forerunner of the industry, we are dedicated to building a
                healthy bussiness ecosystem.
              </RecruitEng>
              <RecruitKor>
                업계 리더로서 콘텐츠 산업의 건전한 생태계 조성에 힘쓰고, 관련한
                일자리 창출을 실천합니다.
              </RecruitKor>
              <GoRecruit onClick={() => navigate("/recruit")}>
                채용정보 보러가기 →
              </GoRecruit>
            </Section5Content>
          </Section5Box>
        </Section>

        {/* NEWS 섹션 */}
        <Section>
          <Section6Box>
            <div style={{ textAlign: "center" }}>
              <SectionTitle>NEWS ROOM</SectionTitle>
              <SectionExplain>
                스튜디오 드래곤의 보도자료를 한눈에 보기
              </SectionExplain>
            </div>

            <ContainNewsBox>
              <FirstItem
                bg={firstArticle.id}
                onClick={() =>
                  navigate(`/article/detail?id=${firstArticle.id}`)
                }
              >
                <FirstItemExp id="hover">
                  <div style={{ textAlign: "justify" }}>
                    {firstArticle.title}
                  </div>
                  <div style={{ textAlign: "right", padding: "5px 0 15px" }}>
                    {firstArticle.date}
                  </div>
                  <div style={{ textAlign: "right" }}>자세히 보기 Click</div>
                </FirstItemExp>
              </FirstItem>

              <NewsBox>
                <table
                  style={{
                    borderCollapse: "collapse",
                    width: "100%",
                    display: "block",
                  }}
                >
                  {fiveArticle.map((value) => {
                    return (
                      <NewsTr
                        onClick={() =>
                          navigate(`/article/detail?id=${value.id}`)
                        }
                      >
                        <NewsContentTd id="hover">{value.title}</NewsContentTd>
                        <NewsDateTd>{value.date}</NewsDateTd>
                      </NewsTr>
                    );
                  })}
                </table>
                <GoMoreArticle onClick={() => navigate("/article")}>
                  기사 더 보기 →
                </GoMoreArticle>
              </NewsBox>
            </ContainNewsBox>
          </Section6Box>
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
  overflow: hidden;
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
  margin-top: 15px;
`;
const ContainNewsBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 65%;
  height: 55%;
  margin-top: 60px;
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
  position: relative;
  ::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #000;

    transform-origin: 0% 50%;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
  &:hover {
    ::after {
      transform: scaleX(1);
    }
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
const Section4Box = styled.div`
  height: 100vh;
  display: flex;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
`;
const Ani_righttext = keyframes`
  0%{
    right:-100%;
  }
  100%{
    right: 0;
  }
`;
const SloganTxtRight = styled.div`
  position: absolute;
  font-size: 7vw;
  font-weight: 900;
  right: -100%;
  top: 30%;
  &#ani {
    animation: ${Ani_righttext} 1s ease;
    animation-fill-mode: forwards;
  }
`;
const Ani_lefttext = keyframes`
  0%{
    left:-100%;
  }
  100%{
    left: 0;
  }
`;
const SloganTxtLeft = styled.div`
  position: absolute;
  font-size: 7vw;
  font-weight: 900;
  left: -100%;
  bottom: 30%;
  &#ani {
    animation: ${Ani_lefttext} 0.5s ease;
    animation-fill-mode: forwards;
    animation-delay: 0.3s;
  }
`;
const Section5Box = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;
const Section5Content = styled.div`
  width: 70%;
  height: 65%;
  background: url("/img/issuebg.png") no-repeat;
  background-size: cover;
  box-sizing: border-box;
  color: #fff;
  padding: 0 7%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const RecruitEng = styled.div`
  font-size: 4vw;
  font-weight: 900;
  line-height: 1.1;
`;
const RecruitKor = styled.div`
  margin: 20px 0;
  font-size: 20px;
`;
const GoRecruit = styled.span`
  cursor: pointer;
  display: block;
  width: fit-content;
  margin-left: 81%;
  position: relative;
  ::after {
    position: absolute;
    left: 0;
    bottom: -3px;
    content: "";
    width: 100%;
    height: 1px;
    background-color: #fff;
    transform-origin: 0% 50%;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
  &:hover {
    ::after {
      transform: scaleX(1);
    }
  }
`;
const Section6Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FirstItem = styled.div`
  width: 35%;
  background: url("/img/ap${(props) => props.bg}.jpg") no-repeat 80% center;
  background-size: cover;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    #hover {
      bottom: 0%;
    }
  }
`;
const FirstItemExp = styled.div`
  width: 100%;
  position: absolute;
  bottom: -10%;
  background-color: rgba(0, 46, 115, 0.5);
  color: #fff;
  padding: 5%;
  box-sizing: border-box;
  transition: bottom 0.5s;
`;
const NewsBox = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`;
const NewsTr = styled.tr`
  border-bottom: 1px solid #000;
  cursor: pointer;
  display: flex;
  width: 100%;
  justify-content: space-between;
  &:hover {
    #hover {
      font-weight: 500;
    }
  }
`;
const NewsContentTd = styled.td`
  width: 70%;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  padding: 1.5vw 0;
  box-sizing: border-box;
  margin: 0;
`;
const NewsDateTd = styled.td`
  padding: 1.5vw 0;
  box-sizing: border-box;
  display: block;
  color: #7c7c7c;
  font-weight: 300;
`;
const GoMoreArticle = styled.div`
  width: 100%;
  text-align: right;
  padding-top: 30px;
  cursor: pointer;
  position: relative;
  ::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -3px;
    right: 0;
    width: 100px;
    height: 1px;
    background-color: #000;

    transform-origin: 0% 50%;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
  &:hover {
    font-weight: 500;
    ::after {
      transform: scaleX(1);
    }
  }
`;
