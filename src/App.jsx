import { useState } from "react";
import Flashcard from "./components/Flashcard";
import Controls from "./components/Controls";
import { hiragana } from "./data/hiragana";
import { katakana } from "./data/katakana";
import classes from "./App.module.css";

const backgroundImages = [
  "/watercolors/01-fujisan.jpg",
  "/watercolors/02-asosan.jpg",
  "/watercolors/03-hakusan.jpg",
  "/watercolors/04-tateyama.jpg",
  "/watercolors/05-goryu.jpg",
  "/watercolors/06-shinano-gawa.jpg",
  "/watercolors/07-tone-gawa.jpg",
  "/watercolors/08-ishikari-gawa.jpg",
  "/watercolors/09-yodo-gawa.jpg",
  "/watercolors/10-chikugo-gawa.jpg",
];

function App() {
  const [characters, setActiveCharacters] = useState(hiragana);
  const [activeGroup, setActiveGroup] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
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
    winWidth: "100vw",
  };

  // helper functions

  function switchCharacters() {
    const newCharacters = characters === hiragana ? katakana : hiragana;
    setActiveCharacters(newCharacters);
    setFilteredCharacters(
      newCharacters.filter((char) => char.group === activeGroup)
    );
  }

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
          switchCharacters={() => switchCharacters(characters)}
        />
      </div>
    </>
  );
}

export default App;
