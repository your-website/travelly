import React from "react";
// Style
import styled from "styled-components";
// Image
import backgroundLocation from "../img/new-york-page.png";
import cloudImage from "../img/cloud.png";

const Location = () => {
  return (
    <Section background={backgroundLocation} id="location">
      <header>
        <h2>The Perfect Travelling Experience.</h2>
        <h3>
          We cover everything from picking the perfect hotel, <br /> flight and
          travelling destination.
        </h3>
        <img src={cloudImage} className={"moving-cloud-1 cloud"} alt="cloud" />
        <img src={cloudImage} className={"moving-cloud-2 cloud"} alt="cloud" />
      </header>
    </Section>
  );
};

const Section = styled.section`
  position: relative;

  background: linear-gradient(rgba(0, 0, 0, 0.5), transparent),
    url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;

  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  color: white;

  header {
    width: 90%;
    margin: auto;
  }

  h2 {
    padding: 3rem 0rem;
    text-decoration: underline;
    text-decoration-thickness: 0.5rem;
  }
  h3 {
    padding: 4rem 0rem;
    font-weight: bold;
    color: black;
  }

  img {
    position: absolute;
    top: 0%;
    right: 0%;
    pointer-events: none;

    &.moving-cloud-1 {
      animation: cloudAnimations 5.2s infinite alternate ease-in-out;
    }

    &.moving-cloud-2 {
      top: 20%;
      z-index: -2;
      opacity: 0.5;
      animation: cloudAnimations 5s infinite alternate ease-in-out;
    }
  }

  @media (max-width: 760px) {
    .moving-cloud-1 {
      z-index: -1;
    }

    h3 {
      background: rgba(19, 28, 39, 0.8);
      -webkit-text-fill-color: white;
      padding: 4rem 2rem;
    }
  }

  @keyframes cloudAnimations {
    from {
      transform: translate(10%, -10%);
    }
    to {
      transform: translate(0%, 0%);
    }
  }
`;

export default Location;
