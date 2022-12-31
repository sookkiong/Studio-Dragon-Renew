import { Works } from "../components/Contents";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ContentBox = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const work = Works.find((element) => element.id === id);

  const [onChar, setOnChar] = useState(id + "-1");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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

        <VideoNInfo>
          <Video>{work.videoURL}</Video>
          <WorkInfo>
            <Tr>
              <Th>연출</Th>
              <Td>{work.producer}</Td>
            </Tr>
            <Tr>
              <Th>극본</Th>
              <Td>{work.scenario}</Td>
            </Tr>
            <Tr>
              <Th>공동제작</Th>
              <Td>{work.coProduction}</Td>
            </Tr>
            <Tr>
              <Th>출연</Th>
              <Td>{work.actors}</Td>
            </Tr>
            <Tr>
              <Th>채널정보</Th>
              <Td>{work.info}</Td>
            </Tr>
            <Tr>
              <Th>방영기간</Th>
              <Td>{work.period}</Td>
            </Tr>
          </WorkInfo>
        </VideoNInfo>
      </AboutStory>

      <CharacterBox>
        <CBTitle>인물소개</CBTitle>

        <CBInner>
          {work.character.map((value) => {
            return (
              <>
                <Character
                  bg={value.photo}
                  key={value.photo}
                  onMouseOver={() => setOnChar(value.photo)}
                >
                  {onChar === value.photo ? (
                    <CharHover>
                      <div style={{ fontSize: "28px" }}>{value.name}</div>
                      <div>{value.who}</div>
                    </CharHover>
                  ) : undefined}
                </Character>
              </>
            );
          })}
        </CBInner>

        <ExplainBox>
          {work.character.find((element) => element.photo === onChar).about}
        </ExplainBox>
      </CharacterBox>

      <GoList onClick={() => navigate(-1)}>목록으로</GoList>
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
const VideoNInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Video = styled.div`
  width: 50%;
`;
const WorkInfo = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 3px solid #003371;
  border-bottom: 3px solid #003371;
  box-sizing: border-box;
`;
const Tr = styled.tr`
  padding: 15px 0;
`;
const Th = styled.th`
  width: 100px;
  text-align: left;
`;
const Td = styled.td``;
const CharacterBox = styled.div`
  width: 70%;
  margin: 0 auto;
`;
const CBTitle = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
  font-weight: 500;
  border-bottom: 3px solid #003371;
  margin-bottom: 50px;
`;
const CBInner = styled.div`
  display: flex;
`;
const Character = styled.div`
  background: url("/img/char${(props) => props.bg}.jpg") no-repeat center center;
  background-size: cover;
  width: 260px;
  height: 260px;
  margin-right: 50px;
  position: relative;
  cursor: pointer;
`;
const CharHover = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 56, 123, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
const ExplainBox = styled.div`
  margin: 50px 0 100px;
  border: 1px solid #003371;
  display: flex;
  align-items: center;
  height: 140px;
  padding: 0 30px;
`;
const GoList = styled.button`
  display: block;
  padding: 10px 30px;
  margin: 0 auto 100px;
  background: none;
  border: 1px solid #003371;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background: #003371;
    color: #fff;
  }
`;
