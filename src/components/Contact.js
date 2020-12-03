import React from "react";
// Style
import styled from "styled-components";
// Components
import Form from "./Form";
// Image
import background from "../img/contact-mountain.png";

const Contact = () => {
  return (
    <ContactStyle background={background} id="contact">
      <Container>
        <header>
          <h2>Contact Us</h2>
        </header>
        <Form />
      </Container>
    </ContactStyle>
  );
};

export default Contact;

const ContactStyle = styled.section`
  background: url(${(props) => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  header {
    text-align: center;
    padding: 4rem;
  }
`;

const Container = styled.div`
  width: 60%;
  color: white;
  border-radius: 20px;
  background: rgba(19, 28, 39, 0.8);

  @media (max-width: 700px) {
    width: 90%;
  }
`;
