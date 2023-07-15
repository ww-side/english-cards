import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid as id } from 'nanoid';
import { Card } from '../../interfaces/cards.ts';

interface cardsState {
  cards: Card[];
  filterValue: string;
  label: string;
  filterLabelValue: string;
}

const initialState: cardsState = {
  cards: [],
  filterValue: '',
  label: '',
  filterLabelValue: '',
};

const savedState = localStorage.getItem('cardsState');
const persistedState: cardsState = savedState
  ? JSON.parse(savedState)
  : initialState;

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: persistedState,
  reducers: {
    removeCard(state, action: PayloadAction<string>) {
      state.cards = state.cards.filter(card => card.id !== action.payload);
      saveStateToLocalStorage(state);
    },
    addCard(
      state,
      action: PayloadAction<{ title: string; translate: string; label: string }>
    ) {
      const { title, translate, label } = action.payload;
      const isEmptyField = title.trim() === '';
      if (isEmptyField) return;

      const newTask: Card = {
        id: id(),
        title,
        translate,
        label,
      };
      state.cards.unshift(newTask);
      saveStateToLocalStorage(state);
    },
    updateCardPosition(
      state,
      action: PayloadAction<{ id: string; newPosition: number }>
    ) {
      const { id, newPosition } = action.payload;
      const cardIndex = state.cards.findIndex(card => card.id === id);

      if (cardIndex !== -1) {
        const [card] = state.cards.splice(cardIndex, 1);
        state.cards.splice(newPosition, 0, card);
        saveStateToLocalStorage(state);
      }
    },
    setFilterValue(state, action: PayloadAction<string>) {
      state.filterValue = action.payload;
      saveStateToLocalStorage(state);
    },
    setFilterLabelValue(state, action: PayloadAction<string>) {
      state.filterLabelValue = action.payload;
      saveStateToLocalStorage(state);
    },
  },
});

const saveStateToLocalStorage = (state: cardsState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cardsState', serializedState);
  } catch (error) {
    console.error(error);
  }
};

export default cardsSlice.reducer;
