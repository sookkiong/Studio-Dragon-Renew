import styled from "styled-components";
import { category } from "../components/Recruit";

const Recruit = () => {
  return (
    <>
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
          {category.map((value, key) => {
            return (
              <List bg={value.id}>
                <InText>
                  <Name>{value.name}</Name>
                  <Explain>{value.explain}</Explain>
                  <div>
                    <div>+</div>
                    <div>
                      <span>{value.num}</span>건
                    </div>
                  </div>
                </InText>
              </List>
            );
          })}
        </Ul>
      </ListWrap>
    </>
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
  margin: 80px auto 0;
`;
const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
const List = styled.li`
  width: 320px;
  height: 320px;
  background: url("/img/r${(props) => props.bg}.jpg") no-repeat center center;
  background-size: cover;
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
`;
const Explain = styled.div``;
