export default function Button({ onClick, text}) {
  return (
    <>
      <button type="submit" onClick={onClick}>
            {text}
      </button>
    </>
  );
}
