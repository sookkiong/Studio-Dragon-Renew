import { Outlet } from "react-router";
import Header from "../components/Header";

const BlackLayout = () => {
  return (
    <>
      <Header id="black" />
      <Outlet />
    </>
  );
};

export default BlackLayout;
