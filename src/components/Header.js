import React from "react";
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
    </React.Fragment>
  );
}

Header.propTypes = {
  theme: PropTypes.object
};

export default Header;