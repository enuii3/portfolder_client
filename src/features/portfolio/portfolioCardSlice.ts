import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";

export const apiUrlPortfolios = `${process.env.REACT_APP_API_URL}/api/portfolios/`;

const initialState = {
  portfolios: [
    {
      id: 0,
      title: "",
      description: "",
      image: "",
      github: "",
      user: "",
    },
  ],
};

export const fetchAsyncGetPortfolios = createAsyncThunk(
  "portfolios/get",
  async () => {
    const res = await axios.get(apiUrlPortfolios);
    return res.data;
  }
);

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGetPortfolios.fulfilled, (state, action) => {
      return {
        ...state,
        portfolios: action.payload,
      };
    });
  },
});

export const selectPortfolios = (state: RootState) =>
  state.portfolioCard.portfolios;
export default portfolioSlice.reducer;
