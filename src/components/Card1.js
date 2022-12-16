import React from "react";
import "../styles/Card1.css";

const Card1 = (props) => {
  const { id, name, nickName, occupation, status, imageLink } = props;

  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card-field character-name">
          <span className="card-field">
            {" "}
            <span className="card-label">{id}</span>{" "}
            <span className="card-name">{name}</span>
          </span>
          <span className="card-field">
            {" "}
            <label className="card-label">AKA</label> {nickName}{" "}
          </span>
        </div>

        <span className="card-field">
          {" "}
          <label className="card-label">Occupation:</label> {occupation}{" "}
        </span>

        <hr></hr>

        <span className="card-field">
          {" "}
          <label className="card-label">Status:</label> {status}{" "}
        </span>

        <hr></hr>
      </div>
      <img src={imageLink}></img>
    </div>
  );
};

export default Card1;
