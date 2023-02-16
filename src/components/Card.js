import React from "react";
import classes from "./Card.module.css";

import CardDescription from "./CardDescription";
import CardImage from "./CardImage";

const Card = (props) => {
  const image = props.character.image;
  return (
    <div className={classes.card}>
      <CardImage image={image} />
      <CardDescription character={props.character} />
    </div>
  );
};

export default Card;
