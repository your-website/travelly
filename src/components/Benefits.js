import React from "react";
// Style
import styled from "styled-components";
// Components
import Card from "./Card";
// Data
import data from "../data";

const Benefits = () => {
  const dataCard = data();
  return (
    <BenefitsStyle id="benefits">
      <header>
        <h2>The Perfect Travel</h2>
        <h3>
          We cover everything for picking the perfect hotel <br />
          to flight and destination
        </h3>
      </header>
      <Cards>
        {dataCard.map((card, index) => {
          const { icon, description, alt, title } = card;
          return (
            <Card
              key={index}
              icon={icon}
              description={description}
              alt={alt}
              title={title}
            />
          );
        })}
      </Cards>
    </BenefitsStyle>
  );
};

export default Benefits;

const BenefitsStyle = styled.section`
  position: relative;
  background-color: #fff;

  header {
    background: #343c44;
    padding: 3rem;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;

    h3 {
      padding: 1rem;
    }
  }
`;

const Cards = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  min-height: 50vh;
  align-items: center;
`;
