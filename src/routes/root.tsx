import { Outlet, Navigate } from "react-router-dom";
import { MainNavbar } from "../components/Navbar/Navbar";
import { AppProvider } from "../components/ContextProvider";

export default function Root() {
  // Get path name
  const path = window.location.pathname;

  return (
    <>
      <AppProvider>
        {path == "/" && <Navigate to="/home" />}
        <MainNavbar />
        <Outlet />
      </AppProvider>
    </>
  );
}
