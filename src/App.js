import { useEffect } from "react";

import "./styles.css";
import CardContainer from "./components/CardContatiner";

export default function App() {
  // useEffect(() => {
  //   fetch('https://rickandmortyapi.com/api/character').then( data => console.log(data))
  // }, [])
  return (
    <div className="App">
      <CardContainer />
    </div>
  );
}
