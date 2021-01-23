import React from "react";
import Card from "../Card";
import "./style.css";

function CardContainer(props) {
  return (
    <div className="jumbotron card-container">
      {/* Pass props to Card */}
      <Card image={props.user.image} title = {props.user.login} />
    </div>
  );
}

export default CardContainer;
