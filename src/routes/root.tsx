import { Outlet } from "react-router-dom";
import { MainNavbar } from "../components/Navbar/Navbar";
import { AppProvider } from "../components/ContextProvider";

export default function Root() {
  return (
    <>
      <AppProvider>
        <MainNavbar />
        <Outlet />
      </AppProvider>
    </>
  );
}
