import { FC } from 'react';
import { useAppSelector } from '../../../hooks/redux.ts';
import CardListItem from '../CardListItem';
import DragDropContext from '../DragDropContext';

const CardList: FC = () => {
  const { cards } = useAppSelector(state => state.cards);
  const { filterValue } = useAppSelector(state => state.cards);

  const filteredTasks = cards.filter(card =>
    card.title.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <DragDropContext>
      {filteredTasks.length > 0 ? (
        filteredTasks.map((card, index) => (
          <CardListItem key={card.id} card={card} index={index} />
        ))
      ) : (
        <p className="text-xl">No cards found</p>
      )}
    </DragDropContext>
  );
};

export default CardList;
