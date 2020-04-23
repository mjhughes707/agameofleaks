import React from "react";
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

export default Preview;
