import { FC, useState } from 'react';
import Button from '../../common/Button/index.tsx';
import ModalAddCard from '../ModalAddCard';
import { HiPlus } from 'react-icons/hi';

const CreateTaskField: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex items-center justify-between gap-3 mb-2">
      <Button color="purple" onClick={() => setIsModalOpen(!isModalOpen)}>
        <HiPlus />
        Create a card
      </Button>
      <ModalAddCard setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </div>
  );
};

export default CreateTaskField;
