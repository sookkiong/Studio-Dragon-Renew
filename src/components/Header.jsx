import styled from "styled-components";

const Header = () => {
  return (
    <Wraaper>
      <HeaderWrap>
        <Menu></Menu>
        <Logo></Logo>
        <Lang>
          <List>KOR</List>
          <List>|</List>
          <List>ENG</List>
        </Lang>
      </HeaderWrap>
    </Wraaper>
  );
};

export default Header;

const Wraaper = styled.div`
  border-bottom: 1px solid #7c7c7c;
  width: 100%;
`;
const HeaderWrap = styled.header`
  width: 75%;
  height: 120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Menu = styled.div`
  width: 35px;
  height: 35px;
  background: url("/img/sub_ham.png") no-repeat center center;
  background-size: contain;
`;
const Logo = styled.div`
  width: 128px;
  height: 53px;
  background: url("/img/logo.png") no-repeat center center;
  background-size: contain;
`;
const Lang = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  width: 100px;
`;
const List = styled.li``;
