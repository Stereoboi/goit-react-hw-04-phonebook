import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  margin-top: 15px;
  font-weight: 600;
  font-size: 20px;
`;

export const Input = styled.input`
  width: 220px;
  border-style: solid;
  border-color: grey;
  border-radius: 4px;
  font-size: 20px;
  &:focus {
    outline: none;
    border-color: tomato;
  }
`;