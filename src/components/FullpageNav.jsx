import styled from "styled-components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const SideBar = () => {
  let location = useLocation();
  const page = [
    { id: "#home", name: "HOME" },
    { id: "#onAir", name: "ON AIR" },
    { id: "#works", name: "WORKS" },
    { id: "#slogan", name: "SLOGAN" },
    { id: "#recruit", name: "RECRUIT" },
    { id: "#news", name: "NEWS" },
  ];

  const [scroll, setScroll] = useState(location.hash);

  useEffect(() => {
    setScroll(location.hash);
  }, [location.hash]);

  const setColorId = () => {
    if (scroll !== "home") {
      return "colored";
    }
  };
  return (
    <SideDiv style={{ zIndex: "1" }}>
      <form
        onChange={(e) => {
          setScroll(e.target.value);
          window.location.href = e.target.value;
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
              <FormCheckText id={setColorId()}>{v.name}</FormCheckText>
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
  right: 0%;
  top: 45%;
  div {
    display: flex;
    flex-direction: column;
  }
`;

const FormCheckText = styled.span`
  display: flex;
  padding: 8px 0px;
  color: #7c7c7c;
  cursor: pointer;
  font-size: 13px;
  letter-spacing: 1.4px;
  position: relative;

  &#selected {
    ::after {
      position: absolute;
      top: calc(50% - 1px);
      right: 0;
      content: "";
      display: block;
      width: 50px;
      height: 2px;
      background-color: #fff;
    }
  }
`;

const CustomLink = styled.input.attrs({ type: "radio" })`
  display: none;
  position: relative;

  &:checked + ${FormCheckText} {
    color: #fff;
    font-weight: 600;
  }
  &:hover + ${FormCheckText} {
    color: #fff;
    font-weight: 600;
  }
`;
