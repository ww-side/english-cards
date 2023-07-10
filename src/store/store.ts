import {combineReducers, configureStore} from "@reduxjs/toolkit";
import cardsReducer from './reducers/cardsSlice.ts'

const rootReducer = combineReducers({
   cards: cardsReducer,
});

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer,
   });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
