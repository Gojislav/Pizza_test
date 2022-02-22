import styled, { css } from "styled-components";

interface ColProps {
  cols?: 3 | 4 | 6 | 12 | "auto";
}

export const Row = styled.div`
  display: flex;
  margin: 0 -10px;
  flex-wrap: wrap;
`;

export const Col = styled.div<ColProps>`
  padding: 0 10px;
  ${(props) => props.cols === 3 && css`
    width: 25%;
  `}
  ${(props) => props.cols === 4 && css`
    width: 33.33%;
  `}
  ${(props) => props.cols === 6 && css`
    width: 50%;
  `}
  ${(props) => props.cols === "auto" && css`
    flex-grow: 1;
  `}
  ${(props) => props.cols === 12 && css`
    width: 100%;
  `}
`;
