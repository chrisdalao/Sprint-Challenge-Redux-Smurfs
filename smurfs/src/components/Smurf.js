import React from "react";

const Smurf = props => {
  return (
    <div className="smurf">
      <div className="smurf-name">Name: {props.smurf.name}</div>
      <div className="smurf-age">Age: {props.smurf.age}</div>
      <div className="smurf-height">Height: {props.smurf.height}</div>
      <button className="md-button">Update</button>
      <button
        onClick={() => props.handleDelete(props.smurf.id)}
        className="md-button-danger"
      >
        Delete
      </button>
    </div>
  );
};

export default Smurf;
