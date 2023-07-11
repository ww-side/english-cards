import { FC, useState } from 'react';
import CardListItem from '../CardListItem';
import DragDropContext from '../DragDropContext';
import Pagination from '../Pagination';
import { useAppSelector } from '../../../hooks/redux.ts';

const CardList: FC = () => {
  const { cards } = useAppSelector(state => state.cards);
  const { filterValue } = useAppSelector(state => state.cards);

  const ITEMS_PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const filteredTasks = cards.filter(card =>
    card.title.toLowerCase().includes(filterValue.toLowerCase())
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedTasks = filteredTasks.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredTasks.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <DragDropContext>
      {paginatedTasks.length > 0 ? (
        <>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
          {paginatedTasks.map((card, index) => (
            <CardListItem key={card.id} card={card} index={index} />
          ))}
        </>
      ) : (
        <p className="text-xl">No cards found</p>
      )}
    </DragDropContext>
  );
};

export default CardList;
