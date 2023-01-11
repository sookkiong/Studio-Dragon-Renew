import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";

const WhiteLayout = () => {
  const location = useLocation();

  const setId = () => {
    if (location.hash === "#home") {
      return "white";
    } else if (location.hash === "") {
      return "white";
    } else {
      return "simple";
    }
  };

  return (
    <>
      <Header id={setId()} />
      <Outlet />
    </>
  );
};

export default WhiteLayout;
