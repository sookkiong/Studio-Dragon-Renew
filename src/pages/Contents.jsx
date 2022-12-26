import styled from "styled-components";

const Contents = () => {
  return (
    <>
      <PageTop>
        <TopTextbox>
          <PageTitle>CONTENTS</PageTitle>
          <PageExplain>
            스튜디오 드래곤은 웰메이드 드라마 제작을 통한 국내 드라마 콘텐츠의
            질적 향상을 추구합니다.
          </PageExplain>
        </TopTextbox>
      </PageTop>

      <div>스튜디오 드래곤의 웰메이드 작품들을 한눈에 볼 수 있습니다.</div>
    </>
  );
};

export default Contents;

const PageTop = styled.div`
  width: 100%;
  height: 560px;
  background: url("/img/contentstitle.png") no-repeat center 65%;
  background-size: cover;
`;
const TopTextbox = styled.div`
  padding: 200px;
`;
const PageTitle = styled.span`
  display: block;
  font-size: 52px;
  color: #fff;
  font-weight: 600;
  font-family: "YDestreet";
`;
const PageExplain = styled.span`
  color: #fff;
  display: block;
  margin-top: 10px;
`;
