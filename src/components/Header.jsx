import styled from "styled-components";
import { langOnState } from "../store/LangAtom";
import { useRecoilState } from "recoil";

const Header = () => {
  const [lang, setLang] = useRecoilState(langOnState);

  return (
    <Wraaper>
      <HeaderWrap>
        <Menu></Menu>
        <Logo></Logo>
        <Lang>
          <List
            id={lang === "kor" ? "selected" : undefined}
            onClick={() => setLang("kor")}
          >
            KOR
          </List>
          <List id="bar">|</List>
          <List
            id={lang === "eng" ? "selected" : undefined}
            onClick={() => setLang("eng")}
          >
            ENG
          </List>
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
  cursor: pointer;
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
  align-items: center;
  padding: 0;
  margin: 0;
  width: 100px;
`;
const List = styled.li`
  cursor: pointer;
  color: #ccc;
  &:hover {
    text-decoration: underline;
  }
  &#selected {
    color: #000;
    font-weight: 500;
  }
  &#bar {
    cursor: default;
    text-decoration: none;
    font-size: 14px;
  }
`;
