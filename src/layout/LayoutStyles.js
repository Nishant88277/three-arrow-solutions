import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: auto;

  overflow-x: hidden;
  overflow-y: visible;


  @media only screen and (max-width: 640px) {
    padding: 15px;
    .accord {
      padding:0px;
    }
  }


`;
