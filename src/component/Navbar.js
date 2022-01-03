import React from "react";
import { Nav, NavContainer, List, StyledLink, Logo } from "./NavbarStyle";

export const Navbar = () => {
  return (
    <Nav className="nav-cont">
      <Logo>YourChallenge</Logo>
      <NavContainer className="nav">
        <List>
          <StyledLink to="/">Product</StyledLink>
        </List>
        <List>
          <StyledLink to="/">Download</StyledLink>
        </List>
        <List>
          <StyledLink to="/">Pricing</StyledLink>
        </List>
      </NavContainer>
    </Nav>
  );
};
