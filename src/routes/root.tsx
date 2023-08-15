import { Outlet } from "react-router-dom";
import { MainNavbar } from "../components/Navbar";

export default function Root() {
  return (
    <>
      <MainNavbar />
      <Outlet />
    </>
  );
}
