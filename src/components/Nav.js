import React from "react";
import styled from "styled-components";
// Redux
import { useDispatch } from "react-redux";
import {
  setContactPage,
  setBenefitsPage,
  setTravelPage,
  setLocationPage,
} from "../actions/pageActions";

const Nav = () => {
  const dispatch = useDispatch();
  return (
    <Header>
      <NavStyle>
        <h1 id="logo" onClick={() => dispatch(setTravelPage(true))}>
          Travelly
        </h1>
        <ul>
          <li onClick={() => dispatch(setLocationPage(true))}>Locations</li>
          <li onClick={() => dispatch(setBenefitsPage(true))}>Benefits</li>
          <li onClick={() => dispatch(setContactPage(true))}>Contact</li>
        </ul>
      </NavStyle>
    </Header>
  );
};

const Header = styled.header`
  background: rgb(102, 122, 146);
  background: linear-gradient(
    90deg,
    rgba(102, 122, 146, 1) 0%,
    rgba(44, 62, 84, 1) 100%
  );
  color: white;
  position: sticky;
  top: 0px;
  z-index: 5;
`;

const NavStyle = styled.nav`
  min-height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  flex-wrap: wrap;

  width: 90%;
  margin: auto;

  h1 {
    flex: 2 1 40rem;
    font-family: "Pattaya", sans-serif;
    font-weight: 400;
    letter-spacing: 0.1rem;
    cursor: pointer;
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
    cursor: pointer;
  }

  @media (max-width: 671px) {
    text-align: center;

    h1 {
      padding: 2rem;
    }
  }
`;

export default Nav;
