import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import portfolioCardReducer from "../features/portfolio/portfolioCardSlice";

export const store = configureStore({
  reducer: {
    portfolioCard: portfolioCardReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
