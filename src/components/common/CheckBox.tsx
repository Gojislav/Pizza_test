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
    height: 0;
    width: 0;
    &:checked ~ .checkmark {
      background-color: ${colors.primary} !important;
    }
  }
  &:hover input ~ .checkmark {
    background-color: ${colors.grey};
  }
  & input:checked ~ .checkmark:after {
    display: block;
  }
  & .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    &:after {
      content: "";
      position: absolute;
      display: none;
      left: 7px;
      top: 2px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`;

interface Props {
  label: string;
  checked: boolean;
  handleChange: (e) => void;
}

const CheckBox = ({ label, checked, handleChange }: Props) => {
  return (
    <Container>
      {label}
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <span className="checkmark" />
    </Container>
  );
};

export default CheckBox;
