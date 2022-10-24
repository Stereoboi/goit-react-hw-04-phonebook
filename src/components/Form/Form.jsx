import { useState } from "react";
import { Label, Input, Button, FormWrapper } from "./Form.styled";
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'

export const FormContact = ({onSubmit}) => {
  const [name, ] = useState('');
  const [number, ] = useState('');
  
  

    const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().min(6).required(),
  })

  const handleSubmit = (values, {resetForm}) => {
    onSubmit(values)
    resetForm();
  }

  
    return (
      <Formik
        initialValues={{name, number}}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormWrapper  >
            <Label>
              Name
                <Input
                  type="text"
                  name="name"
                />
                <ErrorMessage name="name" />
                
            </Label>
            <Label>
              Number
                <Input
                  type="text"
                  name="number"
                />
                <ErrorMessage name="number" />
            </Label>
            <Button type='submit'>Add contact</Button>
          </FormWrapper>
        </Formik>
    )
  }


FormContact.propTypes = {
  onSubmit: PropTypes.func,
}