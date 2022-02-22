import React from "react";
import styled from "styled-components";
import * as colors from "../../colors";

const Container = styled.div`

`;

const Input = styled.input<{ error: string }>`
  box-shadow: 0 0 0 1px #e7e7e9 inset;
  transition: border-color .08s ease-in, box-shadow .08s ease-in, color .08s ease-in;
  background-color: #fff;
  outline: none;
  border: 1px solid ${(props) => props.error ? "red" : "transparent"};
  border-radius: 6px;
  padding: 0.75rem;
  width: 100%;

  &:focus {
    background-color: #fff;
    border-color: ${(props) => props.error ? "red" : colors.primary};
    box-shadow: 0 0 0 4px ${colors.primary}90;
    z-index: 2;
  }
`;

export const Error = styled.div`
  font-size: 12px;
  color: red;
  margin-top: 4px;
  margin-left: 4px;
`;

const TextInput = ({ error = "", ...rest }) => {
  return (
    <Container>
      <Input error={error} {...rest} />
      {error && (
        <Error>{error}</Error>
      )}
    </Container>
  );
};

export default TextInput;
