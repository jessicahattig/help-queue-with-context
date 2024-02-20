import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function ReusableForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.handleFormSubmission({
      names: event.target.names.value, 
      location: event.target.location.value, 
      issue: event.target.issue.value, 
      id: v4()
    });
  }

  const theme = props.theme;

  const buttonStyles = { 
    backgroundColor: theme.buttonBackground, 
    color: theme.textColor, 
  }

  const inputStyles = { 
    backgroundColor: theme.inputBackground,
    color: theme.textColor, 
  }
  
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <label>Pair Names:
          <br/>
          <input
            style={inputStyles}
            type='text'
            name='names' />
        </label>
        <br/>
        <label>Location:
          <br/>
          <input
            style={inputStyles}
            type='text'
            name='location' />
        </label>
        <br/>
        <label>Describe your issue:
          <br/>
          <textarea
            style={inputStyles}
            name='issue' />
        </label>
        <br/>
        <button style={buttonStyles} type='submit'>{props.buttonText}</button>
      </form>
      <hr/>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  handleFormSubmission: PropTypes.func,
  buttonText: PropTypes.string,
  theme: PropTypes.object
};

export default ReusableForm;