import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";

const WhiteLayout = () => {
  const location = useLocation();

  const setId = () => {
    return location.hash === "#home" || "" ? "white" : "simple";
  };

  return (
    <>
      <Header id={setId()} />
      <Outlet />
    </>
  );
};

export default WhiteLayout;
