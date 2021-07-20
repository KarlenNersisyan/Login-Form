import React from 'react';
import '../Input/Input.css'

export default function Input({
  type,
  name,
  onChange,
  className,
  placeholder,
  value='',
  checked,
  required,

}) {
  return (
    <>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value ? value : ''}
        className={className}
        name={name}
        checked={checked}
        required={required}
      />
    </>
  );
}
