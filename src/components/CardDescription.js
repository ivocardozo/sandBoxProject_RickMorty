import React from "react";
import classes from "./CardDescription.module.css";

const CardDescription = (props) => {
  console.log(props.character);
  const { name, status, species, location, origin } = props.character;
  return (
    <div className={classes.description}>
      <h1> {name} </h1>
      <h2>
        {status} - {species}
      </h2>
      <p>Last known location:</p>
      <h3>{location.name}</h3>
      <p>First seen in</p>
      <h3>{origin.name}</h3>
    </div>
  );
};

export default CardDescription;
