import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <HeroStyle>
      <h2>Travel Beyond Limits.</h2>
      <h3>
        Start your travel at an affordable price with Travelly <br /> Contact us
        now bellow.
      </h3>
      <button>Book Now</button>
    </HeroStyle>
  );
};

const HeroStyle = styled.section``;
export default Hero;
