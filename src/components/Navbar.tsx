import { Navbar } from "flowbite-react";

export const MainNavbar = () => {
  return (
    <Navbar fluid rounded className="shadow-md shadow-slate-400">
      <Navbar.Brand href="/">
        <img src="/favicon.png" alt="FSChecklist" className="w-12 h-12" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/737">Boeing 737 NG</Navbar.Link>
        <Navbar.Link href="/208">Cessna 208B</Navbar.Link>
        <Navbar.Link href="/a320">Airbus A320</Navbar.Link>
        <Navbar.Link href="/c172">Cessna 172</Navbar.Link>
        <Navbar.Link href="/crjx">CRJ</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
