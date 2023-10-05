export default function RadioInput({ id, name, value, checked, onChange }) {
  return (
    <div>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
}
