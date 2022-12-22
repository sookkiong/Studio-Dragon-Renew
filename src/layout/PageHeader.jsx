import { Outlet } from "react-router";
import Header from "../components/Header";

const PageHeader = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default PageHeader;
