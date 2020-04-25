import React from "react";
import PropTypes from "prop-types";
import "./Preview.css";

function Preview(props) {
  const { src } = props;

  return (
    <div
      className="Preview"
      style={{ backgroundImage: `url(${src})` }}
      onClick={props.onClick}
    />
  );
}

Preview.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Preview;
