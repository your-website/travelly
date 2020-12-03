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
      <div>
        <label htmlFor="area">Text:</label>
        <textarea name="area"></textarea>
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
    padding: 2rem;
    text-align: center;
    max-width: 80%;
    margin: auto;

    display: flex;
  }

  textarea {
    width: 100%;
    height: 10rem;
    padding: 0.2rem 3rem;
  }

  label {
    margin: 0rem 3rem;
    flex: 1 0 7rem;
  }

  input {
    width: 100%;
    padding: 0.2rem 3rem;
  }

  button {
    width: 100%;
    padding: 2rem;
    margin-top: 8rem;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  @media (max-width: 700px) {
    div {
      flex-direction: column;
    }
    input {
      padding: 1rem;
    }
  }
`;
