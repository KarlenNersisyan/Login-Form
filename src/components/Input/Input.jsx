export default function Input({ type, onChange, id, placeholder, value }) {
    return (
      <>
        <input
          type={type}
          onChange={onChange}
          id={id}
          placeholder={placeholder}
          value={value}
        />
      </>
    );
  }