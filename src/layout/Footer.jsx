import styled from "styled-components";
import { useState } from "react";

const Footer = () => {
  let [onList, setOnList] = useState("1");

  const HoverID = (value) => {
    const id = value === onList ? "isHover" : undefined;
    return id;
  };
  return (
    <>
      <FOOTER>
        <FooterInner>
          <FootTop>
            <FootTextbox>
              <TextSpan>스튜디오 드래곤</TextSpan>
              <TextSpan id="corp">STUDIO DRAGON CORP.</TextSpan>
              <TextSpan>
                SINCE 2016.05.03
                <br />
                SOUTH KOREA
              </TextSpan>
              <br />
              <TextSpan>
                (주)스튜디오드래곤 서울특별시 마포구 매봉산로 75, 17층 스튜디오
                드래곤 주식회사
                <br />
                사업자등록번호: 747-81-00388 대표자: 김영규, 김제현
              </TextSpan>
            </FootTextbox>

            <GTnSNSWrap>
              <GoTop>↑</GoTop>
              <Fsns>
                <SNS
                  bg="1"
                  onClick={() => {
                    window.open(
                      "https://m.facebook.com/profile.php?id=181235255716322"
                    );
                  }}
                ></SNS>
                <SNS
                  bg="2"
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/studiodragon.official/"
                    );
                  }}
                ></SNS>
                <SNS
                  bg="3"
                  onClick={() => {
                    window.open(
                      "https://twitter.com/hashtag/%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4%EB%93%9C%EB%9E%98%EA%B3%A4"
                    );
                  }}
                ></SNS>
              </Fsns>
            </GTnSNSWrap>
          </FootTop>

          <LinknCopyWrap>
            <FLink>
              <Link id={HoverID("1")} onMouseOver={() => setOnList("1")}>
                법적고지
              </Link>
              <Link id={HoverID("2")} onMouseOver={() => setOnList("2")}>
                이메일무단수집거부
              </Link>
              <Link id={HoverID("3")} onMouseOver={() => setOnList("3")}>
                사이버감사실
              </Link>
              <Link id={HoverID("4")} onMouseOver={() => setOnList("4")}>
                CONTACT US
              </Link>
            </FLink>
            <Copy>ⓒ2022 STUDIO DRAGON Corp. All Rights Reserved.</Copy>
          </LinknCopyWrap>
        </FooterInner>
      </FOOTER>
    </>
  );
};

export default Footer;

const FOOTER = styled.footer`
  width: 100%;
  background: #000;
  padding: 50px 0;
`;
const FooterInner = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const FootTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fff;
`;
const FootTextbox = styled.div`
  margin: 0;
  color: #fff;
  padding-bottom: 15px;
`;
const TextSpan = styled.span`
  display: block;
  margin-bottom: 15px;
  font-size: 16px;
  &#corp {
    display: block;
    font-weight: 500;
    font-size: 24px;
  }
`;
const GTnSNSWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const GoTop = styled.button`
  display: block;
  padding: 12px 24px;
  background: #fff;
  border: 1px solid #000;
  color: #000;
  font-size: 32px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background: #000;
    border: 1px solid #fff;
    color: #fff;
  }
`;

const Fsns = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  margin-top: 45px;
`;
const SNS = styled.li`
  width: 32px;
  height: 32px;
  margin-left: 60px;
  background: url("/img/sns${(props) => props.bg}.png") no-repeat center center;
  background-size: contain;
  cursor: pointer;
`;
const LinknCopyWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;
const FLink = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;
const Link = styled.li`
  cursor: pointer;
  margin-right: 30px;
  color: #7c7c7c;
  &#isHover {
    color: #fff;
  }
`;
const Copy = styled.span`
  color: #fff;
`;
