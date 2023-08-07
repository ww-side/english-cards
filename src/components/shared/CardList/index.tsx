import { FC, useEffect } from 'react';
import CardListItem from '../CardListItem/index.tsx';
import DragDropContext from '../DragDropContext/index.tsx';
import Pagination from '../Pagination/index.tsx';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.ts';
import { paginationSlice } from '../../../store/reducers/paginationSlice.ts';

const CardList: FC = () => {
  const { currentPage, itemsPerPage } = useAppSelector(
    state => state.pagination
  );
  const { filterValue, filterLabelValue, cards } = useAppSelector(
    state => state.cards
  );
  const { setCurrentPage } = paginationSlice.actions;
  const dispatch = useAppDispatch();

  const filteredTasks = cards.filter(
    card =>
      card.title.toLowerCase().includes(filterValue.toLowerCase()) &&
      card.label.toLowerCase().includes(filterLabelValue.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedTasks = filteredTasks.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredTasks.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
  };

  useEffect(() => {
    if (filteredTasks.length > 0 && currentPage > totalPages) {
      const newCurrentPage = totalPages > 0 ? totalPages : 1;
      dispatch(setCurrentPage(newCurrentPage));
    }
  }, [filteredTasks.length, currentPage, totalPages, dispatch, setCurrentPage]);

  return (
    <DragDropContext>
      {filteredTasks.length > 0 ? (
        <>
          <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
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
