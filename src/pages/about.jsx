import styled from "styled-components";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  let [titleOn, setTitleOn] = useState("");
  let [drop, setDrop] = useState("");
  let [sloganUp, setSloganUp] = useState("");
  let [goalUp, setGoalUp] = useState("");
  let [lineUp, setLineUp] = useState("");

  const dropRef = useInView();
  const upRef = useInView();
  const goalRef = useInView();
  const lineRef = useInView();

  useEffect(() => {
    setTitleOn("on");
  }, []);

  useEffect(() => {
    if (dropRef.inView) setDrop("drop");
  }, [dropRef.inView]);

  useEffect(() => {
    if (upRef.inView) setSloganUp("up");
  }, [upRef.inView]);

  useEffect(() => {
    if (goalRef.inView) setGoalUp("goal");
  }, [goalRef.inView]);
  useEffect(() => {
    if (lineRef.inView) setLineUp("line");
  }, [lineRef.inView]);

  return (
    <div>
      <Section1>
        <TitleWrap id={titleOn}>
          <Title>ABOUT</Title>
          <Explain>
            케이블, 지상파, 모바일 드라마와 글로벌 방영 드라마의 기획
            <br />
            제작과 배급을 담당하는 드라마 기획 및 제작 스튜디오 입니다.
          </Explain>
        </TitleWrap>

        <ImgBox />
      </Section1>

      <Section2>
        <DropText id={drop}>BUSINESS</DropText>

        <Boxes>
          <Box>
            <BImgBox bg="1"></BImgBox>
            <SmallTitle>TRY SOMETHING NEW</SmallTitle>
            <BSTitle ref={dropRef.ref}>
              우리는 늘 새로운 시도로 시청자들에게 보는 즐거움을 제공합니다.
            </BSTitle>
            <BSPara>
              새롭고 차별화된 소재로 기획하여 제작한 웰메이드 드라마를 다양한
              채널에 공급하여 국내 드라마 시장 저변 확대에 기여하고 있습니다.
              <br />
              <br />
              스튜디오 자체 제작과 더불어 신인 창작자의 성장을 지원하고,
              실력있는 기성 제작자들과의 네트워크를 강화하여 더욱 영향력 있는
              조직으로 나아가고 있습니다.
            </BSPara>
          </Box>

          <Box id="right">
            <BImgBox bg="2"></BImgBox>
            <SmallTitle>GLOBAL PROJECT</SmallTitle>
            <BSTitle>
              당사의 우수한 드라마를 해외에 수출하고, 한류를 선도하고 있습니다.
            </BSTitle>
            <BSPara>
              빠르게 성장 중인 중국, 동남아시아 사업자들과 활발한 교류를 하는
              중이며, 로컬 사업자들과 합작 프로젝트, 제작 컨설팅 등을 통해
              현지에서도 고퀄리티 드라마를 선보이고 있습니다.
              <br />
              <br />
              이외에도 스튜디오 드래곤은 여러 새로운 시장을 개척하며 글로벌
              사업을 적극 확대할 계획입니다.
            </BSPara>
          </Box>
        </Boxes>
      </Section2>

      <Section3>
        <Sect3Inner>
          <Sect3Slogan id={sloganUp}>
            DRAMA PARAGON
            <br />
            여의주를 품은 아시아의 龍
          </Sect3Slogan>
          <Sect3ImgBox ref={upRef.ref}>
            <img
              src="/img/slogan.png"
              alt="슬로건 이미지"
              width="100%"
              height="100%"
            />
          </Sect3ImgBox>
        </Sect3Inner>
      </Section3>

      <Section4>
        <VMWrap>
          <VMTitle ref={goalRef.ref}>
            스튜디오 드래곤의
            <br />
            3가지 목표
          </VMTitle>
          <VMul id={goalUp}>
            <VMList bg="1" loc="16px center">
              국내와 아시아에 안주하지 않고 타임워너, 월트디즈니와 어깨를 나란히
              하는 TOP10 미디어 컨텐츠 회사로 도약하겠습니다.
            </VMList>
            <VMList bg="2" loc="8px center">
              초과 성과에 대한 분배, 제작환경의 개선, 신인 크리에이터 육성 등을
              체계적으로 지원하겠습니다.
            </VMList>
            <VMList bg="3" loc="5px center">
              전 세계 시청자에게 다양한 컨텐츠를 제공하고, 차별화된 퀄리티의
              작품을 시도해 컨텐츠 발전에 앞장서겠습니다.
            </VMList>
          </VMul>
        </VMWrap>

        <VMSlogan>
          VISION&
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;MISSION
        </VMSlogan>
      </Section4>

      <Section5 ref={lineRef.ref}>
        <Sect5BG>
          <Sect5Para id={lineUp}>
            내가 보여 주고 싶은 춤 네가 보여줄 수 있을 것 같았어
            <br />난 네가 무대에 서는 걸 꼭 봐야겠어.
            <DramaLine>
              -스튜디오 드래곤 제작 드라마 '나빌레라' 대사 중
            </DramaLine>
          </Sect5Para>
        </Sect5BG>
      </Section5>
    </div>
  );
};

export default About;

//SECTION1
const Section1 = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const TitleWrap = styled.div`
  width: 35%;
  transition: margin-top 0.5s;
  margin-top: 100px;
  opacity: 0;
  transition: all 1.6s;
  &#on {
    margin-top: 0;
    opacity: 1;
  }
`;
const Title = styled.div`
  background-color: #000;
  color: #fff;
  text-align: right;
  padding: 20px 50px;
  font-size: 56px;
  font-weight: 600;
  font-family: "YDestreet";
`;
const Explain = styled.span`
  display: block;
  text-align: right;
  margin-top: 20px;
  font-weight: 500;
`;
const ImgBox = styled.div`
  width: 50%;
  height: 475px;
  background: url("/img/about1.png") no-repeat center center;
  background-size: cover;
`;

//SECTION2
const Section2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 1680px;
  margin-top: 100px;
  position: relative;
`;
const DropText = styled.span`
  font-size: 160px;
  font-weight: 900;
  position: absolute;
  top: 285px;
  left: -10%;
  transform: rotate(90deg);
  transition: all 3s ease-in;

  &#drop {
    top: 820px;
  }
`;
const Boxes = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 10%;
`;
const Box = styled.div`
  width: 45%;
  &#right {
    margin-top: 500px;
  }
`;
const BImgBox = styled.div`
  width: 100%;
  height: 520px;
  background: url("/img/info${(props) => props.bg}.png") no-repeat center center;
  background-size: cover;
`;
const SmallTitle = styled.span`
  color: #ccc;
  padding: 15px 0 10px;
  display: block;
`;
const BSTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
`;
const BSPara = styled.p`
  line-height: 28px;
`;

//SECTION3
const Section3 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Sect3Inner = styled.div`
  width: 70%;
  position: relative;
`;
const Sect3Slogan = styled.div`
  font-size: 75px;
  border-left: 8px solid #003a76;
  text-align: right;
  padding-right: 80px;
  width: 100%;
  font-weight: 600;
  line-height: 78px;
  position: absolute;
  top: 200px;
  opacity: 0;
  transition: all 2s;
  box-sizing: border-box;

  &#up {
    opacity: 1;
    top: 0;
  }
`;
const Sect3ImgBox = styled.div`
  width: 100%;
  margin-top: 180px;
`;

//SECTION4
const Section4 = styled.div`
  margin-top: 260px;
  display: flex;
  position: relative;
  height: 800px;
`;
const VMWrap = styled.div`
  width: 33%;
  margin-right: 100px;
  position: absolute;
  left: 30%;
`;
const VMTitle = styled.span`
  width: 100%;
  display: block;
  border-left: 5px solid #003a76;
  padding-left: 30px;
  font-size: 30px;
  font-weight: 600;
`;
const VMul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: justify;
  margin-top: 260px;
  opacity: 0;
  transition: all 2s;
  transition-delay: 1s;

  &#goal {
    margin-top: 60px;
    opacity: 1;
  }
`;
const VMList = styled.li`
  margin-bottom: 80px;
  background: url("/img/vm${(props) => props.bg}.png") no-repeat;
  background-position: ${(props) => props.loc};
  background-size: contain;
  padding-left: 90px;
`;
const VMSlogan = styled.div`
  transform: rotate(90deg);
  font-size: 140px;
  font-weight: 600;
  line-height: 100px;
  position: absolute;
  top: 150px;
  right: -5%;
`;

//SECTION5
const Section5 = styled.div`
  width: 100%;
`;

const Sect5BG = styled.div`
  width: 65%;
  height: 580px;
  background: url("/img/show.png") no-repeat;
  background-size: cover;
`;
const Sect5Para = styled.p`
  padding: 200px 100px;
  color: #fff;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 1px;
  opacity: 0;
  transition: all 1.6s;
  transition-delay: 1s;

  &#line {
    opacity: 1;
    padding: 100px 100px;
  }
`;
const DramaLine = styled.span`
  display: block;
  font-size: 16px;
  margin-top: 30px;
  font-weight: 400;
`;
