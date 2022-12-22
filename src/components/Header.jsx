import styled from "styled-components";

const Header = () => {
  return (
    <>
      <header>
        <Menu></Menu>
        <Logo></Logo>
        <Lang>
          <List>KOR</List>
          <List>|</List>
          <List>ENG</List>
        </Lang>
      </header>
    </>
  );
};

export default Header;

const Menu = styled.div``;
const Logo = styled.div``;
const Lang = styled.ul``;
const List = styled.li``;
