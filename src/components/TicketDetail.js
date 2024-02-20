import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props){
  const { ticket, onClickingDelete, onClickingEdit, theme } = props; 
  
  const buttonStyles = { 
    backgroundColor: theme.buttonBackground, 
    color: theme.textColor, 
  }

  return (
    <React.Fragment>
      <h2>Ticket Detail</h2>
      <h3>{ticket.location} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      <button style={buttonStyles} onClick={onClickingEdit}>Update Ticket</button>
      <button style={buttonStyles} onClick={()=> onClickingDelete(ticket.id)}>Close Ticket</button>
      <hr/>
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  theme: PropTypes.object 
};

export default TicketDetail;