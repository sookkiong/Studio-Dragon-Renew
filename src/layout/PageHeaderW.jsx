import { Outlet } from "react-router-dom";
import HeaderW from "../components/HeaderW";

const PageHeaderW = () => {
  return (
    <>
      <HeaderW />
      <Outlet />
    </>
  );
};

export default PageHeaderW;
