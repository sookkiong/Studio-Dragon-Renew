import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";

const WhiteLayout = () => {
  const location = useLocation();

  return (
    <>
      <Header id={location.hash === "#home" ? "white" : "simple"} />
      <Outlet />
    </>
  );
};

export default WhiteLayout;
