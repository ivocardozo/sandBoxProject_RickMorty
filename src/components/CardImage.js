import React from "react";

import classes from "./CardImage.module.css";

const CardImage = (props) => {
  console.log(props);
  return (
    <div className={classes.image}>
      <img src={props.image} alt="test images" />
    </div>
  );
};

export default CardImage;
