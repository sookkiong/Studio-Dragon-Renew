import { useState } from "react";
import styled from "styled-components";

const About = () => {
  let [onList, setOnList] = useState("1");

  const HoverID = (value) => {
    const id = value === onList ? "isHover" : undefined;
    return id;
  };

  return (
    <>
      <Section1>
        <TitleWrap>
          <Title>ABOUT</Title>
          <Explain>
            케이블, 지상파, 모바일 드라마와 글로벌 방영 드라마의 기획
            <br />
            제작과 배급을 담당하는 드라마 기획 및 제작 스튜디오 입니다.
          </Explain>
        </TitleWrap>

        <ImgBox></ImgBox>
      </Section1>

      <Section2>
        <DropText>BUSINESS</DropText>

        <Boxes>
          <Box>
            <BImgBox bg="1"></BImgBox>
            <SmallTitle>TRY SOMETHING NEW</SmallTitle>
            <BSTitle>
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
          <Sect3Slogan>
            DRAMA PARAGON
            <br />
            여의주를 품은 아시아의 龍
          </Sect3Slogan>
          <Sect3ImgBox>
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
          <VMTitle>
            스튜디오 드래곤의
            <br />
            3가지 목표
          </VMTitle>
          <VMul>
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

      <Section5>
        <Sect5BG>
          <Sect5Para>
            내가 보여 주고 싶은 춤 네가 보여줄 수 있을 것 같았어
            <br />난 네가 무대에 서는 걸 꼭 봐야겠어.
            <DramaLine>
              -스튜디오 드래곤 제작 드라마 '나빌레라' 대사 중
            </DramaLine>
          </Sect5Para>
        </Sect5BG>
      </Section5>

      <Footer>
        <FooterInner>
          <FootTop>
            <FootTextbox>
              <TextSpan>스튜디오 드래곤</TextSpan>
              <TextSpan id="corp">STUDIO DRAGON CORP.</TextSpan>
              <TextSpan>
                SINCE 2016.05.03
                <br />
                SOUTH KOREA
              </TextSpan>
              <br />
              <TextSpan>
                (주)스튜디오드래곤 서울특별시 마포구 매봉산로 75, 17층 스튜디오
                드래곤 주식회사
                <br />
                사업자등록번호: 747-81-00388 대표자: 김영규, 김제현
              </TextSpan>
            </FootTextbox>

            <GTnSNSWrap>
              <GoTop>↑</GoTop>
              <Fsns>
                <SNS
                  bg="1"
                  onClick={() => {
                    window.open(
                      "https://m.facebook.com/profile.php?id=181235255716322"
                    );
                  }}
                ></SNS>
                <SNS
                  bg="2"
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/studiodragon.official/"
                    );
                  }}
                ></SNS>
                <SNS
                  bg="3"
                  onClick={() => {
                    window.open(
                      "https://twitter.com/hashtag/%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4%EB%93%9C%EB%9E%98%EA%B3%A4"
                    );
                  }}
                ></SNS>
              </Fsns>
            </GTnSNSWrap>
          </FootTop>

          <LinknCopyWrap>
            <FLink>
              <Link id={HoverID("1")} onMouseOver={() => setOnList("1")}>
                법적고지
              </Link>
              <Link id={HoverID("2")} onMouseOver={() => setOnList("2")}>
                이메일무단수집거부
              </Link>
              <Link id={HoverID("3")} onMouseOver={() => setOnList("3")}>
                사이버감사실
              </Link>
              <Link id={HoverID("4")} onMouseOver={() => setOnList("4")}>
                CONTACT US
              </Link>
            </FLink>
            <Copy>ⓒ2022 STUDIO DRAGON Corp. All Rights Reserved.</Copy>
          </LinknCopyWrap>
        </FooterInner>
      </Footer>
    </>
  );
};

export default About;

//SECTION1
const Section1 = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TitleWrap = styled.div`
  width: 32%;
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
`;
const Sect3Slogan = styled.div`
  font-size: 75px;
  border-left: 8px solid #003a76;
  text-align: right;
  padding-right: 5%;
  font-weight: 600;
  line-height: 78px;
`;
const Sect3ImgBox = styled.div`
  width: 100%;
  margin-top: 30px;
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
  margin-top: 60px;
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
  padding: 100px;
  color: #fff;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 1px;
`;
const DramaLine = styled.span`
  display: block;
  font-size: 16px;
  margin-top: 30px;
  font-weight: 400;
`;

//footer
const Footer = styled.footer`
  width: 100%;
  background: #000;
  padding: 50px 0;
`;
const FooterInner = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const FootTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fff;
`;
const FootTextbox = styled.div`
  margin: 0;
  color: #fff;
  padding-bottom: 15px;
`;
const TextSpan = styled.span`
  display: block;
  margin-bottom: 15px;
  font-size: 16px;
  &#corp {
    display: block;
    font-weight: 500;
    font-size: 24px;
  }
`;
const GTnSNSWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const GoTop = styled.button`
  display: block;
  padding: 12px 24px;
  background: #fff;
  border: 1px solid #000;
  color: #000;
  font-size: 32px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background: #000;
    border: 1px solid #fff;
    color: #fff;
  }
`;

const Fsns = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  margin-top: 45px;
`;
const SNS = styled.li`
  width: 32px;
  height: 32px;
  margin-left: 60px;
  background: url("/img/sns${(props) => props.bg}.png") no-repeat center center;
  background-size: contain;
  cursor: pointer;
`;
const LinknCopyWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;
const FLink = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;
const Link = styled.li`
  cursor: pointer;
  margin-right: 30px;
  color: #7c7c7c;
  &#isHover {
    color: #fff;
  }
`;
const Copy = styled.span`
  color: #fff;
`;
