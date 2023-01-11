import styled from "styled-components";
import { useState } from "react";
import { useLocation } from "react-router";

const SideBar = () => {
  let location = useLocation();
  const page = [
    { id: "home", name: "HOME" },
    { id: "onAir", name: "ON AIR" },
    { id: "works", name: "WORKS" },
    { id: "slogan", name: "SLOGAN" },
    { id: "recruit", name: "RECRUIT" },
    { id: "news", name: "NEWS" },
  ];

  const [scroll, setScroll] = useState("home");

  window.addEventListener("wheel", (e) => {
    setScroll(window.location.href.split("#")[1]);
  });
  console.log(window.location.href.split("#")[1]);

  return (
    <SideDiv style={{ zIndex: "1" }}>
      <form
        onChange={(e) => {
          setScroll(e.target.value);
          window.location.href = "#" + e.target.value;
        }}
      >
        {page.map((v) => {
          return (
            <label key={v.name}>
              <CustomLink
                name="page"
                value={v.id}
                checked={v.id === scroll}
                readOnly
              />
              <FormCheckText>{v.name}</FormCheckText>
            </label>
          );
        })}
      </form>
    </SideDiv>
  );
};

export default SideBar;

const SideDiv = styled.div`
  width: 7%;
  position: fixed;
  right: 2%;
  top: 45%;
  div {
    display: flex;
    flex-direction: column;
  }
`;

const FormCheckText = styled.span`
  display: flex;
  padding: 5px 0px;
  color: #e2e2e2;
  cursor: pointer;
`;

const CustomLink = styled.input.attrs({ type: "radio" })`
  display: none;
  &:checked + ${FormCheckText} {
    color: #009944;
  }
  &:hover + ${FormCheckText} {
    color: #009944;
  }
`;
