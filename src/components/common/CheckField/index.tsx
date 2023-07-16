import { FC } from 'react';

interface CheckFieldProps {
  id: string;
  placeholder: string;
}

const CheckField: FC<CheckFieldProps> = ({ id, placeholder }) => {
  return (
    <input
      id={id}
      type="text"
      className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
      placeholder={placeholder}
    />
  );
};

export default CheckField;
