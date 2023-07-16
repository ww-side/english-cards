import { ChangeEventHandler, FC } from 'react';
import { nanoid as id } from '@reduxjs/toolkit';

interface SearchInputProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchInput: FC<SearchInputProps> = ({
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      id={id()}
      name={name}
      className="mb-4 bg-transparent outline-none rounded-2xl
      border-purple-400 border px-5 py-3 w-5/12 max-lg:w-7/12
      max-md:w-9/12 max-sm:w-10/12"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchInput;
