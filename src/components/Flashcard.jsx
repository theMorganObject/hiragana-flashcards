import { useEffect, useState } from "react";
import classes from "./Flashcard.module.css";

export default function Flashcard({ card }) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(false);
    return () => {};
  }, [card]);

  return (
    <div onClick={() => setIsFlipped(!isFlipped)} className={classes.container}>
      {isFlipped ? card.e : card.j}
    </div>
  );
}
