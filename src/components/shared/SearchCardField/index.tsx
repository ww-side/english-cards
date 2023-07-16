import { ChangeEvent, FC } from 'react';
import SearchInput from '../../common/SearchInput/index.tsx';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.ts';
import { cardsSlice } from '../../../store/reducers/cardsSlice.ts';
import { paginationSlice } from '../../../store/reducers/paginationSlice.ts';

const SearchCardField: FC = () => {
  const { filterValue, filterLabelValue } = useAppSelector(
    state => state.cards
  );
  const { setFilterValue, setFilterLabelValue } = cardsSlice.actions;
  const { setCurrentPage } = paginationSlice.actions;
  const dispatch = useAppDispatch();

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setCurrentPage(1));

    if (name === 'title') {
      dispatch(setFilterValue(value));
    } else if (name === 'label') {
      dispatch(setFilterLabelValue(value));
    }
  };

  return (
    <>
      <SearchInput
        name="title"
        placeholder="Find by title"
        value={filterValue}
        onChange={handleFilterChange}
      />
      <SearchInput
        name="label"
        placeholder="Find by lable"
        value={filterLabelValue}
        onChange={handleFilterChange}
      />
    </>
  );
};

export default SearchCardField;
