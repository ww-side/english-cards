import { ChangeEvent, FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.ts';
import { cardsSlice } from '../../../store/reducers/cardsSlice.ts';
import { nanoid as id } from '@reduxjs/toolkit';

const SearchCardField: FC = () => {
  const { setFilterValue, setFilterLabelValue } = cardsSlice.actions;
  const { filterValue, filterLabelValue } = useAppSelector(
    state => state.cards
  );
  const dispatch = useAppDispatch();

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'title') {
      dispatch(setFilterValue(value));
    } else if (name === 'label') {
      dispatch(setFilterLabelValue(value));
    }
  };

  return (
    <>
      <input
        id={id()}
        name="title"
        className="mb-4 bg-transparent outline-none rounded-2xl border-purple-400 border px-5 py-3 w-5/12 max-lg:w-7/12 max-md:w-9/12 max-sm:w-10/12"
        type="text"
        placeholder="Find by title"
        value={filterValue}
        onChange={handleFilterChange}
      />
      <input
        id={id()}
        name="label"
        className="mb-4 bg-transparent outline-none rounded-2xl border-purple-400 border px-5 py-3 w-5/12 max-lg:w-7/12 max-md:w-9/12 max-sm:w-10/12"
        type="text"
        placeholder="Find by label"
        value={filterLabelValue}
        onChange={handleFilterChange}
      />
    </>
  );
};

export default SearchCardField;
