import React, { FC, useEffect, useState } from 'react';
import Modal from 'react-modal';
import 'animate.css';

Modal.setAppElement('#root');

interface CustomModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const CustomModal: FC<CustomModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  children,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isModalOpen]);

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 500);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      className={`bg-purple-600 h-max w-5/12 max-lg:w-8/12 max-md:w-full
    p-20 outline-none shadow-sm rounded-b-xl ${
      isClosing
        ? 'animate__animated animate__fadeOutUp'
        : 'animate__animated animate__fadeInDown'
    }`}
      overlayClassName="fixed top-0 left-0 right-0 bottom-0 flex justify-center"
    >
      <span
        className="cursor-pointer absolute top-4 right-5 text-2xl text-white font-thin"
        onClick={handleCloseModal}
      >
        X
      </span>
      {children}
    </Modal>
  );
};

export default CustomModal;
