import React, { FC } from 'react';
import CustomModal from '../../common/CustomModal/index.tsx';
import { Link } from 'react-router-dom';
import { data } from './data.tsx';

interface ModalMenuProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalMenu: FC<ModalMenuProps> = ({ isModalOpen, setIsModalOpen }) => {
  const handleCloseMenu = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <CustomModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <div className="flex flex-col items-center">
        <h2 className="text-4xl mb-3">Menu</h2>
        <div className="flex flex-col gap-4 text-2xl w-min">
          {data.map(item => (
            <Link
              key={item.id}
              to={item.route}
              className={item.styles}
              onClick={handleCloseMenu}
            >
              {item.icon}
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </CustomModal>
  );
};

export default ModalMenu;
