import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import Logo from "../assets/logo.png";

export const MainNavbar = () => {
  return (
    <div className="w-full">
      <Navbar fluid rounded className="shadow-md shadow-slate-400">
        <Link to="/home">
          <Navbar.Brand>
            <img src={Logo} alt="FSChecklist" className="w-12 h-12" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Link to="/737">
            <Navbar.Link>Boeing 737 NG</Navbar.Link>
          </Link>
          <Link to="/208">
            <Navbar.Link>Cessna 208B</Navbar.Link>
          </Link>
          <Link to="/a320">
            <Navbar.Link>Airbus A320</Navbar.Link>
          </Link>
          <Link to="/c172">
            <Navbar.Link>Cessna 172</Navbar.Link>
          </Link>
          <Link to="/crjx">
            <Navbar.Link>CRJ</Navbar.Link>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
