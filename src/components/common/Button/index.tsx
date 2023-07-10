import { FC, ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  color: string;
}

enum Colors {
  white = 'bg-white hover:bg-gray-300 text-black',
  purple = 'bg-purple-600 hover:bg-purple-700 text-white',
}

const Button: FC<ButtonProps> = ({ onClick, children, color }) => {
  const WHITE_COLOR = 'white';
  const PURPLE_COLOR = 'purple';

  const getColor = (color: string) => {
    switch (color) {
      case WHITE_COLOR:
        return Colors.white;
      case PURPLE_COLOR:
        return Colors.purple;
      default:
        return Colors.white;
    }
  };

  return (
    <button
      className={`flex items-center justify-center gap-1 font-normal ${getColor(
        color
      )} py-3 px-5 rounded-xl shadow-2xl transition duration-300 ease-in-out`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
