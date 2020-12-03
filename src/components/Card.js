import React from "react";
// Style
import styled from "styled-components";

const Card = ({ icon, alt, title, description }) => {
  return (
    <CardStyle>
      <CardIcon>
        <img src={icon} alt={alt} />
      </CardIcon>
      <h4>{title}</h4>
      <p>{description}</p>
    </CardStyle>
  );
};

export default Card;

const CardStyle = styled.div`
  flex: 1 0 25rem;
  min-height: 35vh;
  margin: 2rem 5rem;

  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2), 0px 20px 20px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    max-width: 15%;
    margin: 2rem;
  }

  h4,
  p {
    padding: 1rem;
  }

  @media (max-width: 320px) {
    margin: 2rem 1rem;
  }
`;

const CardIcon = styled.div`
  background: #4c6e97;
  width: 100%;
`;
