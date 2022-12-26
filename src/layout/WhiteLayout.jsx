import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const WhiteLayout = () => {
  return (
    <>
      <Header id="white" />
      <Outlet />
    </>
  );
};

export default WhiteLayout;
