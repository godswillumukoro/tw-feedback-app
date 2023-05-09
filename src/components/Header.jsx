import React from "react";
import PropTypes from "prop-types";

function Header({text, color, bgColor}) {

    const headerStyles = {
        backgroundColor: bgColor,
        color:color
    }

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}
Header.defaultProps = {
  text: "Please give us some feedback",
  bgColor: 'rgba(0,0,0,0.4',
  color: '#ff6a95'
};

Header.propTypes = {
  text: PropTypes.string,
  // text: PropTypes.string.isRequired,
};

export default Header;
