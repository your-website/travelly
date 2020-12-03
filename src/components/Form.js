import React from "react";
// Style
import styled from "styled-components";
import { Button } from "../style";

const Form = () => {
  return (
    <FormStyle action="https://formspree.io/f/xknpvedd" method="POST">
      <div className="name-form">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" required />
      </div>
      <div className="email-form">
        <label htmlFor="email">Email:</label>
        <input type="email" name="_replyto" required />
      </div>
      <Button type="submit" value="Send">
        Submit
      </Button>
    </FormStyle>
  );
};

export default Form;

const FormStyle = styled.form`
  div {
    padding: 3rem;
    text-align: center;
  }

  label {
    margin: 0rem 3rem;
  }

  input {
    padding: 1rem 3rem;
  }

  button {
    width: 100%;
    padding: 2rem;
    margin-top: 8rem;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  @media (max-width: 700px) {
    input {
      padding: 1rem;
    }
  }
`;
