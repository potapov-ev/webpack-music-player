import React from "react";
import TextField from '@material-ui/core/TextField';

const TextFieldAdapter = ({
  input,
  meta: { error, touched },
  fullWidth = true,
  ...rest
}) => (
    <>
      <TextField
        helperText={touched && error}
        error={touched && error}
        fullWidth={fullWidth}
        {...input}
        {...rest}
      />
    </>
  );

export default TextFieldAdapter;
