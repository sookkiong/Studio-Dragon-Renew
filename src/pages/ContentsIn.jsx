import { Works } from "../components/Contents";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

const ContentBox = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const work = Works.find((element) => element.id === id);

  return (
    <>
      <PageTop>
        <div>
          <div>CONTENTS &gt; 작품 상세 정보</div>
          <Title>{work.title}</Title>
        </div>

        <IsAir>{work.onAir}</IsAir>
      </PageTop>

      <Thumbnail bg={id}>
        <BlackBG />
      </Thumbnail>

      <AboutStory>
        <Summary>{work.summary}</Summary>
        <div>
          <div>{work.videoURL}</div>
        </div>
      </AboutStory>
    </>
  );
};

export default ContentBox;

const PageTop = styled.div`
  width: 70%;
  margin: 80px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin-top: 10px;
`;
const IsAir = styled.div`
  background-color: #003371;
  color: #fff;
  padding: 10px 25px;
`;
const Thumbnail = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 40px;
  background: url("/img/cn${(props) => props.bg}.jpg") no-repeat center 35%;
  background-size: cover;
  position: relative;
`;
const BlackBG = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
`;
const AboutStory = styled.div`
  width: 70%;
  margin: 80px auto;
`;
const Summary = styled.div`
  border-left: 3px solid #003371;
  padding: 10px 0 10px 20px;
  font-weight: 500;
  margin-bottom: 60px;
`;
