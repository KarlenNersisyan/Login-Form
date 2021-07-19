import React from 'react';

export default function Button({ onClick, text,className }) {
  return (
    <>
      <button type="submit" onClick={onClick} className={className}>
        {text}
      </button>
    </>
  );
}
