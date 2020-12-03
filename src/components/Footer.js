import React from "react";
// Style
import styled from "styled-components";
// Icon
import twit from "../icons/twitter.svg";
import yout from "../icons/youtube.svg";
import inst from "../icons/instagram.svg";

const Footer = () => {
  return (
    <FooterStyle>
      <div>
        <h5>Travelly &copy; </h5>
        <ul>
          <li>
            <a href="/">
              <img src={twit} alt="icon twitter" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={yout} alt="icon youtube" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={inst} alt="icon instagram" />
            </a>
          </li>
        </ul>
      </div>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.footer`
  background: rgba(19, 28, 39, 1);
  min-height: 5vh;
  padding: 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    color: white;
    flex-wrap: wrap;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1 1 40rem;
  }

  li {
    padding: 0 2rem;
  }

  h5 {
    flex: 1 1 40rem;
  }

  @media (max-width: 700px) {
    text-align: center;
    h5 {
      padding-bottom: 5rem;
    }
  }
`;
