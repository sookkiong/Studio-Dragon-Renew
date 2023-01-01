import styled from "styled-components";

const Articles = () => {
  return (
    <>
      <PageTop>
        <BlackBG />
        <TextBox>
          <PageTitle>ARTICLES</PageTitle>
          <PageExplain>
            스튜디오 드래곤의 최신소식과 언론에 보도된 자료를 보실 수 있습니다.
          </PageExplain>
        </TextBox>
      </PageTop>

      <div></div>
    </>
  );
};

export default Articles;

const PageTop = styled.div`
  height: 700px;
  background: url("/img/articlebg.jpg") no-repeat center 30%;
  background-size: cover;
  display: flex;
  padding: 0 12.5%;
  position: relative;
`;
const BlackBG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;
const TextBox = styled.div`
  margin-top: 210px;
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
