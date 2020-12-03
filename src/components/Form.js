import React from "react";
// Style
import styled from "styled-components";
import { Button } from "../style";

const Form = () => {
  return (
    <FormStyle>
      <div className="name-form">
        <label for="name">Name:</label>
        <input type="text" name="name" required />
      </div>
      <div className="email-form">
        <label for="email">Email:</label>
        <input type="email" name="email" required />
      </div>
      <Button type="submit">Submit</Button>
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
