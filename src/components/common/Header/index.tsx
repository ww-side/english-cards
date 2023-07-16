import { FC, useState } from 'react';
import ModalMenu from '../../shared/ModalMenu/index.tsx';
import { TbCards } from 'react-icons/tb';
import { HiOutlineMenu } from 'react-icons/hi';

const Header: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex items-center justify-between gap-1 shadow-md p-2 bg-purple-600 text-white text-3xl">
      <span className="flex items-center">
        EngCards <TbCards />
      </span>
      <span
        className="cursor-pointer hover:opacity-50 transition duration-200"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <HiOutlineMenu size={40} />
      </span>
      <ModalMenu isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default Header;
