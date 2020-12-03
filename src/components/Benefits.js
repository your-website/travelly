import React from "react";
// Style
import styled from "styled-components";
// Components
import SwipeGallery from "./Swipegallery";
// Imgae
import background from "../img/travel.jpg";

const Benefits = () => {
  return (
    <BenefitsStyle id="benefits">
      <Header background={background}>
        <h2>The Perfect Travel</h2>
        <h3>
          We cover everything for picking the perfect hotel <br />
          to flight and destination
        </h3>
        <SwipeGallery />
      </Header>
    </BenefitsStyle>
  );
};

export default Benefits;

const BenefitsStyle = styled.section`
  position: relative;
  background-color: #fff;
`;

const Header = styled.header`
  background: #343c44;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  h2 {
    color: white;
    z-index: 2;
  }
  h3 {
    margin: 3rem 0rem;
    background-color: rgba(255, 255, 255, 0.6);
    z-index: 2;
  }
`;
