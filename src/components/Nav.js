import React from "react";
import styled from "styled-components";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  setContactPage,
  setBenefitsPage,
  setTravelPage,
  setLocationPage,
  setSelectPage,
} from "../actions/pageActions";
// Animation
import SelectNav from "./SelectNav";
import { motion } from "framer-motion";
const Nav = () => {
  const dispatch = useDispatch();
  const { selectPage } = useSelector((state) => state.page);

  const nextPage = (selectPage, set, value) => {
    dispatch(set(value));
    dispatch(setSelectPage(selectPage));
  };
  return (
    <Header>
      <NavStyle>
        <TrackAnim>
          <h1 id="logo" onClick={() => nextPage("travel", setTravelPage, true)}>
            Travelly
          </h1>
          {selectPage === "travel" && <SelectNav />}
        </TrackAnim>
        <ul>
          <li onClick={() => nextPage("location", setLocationPage, true)}>
            <p>Locations</p>
            {selectPage === "location" && <SelectNav />}
          </li>

          <li onClick={() => nextPage("benefits", setBenefitsPage, true)}>
            <p>Benefits</p>
            {selectPage === "benefits" && <SelectNav />}
          </li>
          <li onClick={() => nextPage("contact", setContactPage, true)}>
            <p>Contact</p>
            {selectPage === "contact" && <SelectNav />}
          </li>
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
  overflow: hidden;

  width: 90%;
  margin: auto;

  ul {
    display: flex;
    list-style: none;
    flex: 0 1 60rem;
  }

  li {
    position: relative;
    flex: 1 0 10rem;
    text-align: center;
    cursor: pointer;
    p {
      position: relative;
      z-index: 2;
    }
    svg {
      position: absolute;
      top: 0;
      right: 0.2rem;
      z-index: 1;
    }
  }

  @media (max-width: 671px) {
    text-align: center;

    h1 {
      padding: 2rem;
    }
  }
`;

const TrackAnim = styled(motion.div)`
  position: relative;
  display: flex;
  flex: 0 0;

  h1 {
    position: relative;
    font-family: "Pattaya", sans-serif;
    font-weight: 400;
    letter-spacing: 0.1rem;
    cursor: pointer;
    z-index: 2;
  }

  svg {
    position: absolute;
    top: 0.5rem;
    left: 0;
    z-index: 1;
  }

  @media (max-width: 950px) {
    svg {
      top: 0;
    }
  }

  @media (max-width: 655px) {
    svg {
      top: 2rem;
    }
  }

  @media (max-width: 600px) {
    flex: 1;
    justify-content: center;
  }
`;

export default Nav;
