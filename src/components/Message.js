import React from "react";
import { PropTypes } from "prop-types";

const Message = ({ isValid }) => (
  <React.Fragment>
    <h3 className="text-center message">
      {isValid ? "Form is Complete!" : "Form is Incomplete!"}
    </h3>
  </React.Fragment>
);

Message.propTypes = {
  isValid: PropTypes.bool
};

export default Message;
