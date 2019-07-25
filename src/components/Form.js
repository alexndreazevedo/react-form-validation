import React, { Component } from "react";
import { PropTypes } from "prop-types";
import InputValidation from "./InputValidation";

const nameValidator = new RegExp(/^[A-Za-z]{3,30}$/);
const emailValidator = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const phoneValidator = new RegExp(/^[2-9]\d{9}$/);
const urlValidator = new RegExp(/^(https?:\/\/)?[www.]?([a-zA-Z\d-]+\.[a-zA-Z\d-]+)+$/);

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmailValid: false,
      isNameValid: false,
      isPhoneValid: false,
      isUrlValid: false
    };
  }

  onValidate = () => {
    const isFormValid = Object.keys(this.state).reduce((acc, key) => acc && this.state[key], true);
    this.props.isFormValid(isFormValid)
  }

  onChangeField = field => isValid => {
    this.setState({
      [field]: isValid
    }, this.onValidate);
  };

  render() {
    return (
      <div className="row">
        <h1 className="text-center">Form Validation</h1>
        <form>
          <h3>Name:</h3>
          <InputValidation
            name="name"
            validator={nameValidator}
            onChange={this.onChangeField("isNameValid")}
          />
          <h3>Email:</h3>
          <InputValidation
            name="email"
            validator={emailValidator}
            onChange={this.onChangeField("isEmailValid")}
          />
          <h3>Phone:</h3>
          <InputValidation
            name="phone"
            validator={phoneValidator}
            onChange={this.onChangeField("isPhoneValid")}
          />
          <h3>Blog URL:</h3>
          <InputValidation
            name="url"
            validator={urlValidator}
            onChange={this.onChangeField("isUrlValid")}
          />
          <div className="small-6 small-centered text-center columns">
            <a href="#" className="button success expand round text-center">
              Verify
            </a>
          </div>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  isFormValid: PropTypes.func
}

export default Form;
