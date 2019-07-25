import React, { Component } from "react";
import Form from "./components/Form";
import Message from "./components/Message";

class App extends Component {
  state = {
    isFormValid: false
  };

  onValidate = isFormValid => {
    this.setState({ isFormValid });
  };

  render() {
    return (
      <React.Fragment>
        <Form isFormValid={this.onValidate} />
        <Message isValid={this.state.isFormValid} />
      </React.Fragment>
    );
  }
}

export default App;
