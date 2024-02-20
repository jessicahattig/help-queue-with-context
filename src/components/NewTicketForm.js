import React from "react";
import PropTypes from "prop-types"; 

function NewTicketForm(props){
  return (
    <React.Fragment>
      <h2>Create New Ticket</h2> 
      {props.children}
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  children: PropTypes.node
};

export default NewTicketForm;