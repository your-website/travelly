import React from "react";
// Style
import styled from "styled-components";
import { Button } from "../style";
// Image
import landingPage from "../img/landing-page.jpg";
const Hero = () => {
  return (
    <HeroStyle id="hero" background={landingPage}>
      <h2>Travel Beyond Limits.</h2>
      <h3>
        Start your travel at an affordable price with Travelly <br /> Contact us
        now bellow.
      </h3>
      <Button>Book Now</Button>
    </HeroStyle>
  );
};

const HeroStyle = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), transparent),
    url(${(props) => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 90vh;
  background-color: #fff;

  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  h3 {
    padding: 5rem;
  }
`;

export default Hero;
