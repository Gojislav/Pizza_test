import styled, { css } from "styled-components";
import * as colors from "../../colors";

interface ButtonProps {
  disabled?: boolean;
  outlined?: boolean;
}

const Button = styled.button<ButtonProps>`
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  background-color: ${(props) => !props.disabled ? colors.primary : colors.grey};
  color: white;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 0.875em;
  letter-spacing: 0.05em;
  font-weight: 700;
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px ${colors.primary}90;
  }
  ${(props) => props.outlined && css`
    background-color: white;
    border: 2px solid ${colors.primary};
    color: ${colors.primary};
  `}
`;

export default Button;
