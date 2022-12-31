import styled from "styled-components";
import { category } from "../components/Recruit";
import { useState } from "react";
import { recruitList } from "../components/Recruit";
import { redirect } from "react-router";

const Recruit = () => {
  const [onBG, setOnBG] = useState(false);
  const [inRecruit, setInRecruit] = useState("");

  const closeModal = () => {
    setInRecruit("");
  };
  const setName = (string) => {
    if (string === "new") {
      return "신입";
    } else if (string === "career") {
      return "경력";
    } else {
      return "인턴";
    }
  };
  return (
    <div onClick={closeModal}>
      <PageTop>
        <BlackBG />
        <TextBox>
          <span>RECRUIT</span>
          <TitleText>
            스튜디오 드래곤과 함께할
            <br />
            인재를 찾습니다.
          </TitleText>
          <div>
            스튜디오 드래곤과 함께 성장하세요.
            <br />
            미래를 진취적으로 열어나가는 당신과 함께합니다.
          </div>
        </TextBox>
      </PageTop>

      <ListWrap>
        <div style={{ fontWeight: "500", fontSize: "18px" }}>
          진행 중인 채용 공고
        </div>
        <Ul>
          {category.map((value) => {
            return (
              <List
                bg={value.id}
                key={value.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setInRecruit(value.type);
                }}
              >
                <InText>
                  <Name>{setName(value.type)}</Name>
                  <Explain>{value.explain}</Explain>
                  <CountWrap>
                    <Plus>+</Plus>
                    <div>
                      <span id="yellow" style={{ fontSize: "30px" }}>
                        {value.num}
                      </span>
                      건
                    </div>
                  </CountWrap>
                </InText>
              </List>
            );
          })}
        </Ul>

        <div>
          <Notice>
            <NoticeTitle>지원방법</NoticeTitle>
            <div style={{ lineHeight: "30px" }}>
              진행 중인 채용공고 중 원하시는 직무를 확인하시면 입사 지원이
              가능합니다.
              <br />
              상세한 채용 정보는 cj그룹 채용사이트에서 확인하실 수 있습니다.
            </div>
          </Notice>

          <Notice>
            <NoticeTitle>유의사항</NoticeTitle>
            <div style={{ lineHeight: "30px" }}>
              - 이력서 및 자기소개서에 기재된 사항이 허위임이 판명될 경우 합격이
              취소될 수 있습니다.
              <br />
              - 제출된 지원서는 심사를 위해서만 활용되며, 최종 합격발표일로부터
              90일 이내에 회사에서 오프라인으로 제출을 요구한 서류에 한하여 반환
              청구를 할 수 있습니다.
              <br />- 면접은 서류 심사 통과자에 한해 개별통보 드리며, 장애/보훈
              대상자는 관계법령에 의거하여 우대합니다.
            </div>
          </Notice>
        </div>
      </ListWrap>

      {inRecruit !== "" ? (
        <DetailIn>
          <div
            style={{
              position: "relative",
              width: "40%",
            }}
          >
            {recruitList
              .filter((list) => list.type === inRecruit)
              .map((value) => {
                const deadLine = isNaN(value.deadLine)
                  ? value.deadLine
                  : "D-" + value.deadLine;
                const colored = isNaN(value.deadLine) ? undefined : "red";

                return (
                  <WrapUL>
                    <Item
                      id={value.id % 4 === 0 ? "notMargin" : null}
                      key={value.id}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "15px",
                        }}
                      >
                        <div
                          style={{
                            border: "1px solid #000",
                            padding: "3px 20px",
                            fontWeight: "600",
                          }}
                        >
                          {setName(value.type)}
                        </div>
                        <div
                          style={{
                            fontWeight: "600",
                            color: colored === "red" ? "red" : "#003371",
                          }}
                        >
                          {deadLine}
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          borderBottom: "1px solid #000",
                          paddingBottom: "15px",
                          marginBottom: "15px",
                        }}
                      >
                        {value.title}
                      </div>
                      <div style={{ textAlign: "right" }}>{value.start}</div>
                    </Item>
                  </WrapUL>
                );
              })}
            <CloseBTN onClick={() => setInRecruit("")}></CloseBTN>
          </div>
        </DetailIn>
      ) : null}
    </div>
  );
};

export default Recruit;

const PageTop = styled.div`
  height: 600px;
  background: url("/img/recruitbg.jpg") no-repeat center 70%;
  background-size: cover;
  display: flex;
  align-items: center;
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
  color: #fff;
  z-index: 10;
`;
const TitleText = styled.div`
  font-size: 56px;
  font-weight: 500;
  color: #fff;
  line-height: 65px;
  margin: 15px 0 30px;
`;
const ListWrap = styled.div`
  width: 68%;
  margin: 80px auto;
`;
const Ul = styled.ul`
  list-style: none;
  margin: 50px 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;
const List = styled.li`
  width: 320px;
  height: 320px;
  background: url("/img/r${(props) => props.bg}.jpg") no-repeat center center;
  background-size: cover;
  cursor: pointer;
  &:hover {
    #yellow {
      color: yellow;
    }
  }
`;
const InText = styled.div`
  background-color: rgba(0, 56, 123, 0.3);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 0 30px;
  box-sizing: border-box;
  color: #fff;
`;
const Name = styled.div`
  font-size: 26px;
  font-weight: 500;
`;
const Explain = styled.div`
  margin: 10px 0 50px;
  font-weight: 300;
  text-align: justify;
`;
const CountWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const Plus = styled.div`
  font-size: 30px;
  font-weight: 100;
  border: 1px solid #fff;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 28px;
`;
const Notice = styled.div`
  margin-bottom: 30px;
`;
const NoticeTitle = styled.div`
  padding: 3px 13px;
  border-left: 3px solid #003371;
  font-size: 18px;
  margin-bottom: 10px;
`;
const DetailIn = styled.div`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WrapUL = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;
const Item = styled.li`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fff;
  margin-bottom: 20px;
  &#notMargin {
    margin: 0;
  }
  cursor: pointer;
`;
const CloseBTN = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  right: -60px;
  top: 0;
  background: url(/img/close_b.png) no-repeat center center;
  background-size: contain;
  border: none;
  cursor: pointer;
`;
