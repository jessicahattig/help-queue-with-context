import React from "react";
// import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditTicketForm (props) {
  return (
    <React.Fragment>
      <h2>Edit Your Ticket</h2> 
      {props.children}
    </React.Fragment>
  );
}

EditTicketForm.propTypes = {
  children: PropTypes.node
};

export default EditTicketForm;