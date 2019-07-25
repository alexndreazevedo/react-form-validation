import React, { Component } from "react";
import { PropTypes } from "prop-types";

const InputValidation = ({ name, validator, onChange }) => {
  const onValidate = ({ target }) => {
    const newValue = target.value;
    onChange(validator.test(newValue), newValue)
  }

  return <input type="text" className={name} onChange={onValidate} />
}

InputValidation.propTypes = {
  name: PropTypes.string,
  validator: PropTypes.instanceOf(RegExp),
  onChange: PropTypes.func
}

export default InputValidation;
