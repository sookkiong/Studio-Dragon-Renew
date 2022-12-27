import styled from "styled-components";
import { useState } from "react";

const Contents = () => {
  const [category, setCategory] = useState("방영작 전체");
  const [on, setOn] = useState(false);
  const onItem = () => {
    const id = on === true ? "arrow" : undefined;
    return id;
  };

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

      <ContentsWrap>
        <ContentsTop>
          <div>스튜디오 드래곤의 웰메이드 작품들을 한눈에 볼 수 있습니다.</div>
          <div style={{ width: "220px" }}>
            <ItemText id={onItem()} onClick={() => setOn(!on)}>
              {category}
            </ItemText>
            {on === true ? (
              <Categorys>
                <Item
                  onClick={() => {
                    setCategory("방영작 전체");
                    setOn(!on);
                  }}
                >
                  방영작 전체
                </Item>
                <Item
                  onClick={() => {
                    setCategory("방영 중");
                    setOn(!on);
                  }}
                >
                  방영 중
                </Item>
                <Item
                  onClick={() => {
                    setCategory("종영 작");
                    setOn(!on);
                  }}
                >
                  종영 작
                </Item>
              </Categorys>
            ) : undefined}
          </div>
        </ContentsTop>
      </ContentsWrap>
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

const ContentsWrap = styled.div`
  margin-top: 80px;
  margin-bottom: 100px;
  padding: 0 15%;
`;
const ContentsTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ItemText = styled.div`
  padding: 10px 120px 10px 15px;
  border: 1px solid #000;
  background: url("/img/m_arrow_off.png") no-repeat 90% center;
  cursor: pointer;
  &#arrow {
    background: url("/img/m_arrow_on.png") no-repeat 90% center;
  }
`;
const Categorys = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid #000;
  border-top: none;
`;
const Item = styled.li`
  padding: 10px 120px 10px 15px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
