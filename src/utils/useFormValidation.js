import React from 'react';

function useFormValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  function handleChange(e) {
    setErrors({ ...errors, [e.target.name]: e.target.validationMessage });
    setValues({ ...values, [e.target.name]: e.target.value });
    setIsValid(e.target.closest('form').checkValidity());
  };

  return {
    values, errors, isValid, handleChange,
  };
};

export default useFormValidation;