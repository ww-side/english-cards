import React, { FC } from 'react';
import CustomModal from '../../common/CustomModal/index.tsx';
import Button from '../../common/Button/index.tsx';

interface ModalTestResultProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  correctAnswers: number;
  incorrectAnswers: string[];
}

const ModalTestResult: FC<ModalTestResultProps> = ({
  isModalOpen,
  setIsModalOpen,
  correctAnswers,
  incorrectAnswers,
}) => {
  return (
    <CustomModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <h2 className="text-3xl mb-2">Your result</h2>
      <p className="text-lg mb-2">Correct answers: {correctAnswers}</p>
      <div className="mb-5">
        <p className="text-2xl mb-2">Incorrect answers:</p>
        {incorrectAnswers.map(item => (
          <p className="text-lg mb-1">{item}</p>
        ))}
      </div>
      <Button color="white" onClick={() => setIsModalOpen(!setIsModalOpen)}>
        Got it
      </Button>
    </CustomModal>
  );
};

export default ModalTestResult;
