import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
import "./Navbar.css";

import "bootstrap/dist/css/bootstrap.min.css";

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavLink href="">Accueil</NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="">Célébrité du cirque</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Galerie photo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Réservation</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Contact</NavLink>
            </NavItem>
          </Nav>
          <NavbarBrand href="/">
            <img
              className="logo"
              src="https://image.flaticon.com/icons/svg/2519/2519076.svg"
            ></img>
          </NavbarBrand>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
