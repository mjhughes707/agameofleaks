import React from "react";
import PropTypes from "prop-types";
import "./Preview.css";

function Preview(props) {
  const { src } = props.scene;

  return (
    <div
      className="Preview"
      style={{ backgroundImage: `url(${src})` }}
      onClick={props.onClick}
    />
  );
}

Preview.propTypes = {
  src: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Preview;
