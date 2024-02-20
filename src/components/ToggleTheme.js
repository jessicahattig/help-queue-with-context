import React from "react";
import PropTypes from "prop-types";

function ToggleTheme(props) {
  const theme = props.theme

  const styles = { 
    backgroundColor: theme.buttonBackground, 
    color: theme.textColor 
  }

  return (
    <React.Fragment>
      <button style={styles} onClick={props.toggleTheme}>
        {theme.textColor === "AntiqueWhite" ? "toggle light theme" : "toggle dark theme"}
      </button>
      <hr/>
    </React.Fragment>
  );
}

ToggleTheme.propTypes = {
  theme: PropTypes.object,
  toggleTheme: PropTypes.func
}

export default ToggleTheme;