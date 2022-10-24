import styled from "styled-components";
import { Form, Field } from 'formik'

export const FormWrapper = styled(Form)`
    padding: 15px;
    border: 1px solid black;
    border-radius: 4px;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  font-weight: 600;
  font-size: 20px;
  
`;

export const Input = styled(Field)`
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


export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px auto;
  min-width: 100px;
  padding: 2px 32px;
  border-style: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  background-color: grey;
  border-radius: 4px;
  &:hover{
    color:white;
    background-color: tomato;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;