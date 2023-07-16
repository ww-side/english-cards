import React, { FC, useState } from 'react';
import CustomModal from '../../common/CustomModal/index.tsx';
import Input from '../../common/Input/index.tsx';
import Button from '../../common/Button/index.tsx';
import { cardsSlice } from '../../../store/reducers/cardsSlice.ts';
import { useAppDispatch } from '../../../hooks/redux.ts';

interface ModalAddCardProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalAddCard: FC<ModalAddCardProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const [title, setTitle] = useState('');
  const [translate, setTranslate] = useState('');
  const [label, setLabel] = useState('');
  const { addCard } = cardsSlice.actions;
  const dispatch = useAppDispatch();

  const handleButton = () => {
    if (title.trim() === '' || translate.trim() === '') return;
    const newCard = {
      title: title.trim(),
      translate: translate.trim(),
      label: label.trim(),
    };
    dispatch(addCard(newCard));

    setTitle('');
    setTranslate('');
    setLabel('');
    setIsModalOpen(false);
  };

  return (
    <CustomModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <div className="flex flex-col gap-8 items-left mb-6 text-white">
        <h2 className="text-2xl">Create a new card</h2>
        <Input
          value={title}
          placeholder="Add a card"
          onChange={e => setTitle(e.target.value)}
        />
        <Input
          value={translate}
          placeholder="Add a translate"
          onChange={e => setTranslate(e.target.value)}
        />
        <h2 className="text-xl">Add a label</h2>
        <Input
          value={label}
          placeholder="Custom label"
          onChange={e => setLabel(e.target.value)}
        />
      </div>
      <Button color="white" onClick={() => handleButton()}>
        Add
      </Button>
    </CustomModal>
  );
};

export default ModalAddCard;
