import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { menuOnState } from "../store/MenuAtom";
import { useRecoilState } from "recoil";

const HamMenu = () => {
  let navigate = useNavigate();
  const [menuOn, setMenuOn] = useRecoilState(menuOnState);

  return (
    <Wrapper>
      <Inner>
        <CloseBtn onClick={() => setMenuOn(false)}></CloseBtn>

        <MenuWrap>
          <Category>
            <PageTitle>COMPANY</PageTitle>
            <MenuList>
              <Menu
                onClick={() => {
                  navigate("/about");
                  setMenuOn(false);
                }}
              >
                ABOUT
              </Menu>
              <Menu
                onClick={() => {
                  navigate("/contact");
                  setMenuOn(false);
                }}
              >
                CONTACT
              </Menu>
            </MenuList>
          </Category>
          <Category>
            <PageTitle>WORKS</PageTitle>
            <MenuList>
              <Menu
                onClick={() => {
                  navigate("/contents");
                  setMenuOn(false);
                }}
              >
                CONTENTS
              </Menu>
            </MenuList>
          </Category>
          <Category>
            <PageTitle>RECRUIT</PageTitle>
            <MenuList>
              <Menu>WITH US</Menu>
            </MenuList>
          </Category>
          <Category>
            <PageTitle>NEWS</PageTitle>
            <MenuList>
              <Menu>ARTICLES</Menu>
            </MenuList>
          </Category>
        </MenuWrap>

        <MenuBottom>
          <Copyright>ⓒ 2022 studio dragon corp. All Rights Reserved.</Copyright>
          <SnsWrap>
            <Sns
              bg="1"
              onClick={() => {
                window.open(
                  "https://m.facebook.com/profile.php?id=181235255716322"
                );
              }}
            ></Sns>
            <Sns
              bg="2"
              onClick={() => {
                window.open("https://www.instagram.com/studiodragon.official/");
              }}
            ></Sns>
            <Sns
              bg="3"
              onClick={() => {
                window.open(
                  "https://twitter.com/hashtag/%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4%EB%93%9C%EB%9E%98%EA%B3%A4"
                );
              }}
            ></Sns>
          </SnsWrap>
        </MenuBottom>
      </Inner>
    </Wrapper>
  );
};
export default HamMenu;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: url("/img/menubg.png") no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Inner = styled.div`
  width: 80%;
`;
const CloseBtn = styled.button`
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  background: url("/img/close.png") no-repeat center center;
  background-size: contain;
  cursor: pointer;
`;
const MenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 160px auto 180px;
  width: 87%;
`;
const Category = styled.div`
  width: 25%;
`;
const PageTitle = styled.div`
  cursor: default;
  font-size: 28px;
  font-weight: 600;
  font-family: "YDestreet";
  color: #fff;
  text-align: center;
`;
const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
  width: 100%;
  margin-top: 20px;
`;
const Menu = styled.li`
  cursor: pointer;
  width: 100%;
  padding: 5px 0;
  color: #ccc;
  margin-bottom: 20px;
  &:hover {
    background: #fff;
    color: #000;
  }
  &:hover {
    #pageTitle {
      background: #000;
      color: #fff;
    }
  }
`;
const MenuBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 87%;
  margin: 0 auto;
`;
const Copyright = styled.span`
  color: #fff;
`;
const SnsWrap = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;
const Sns = styled.li`
  width: 30px;
  height: 30px;
  background: url("/img/sns${(props) => props.bg}.png") no-repeat center center;
  background-size: contain;
  margin-left: 30px;
  cursor: pointer;
`;
