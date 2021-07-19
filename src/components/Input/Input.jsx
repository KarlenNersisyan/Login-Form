import React from 'react';

export default function Input({ type,name, onChange,className, placeholder, value = '' }) {
  return (
    <>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value ? value : ''}
        className={className}
        name={name}
        required
      />
    </>
  );
}
