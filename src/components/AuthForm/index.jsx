import React from "react";
import { Form, Field } from "react-final-form";
import { Checkbox } from "@material-ui/core";
import { TextFieldAdapter } from "src/components/common";
import FormControlLabel from '@material-ui/core/FormControlLabel';

import {
  Container,
  StyledField,
  StyledButton,
  LastRow
} from "./styled";

const Auth = ({ submitCallback }) => {
  const handleOnSubmit = (values) => {
    submitCallback && submitCallback();
  };

  const validate = (values) => {
    const errors = {};

    if (!values.login) {
      errors.login = "Заполните логин"
    }
    if (!values.password) {
      errors.password = "Заполните пароль"
    }

    return errors;
  };

  return (
    <Container>
      <Form
        onSubmit={handleOnSubmit}
        validate={validate}
      >
        {
          ({ handleSubmit }) => (
            <>
              <StyledField
                name="login"
                component={TextFieldAdapter}
                label="Логин"
              />
              <StyledField
                name="password"
                component={TextFieldAdapter}
                label="Пароль"
              />
              <LastRow>
                <StyledButton
                  onClick={handleSubmit}
                >
                  Войти
                </StyledButton>
                <FormControlLabel
                  control={
                    <Field
                      name="remember_me"
                      component={Checkbox}
                    />
                  }
                  label="Запомнить меня"
                />

              </LastRow>
            </>
          )
        }
      </Form>
    </Container>
  )
}

export default Auth;
