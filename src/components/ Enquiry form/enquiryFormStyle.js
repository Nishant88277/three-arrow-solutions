import styled, { css } from "styled-components";

export const Label = styled.label`
  font-family: "Manrope";
  font-style: normal;
  font-size: 20px;
  line-height: 50px;
  color: #a7a7a7;

  @media screen and (min-width: 90px) and (max-width: 680px) {
    line-height: 20px;
    font-size: 15px;
  }
`;

export const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;


export const StyledForm = styled.form`
  width: 100%;
  padding: 30px;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  background: #ffffff;
  background-color: #ffffff;
  padding-left: 14px;
  font-weight: 600;

  &:focus,
  &:active {
    border: none;
    outline: none;
  }

  &::placeholder{
    font-weight: 600;
  }
`;

export const StyledTextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 12rem;
  background: #ffffff;
  background-color: #ffffff;
  padding-left: 14px;
  font-weight: 600;
  transform: translateY(6px);
  resize: none;

  &:focus,
  &:active {
    border: none;
    outline: none;
  }

  &::placeholder {
    font-weight: 600;
  }
`;

export const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;
