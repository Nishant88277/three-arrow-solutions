import styled from "styled-components";

export const Text = styled.div`
  white-space: nowrap;
  font-weight: 700;
  font-family: "Manrope";
  color: black;
  cursor: pointer;
  overflow: hidden;
`;

export const HoveredRotatedContainer = styled.div`
  background: linear-gradient(
    91deg,
    var(--gradient-two) 8.16%,
    var(--gradient-one) 20.67%
  );

  z-index: 999;
  transform: rotate(-7deg);
  width: 100vw;
  position: absolute;

  overflow: hidden;
`;
