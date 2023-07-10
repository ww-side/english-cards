import { ChangeEventHandler, FC } from 'react';
import { nanoid as id } from '@reduxjs/toolkit';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<InputProps> = ({ placeholder, value, onChange }) => {
  return (
    <input
      id={id()}
      className="bg-transparent w-11/12 outline-none border-b-white border-b px-3 py-1 max-sm:w-9/12 placeholder-white"
      placeholder={placeholder}
      type="text"
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
