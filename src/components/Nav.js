import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <Header>
      <NavStyle>
        <h1 id="logo">
          <a href="#hero">Travelly</a>
        </h1>
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
    </Header>
  );
};

const Header = styled.header`
  background: #131c27;
  color: white;
  position: sticky;
  top: 0px;
  z-index: 5;
`;

const NavStyle = styled.nav`
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  flex-wrap: wrap;

  width: 90%;
  margin: auto;

  h1 {
    flex: 2 1 40rem;
    font-family: "Pattaya", sans-serif;
    font-weight: 400;
    letter-spacing: 0.1rem;
  }

  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    flex: 1 1 40rem;
  }

  li {
    flex: 1 0 10rem;
    text-align: center;
  }

  @media (max-width: 671px) {
    text-align: center;

    h1 {
      padding: 2rem;
    }
  }
`;

export default Nav;
