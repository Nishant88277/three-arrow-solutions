import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 130px;
  margin: 48px 0 128px 0;

  overflow-x: hidden;
  overflow-y: visible;

  @media only screen and (max-width: 1024px) {
    gap: 80px;
    margin-top: 0;
    margin-bottom: 80px;
    padding: 15px;
    .accord {
      padding: 0px;
    }
  }

  @media only screen and (max-width: 640px) {
    margin-top: 0;
    margin-bottom: 48px;
    padding: 15px;
    .accord {
      padding: 0px;
    }
  }
`;
