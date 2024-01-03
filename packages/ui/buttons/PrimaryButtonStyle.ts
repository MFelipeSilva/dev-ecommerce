import styled from "styled-components";

interface IPrimaryButtonStyle {
  color?: string;
  size?: "small" | "middle" | "large";
}

export const PrimaryButtonStyle = styled.button<IPrimaryButtonStyle>`
  display: flex;
  height: 3.5em;
  background-color: #2d3142;
  letter-spacing: 1px;
  color: #ffffff;
  font-weight: 600;
  font-family: "Inter", sans-serif;
  font-size: clamp(9pt, 1vw, 11pt) !important;
  text-transform: uppercase;
  box-shadow: none;
  padding: 13px 20px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0);
  outline: none;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    color: #000000;
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 1);
  }
`;
