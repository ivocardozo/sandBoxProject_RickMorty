import React, { useEffect, useState } from "react";

import Card from "./Card";
import classes from "./CardContainer.module.css";

const CardContainer = () => {
  const [show, setShow] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [indexCharacter, setIndexCharacter] = useState(null);
  let containsData = characters.length > 0;
  console.log();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
      setIndexCharacter(randomNumberGenerator(0, 19));
    };
    fetchData();
  }, []);

  const randomNumberGenerator = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const randomHandlerButton = () => {
    console.log(randomNumberGenerator(0, 19));
    const randomNumber = randomNumberGenerator(0, 19);
    setIndexCharacter(randomNumber);
    setShow(true);
  };

  const showCardHandler = () => {
    setShow(false);
  };

  console.log("characters", characters);
  console.log(containsData);
  console.log(characters.length);
  return (
    <div clasName={classes.container}>
      <div clasName={classes.control}>
        <button onClick={randomHandlerButton}>Random</button>
        <button onClick={showCardHandler}>Clear</button>
      </div>
      <div>
        {containsData && show && (
          <Card character={characters[indexCharacter]} />
        )}
      </div>
      {!show && <p> press Random to display a character</p>}
    </div>
  );
};

export default CardContainer;
