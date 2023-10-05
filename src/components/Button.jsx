import classes from "./Button.module.css";

export default function Button({ children, handleClick }) {
  return (
    <button className={classes.btn} onClick={handleClick}>
      {children}
    </button>
  );
}
