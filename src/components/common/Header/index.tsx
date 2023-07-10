import { FC } from 'react';
import { TbCards } from 'react-icons/tb';

const Header: FC = () => {
  return (
    <div className="flex items-center gap-1 shadow-md p-2 bg-purple-600 text-white text-3xl">
      EngCards <TbCards />
    </div>
  );
};

export default Header;
