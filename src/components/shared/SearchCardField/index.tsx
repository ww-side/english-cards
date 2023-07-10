import { ChangeEvent, FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.ts';
import { cardsSlice } from '../../../store/reducers/cardsSlice.ts';
import { nanoid as id } from '@reduxjs/toolkit';

const SearchCardField: FC = () => {
  const { setFilterValue } = cardsSlice.actions;
  const { filterValue } = useAppSelector(state => state.cards);
  const dispatch = useAppDispatch();

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilterValue(e.target.value));
  };

  return (
    <input
      id={id()}
      className="mb-4 bg-transparent outline-none rounded-2xl border-purple-400 border px-5 py-3 w-5/12 max-lg:w-7/12 max-md:w-9/12 max-sm:w-10/12"
      type="text"
      placeholder="Find a card"
      value={filterValue}
      onChange={handleFilterChange}
    />
  );
};

export default SearchCardField;
