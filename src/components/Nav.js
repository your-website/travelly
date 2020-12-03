import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavStyle>
      <h1>Travelly</h1>
      <ul>
        <li>
          <a href="#location">Locations</a>
        </li>
        <li>
          <a href="#benefits">Benefits</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </NavStyle>
  );
};

const NavStyle = styled.nav``;

export default Nav;
