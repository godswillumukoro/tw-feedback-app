import React from "react";
import PropTypes from "prop-types";

function Header({ text, color, bgColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: color,
    textAlign: "center",
    paddingBlock: "2.4rem",
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h1>{text}</h1>
      </div>
    </header>
  );
}
Header.defaultProps = {
  text: "We would love to hear your feedback!!",
  bgColor: "#1A1918",
  color: "#F2D0A3",
};

Header.propTypes = {
  text: PropTypes.string,
  // text: PropTypes.string.isRequired,
};

export default Header;
