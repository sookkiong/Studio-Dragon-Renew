import styled from "styled-components";

const About = () => {
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
        <div>BUSINESS</div>

        <Boxes>
          <Box>
            <BImgBox bg="1"></BImgBox>
            <span>TRY SOMETHING NEW</span>
            <div>
              우리는 늘 새로운 시도로 시청자들에게 보는 즐거움을 제공합니다.
            </div>
            <p>
              새롭고 차별화된 소재로 기획하여 제작한 웰메이드 드라마를 다양한
              채널에 공급하여 국내 드라마 시장 저변 확대에 기여하고 있습니다.
              <br />
              <br />
              스튜디오 자체 제작과 더불어 신인 창작자의 성장을 지원하고,
              실력있는 기성 제작자들과의 네트워크를 강화하여 더욱 영향력 있는
              조직으로 나아가고 있습니다.
            </p>
          </Box>

          <Box>
            <BImgBox bg="2"></BImgBox>
            <span>GLOBAL PROJECT</span>
            <div>
              당사의 우수한 드라마를 해외에 수출하고, 한류를 선도하고 있습니다.
            </div>
            <p>
              빠르게 성장 중인 중국, 동남아시아 사업자들과 활발한 교류를 하는
              중이며, 로컬 사업자들과 합작 프로젝트, 제작 컨설팅 등을 통해
              현지에서도 고퀄리티 드라마를 선보이고 있습니다.
              <br />
              <br />
              이외에도 스튜디오 드래곤은 여러 새로운 시장을 개척하며 글로벌
              사업을 적극 확대할 계획입니다.
            </p>
          </Box>
        </Boxes>
      </Section2>
    </>
  );
};

export default About;

//SECTTION1
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

//SECTTION2
const Section2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 120px 100px 0;
`;
const Boxes = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
`;
const Box = styled.div`
  width: 400px;
`;

const BImgBox = styled.div`
  width: 100%;
  height: 520px;
  background: url("/img/info${(props) => props.bg}.png") no-repeat center center;
`;
