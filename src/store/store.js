import { configureStore } from "@reduxjs/toolkit";
import filmsSlice from "./reducers/films/reducer";

const store = configureStore({
	reducer: {
		films: filmsSlice,
	},
});

export default store;