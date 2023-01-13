import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Contact = () => {
  const [up, setUp] = useState("");
  const upRef = useInView();

  useEffect(() => {
    if (upRef.inView) setUp("up");
  }, [upRef.inView]);

  return (
    <Wrapper ref={upRef.ref}>
      <LeftIMG />

      <RightPart id={up}>
        <Text id="title">
          STUDIO
          <br />
          DRAGON
        </Text>
        <Text>(주)스튜디오 드래곤</Text>
        <Text id="address_k">
          서울특별시 마포구 매봉산로 75, 17층
          <br />
          (상암동, DDMC)
        </Text>
        <Text id="address_E">
          Studio Dragon Corporation, 17F <br />
          75, Mebongsan-ro, Mapo-gu, Seoul
        </Text>
        <Mail>studio.dragon@cj.net</Mail>
      </RightPart>
    </Wrapper>
  );
};
export default Contact;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
`;
const LeftIMG = styled.div`
  width: 35%;
  height: 900px;
  background: url("/img/contact_content.png") no-repeat center center;
  background-size: cover;
`;
const RightPart = styled.div`
  width: 58%;
  background: url("/img/map.png") no-repeat 80% 50%;
  margin-top: 160px;
  opacity: 0;
  transition: all 1.5s;

  &#up {
    margin-top: 60px;
    opacity: 1;
  }
`;
const Text = styled.span`
  display: block;
  font-weight: 500;
  font-size: 20px;
  &#title {
    font-size: 57px;
    line-height: 56px;
    font-family: "YDestreet";
    font-weight: 600;
    margin-bottom: 20px;
  }
  &#address_k {
    margin: 120px 0 30px;
  }
`;
const Mail = styled.span`
  display: block;
  margin-top: 140px;
  font-size: 20px;
  background: url("/img/email.png") no-repeat left center;
  background-size: 30px auto;
  padding-left: 45px;
`;
