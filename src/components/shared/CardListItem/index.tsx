import { FC, useState } from 'react';
import { cardsSlice } from '../../../store/reducers/cardsSlice.ts';
import { useAppDispatch } from '../../../hooks/redux.ts';
import IconBtn from '../../common/IconBtn';
import { TfiClose } from 'react-icons/tfi';
import { DragSourceMonitor, useDrag, useDrop } from 'react-dnd';

interface CardListItemProps {
  card: {
    id: string;
    title: string;
    translate: string;
    label: string;
  };
  index: number;
}

const CardListItem: FC<CardListItemProps> = ({ card, index }) => {
  const { removeCard, updateCardPosition } = cardsSlice.actions;
  const dispatch = useAppDispatch();
  const [showTranslate, setShowTranslate] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleRemoveTask = () => {
    dispatch(removeCard(card.id));
  };

  const handleTitleClick = () => {
    setShowTranslate(prevState => !prevState);
    setIsFlipped(!isFlipped);
  };

  const deleteIcon = (
    <TfiClose
      size={22}
      className="text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300 cursor-pointer"
    />
  );

  const [{ isDragging }, drag] = useDrag<
    { type: string; id: string; index: number },
    unknown,
    { isDragging: boolean }
  >({
    type: 'CARD',
    item: { type: 'CARD', id: card.id, index },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'CARD',
    drop: (item: { type: string; id: string; index: number }) => {
      dispatch(updateCardPosition({ id: item.id, newPosition: index }));
    },
    collect: monitor => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
  });

  const isActive = canDrop && isOver;

  return (
    <div
      ref={node => drag(drop(node))}
      className={`cursor-pointer flex items-center justify-between shadow-md bg-white mb-3 rounded-2xl p-5 w-3/12 max-lg:w-5/12 max-md:w-7/12 max-sm:w-9/12 ${
        isDragging ? 'opacity-50' : ''
      } ${isActive ? 'bg-green-200' : ''}`}
      onClick={handleTitleClick}
    >
      <div className={`flex flex-col break-all mx-3 font-normal`}>
        <span
          className={`animate__animated ${
            isFlipped ? 'animate__flipInX' : 'animate__flipInY'
          }`}
        >
          {showTranslate ? <>{card.translate}</> : <>{card.title}</>}
        </span>
        <span className="text-gray-700 opacity-50 text-sm">{card.label}</span>
      </div>
      <IconBtn icon={deleteIcon} onClick={handleRemoveTask} />
    </div>
  );
};

export default CardListItem;
