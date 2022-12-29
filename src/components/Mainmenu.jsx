import styled from "styled-components";

const HamMenu = () => {
  return (
    <Wrapper>
      <Inner>
        <CloseBtn></CloseBtn>

        <div>
          <ul>
            <li>COMPANY</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
          <ul>
            <li>WORKS</li>
            <li>CONTENTS</li>
          </ul>
          <ul>
            <li>RECRUIT</li>
            <li>WITH US</li>
          </ul>
          <ul>
            <li>NEWS</li>
            <li>ARTICLES</li>
          </ul>
        </div>

        <div>
          <span>ⓒ 2022 studio dragon corp. All Rights Reserved.</span>
          <ul>
            <li
              bg="1"
              onClick={() => {
                window.open(
                  "https://m.facebook.com/profile.php?id=181235255716322"
                );
              }}
            ></li>
            <li
              bg="2"
              onClick={() => {
                window.open("https://www.instagram.com/studiodragon.official/");
              }}
            ></li>
            <li
              bg="3"
              onClick={() => {
                window.open(
                  "https://twitter.com/hashtag/%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4%EB%93%9C%EB%9E%98%EA%B3%A4"
                );
              }}
            ></li>
          </ul>
        </div>
      </Inner>
    </Wrapper>
  );
};
export default HamMenu;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: green;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Inner = styled.div`
  border: 1px solid red;
  width: 80%;
`;
const CloseBtn = styled.button`
  width: 40px;
  height: 40px;
`;
