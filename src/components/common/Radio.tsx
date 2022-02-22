import React from "react";
import styled from "styled-components";
import * as colors from "../../colors";

const Container = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  & .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 50%;
  }

  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  & input:checked ~ .checkmark {
    background-color: ${colors.primary};
  }

  & .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  & input:checked ~ .checkmark:after {
    display: block;
  }

  & .checkmark:after {
    top: 7px;
    left: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`;

interface Props {
  label: string;
  name: string;
  checked: boolean;
  handleChange: () => void;
}

const Radio = ({ label, name, checked, handleChange }: Props) => {
  return (
    <Container>
      {label}
      <input
        onChange={handleChange}
        type="radio"
        name={name}
        checked={checked}
      />
      <span className="checkmark" />
    </Container>
  );
};

export default Radio;
