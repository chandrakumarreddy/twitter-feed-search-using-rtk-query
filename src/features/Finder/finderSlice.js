import { createAsyncThunk, createSlice,current } from "@reduxjs/toolkit";
import { findTweets } from "./findTweets";

const FETCH_TWEETS = "FETCH_TWEETS";
const INITIAL_STATE = { tweets: [] };

export const fetchTweets = createAsyncThunk(
  FETCH_TWEETS,
  async (params, thunkAPI) =>
      await findTweets(params.searchValue, params.numberOfResults)
);

const finderSlice = createSlice({
  name: "finder",
  initialState: INITIAL_STATE,
  reducers: {
    addTweets(state, action) {
      state.tweets = action.payload;
    }
  },
  extraReducers: {
    [fetchTweets.fulfilled]: (state, { payload }) => {
      state.tweets = payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchTweets.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchTweets.rejected]: (state, { payload }) => {
      current(state)
      state.isLoading = false;
      state.error = payload;
    }
  }
});

export const {
  addTweets,
  loadingTweets,
  loadingTweetsSuccess,
  loadingTweetsFailed
} = finderSlice.actions;

// export const fetchTweets = (searchValue, numberOfTWeets) => async (
//   dispatch
// ) => {
//   try {
//     dispatch(loadingTweets(true));
//     const tweets = await findTweets(searchValue, numberOfTWeets);
//     dispatch(loadingTweetsSuccess(tweets));
//   } catch (error) {
//     dispatch(loadingTweetsFailed(error));
//   }
// };

export default finderSlice.reducer;
