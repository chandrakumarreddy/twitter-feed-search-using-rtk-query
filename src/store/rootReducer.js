import { combineReducers } from "@reduxjs/toolkit";

import finder from "../features/Finder/finderSlice";
import numberOfResults from "../features/numberOfResults/numberOfResults";

export default combineReducers({
  finder,
  numberOfResults
});
