import { Outlet, Navigate } from "react-router-dom";
import { MainNavbar } from "../components/Navbar";

export default function Root() {
  // Get path name
  const path = window.location.pathname;

  return (
    <>
      {path == "/fschecklist/" && <Navigate to="/home" />}
      <MainNavbar />
      <Outlet />
    </>
  );
}
