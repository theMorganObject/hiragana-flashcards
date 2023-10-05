import { Shuffle } from "@phosphor-icons/react";

import RadioInput from "./RadioInput";
import Button from "./Button";
import classes from "./Controls.module.css";

export default function Controls({
  onDecrement,
  onIncrement,
  shuffle,
  onSelect,
  activeGroup,
  switchCharacters,
}) {
  const radioValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <div className={classes.buttons}>
        <Button handleClick={(e) => onDecrement(e.target)}>Prev</Button>
        <Button handleClick={() => shuffle()}>
          <Shuffle />
        </Button>
        <Button handleClick={(e) => onIncrement(e.target)}>Next</Button>
      </div>
      <div className={classes.radioContainer}>
        <fieldset className={classes.radioButtons}>
          {radioValues.map((value) => (
            <RadioInput
              key={value}
              id={value.toString()}
              name={value.toString()}
              value={value}
              checked={activeGroup === value}
              onChange={(e) => onSelect(e)}
            />
          ))}
        </fieldset>
      </div>
      <div className={classes.buttons}>
        <Button handleClick={() => switchCharacters()}>Switch</Button>
      </div>
    </div>
  );
}
