import { useState } from "react";
import Flashcard from "./components/Flashcard";
import Controls from "./components/Controls";
import { characters } from "./data/characters";
import classes from "./App.module.css";

const backgroundImages = [
  "/watercolors/1-fujisan.jpg",
  "/watercolors/2-asosan.jpg",
  "/watercolors/3-hakusan.jpg",
  "/watercolors/4-tateyama.jpg",
  "/watercolors/5-goryu.jpg",
  "/watercolors/6-gassan.jpg",
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeGroup, setActiveGroup] = useState(1);
  const [filteredCharacters, setFilteredCharacters] = useState(
    characters.filter((char) => char.group === activeGroup)
  );

  // Data Processing
  const backgroundImage = {
    backgroundImage: `url(${process.env.PUBLIC_URL}${
      backgroundImages[activeGroup - 1]
    })`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
  };

  // helper functions
  function onDecrement() {
    if (activeIndex === 0) {
      setActiveIndex(filteredCharacters.length - 1);
      return;
    }
    setActiveIndex(activeIndex - 1);
  }

  function onIncrement() {
    if (activeIndex === filteredCharacters.length - 1) {
      setActiveIndex(0);
      return;
    }
    setActiveIndex(activeIndex + 1);
  }

  function shuffle() {
    const currentCharacters = characters.filter(
      (char) => char.group === activeGroup
    );
    const shuffledCharacters = currentCharacters.sort(
      () => Math.random() - 0.5
    );

    setFilteredCharacters(shuffledCharacters);
  }

  function onSelect(e) {
    setActiveIndex(0);
    setActiveGroup(Number(e.target.value));
    const filteredCharacters = characters.filter(
      (character) => character.group === Number(e.target.value)
    );
    setFilteredCharacters(filteredCharacters);
  }

  // JSX
  return (
    <>
      <div className={classes.container} style={backgroundImage}>
        <Flashcard card={filteredCharacters[activeIndex]} />
        <Controls
          onDecrement={() => onDecrement()}
          onIncrement={() => onIncrement()}
          shuffle={() => shuffle(filteredCharacters)}
          onSelect={(e) => onSelect(e)}
          activeGroup={activeGroup}
        />
      </div>
    </>
  );
}

export default App;
