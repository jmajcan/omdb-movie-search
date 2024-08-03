import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { omdbApiKey } from '../../api/omdb-api-key';
import { createAsyncThunk } from '@reduxjs/toolkit';

const  baseURL = 'https://www.omdbapi.com';

export const fetchMovies = createAsyncThunk('omdb/fetchMovies', async (searchTerm) => {
    try {
      const response = await axios.get(
        `${baseURL}?apikey=${omdbApiKey}&type=movie&s=${searchTerm}`
      );
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const fetchHomeMovie = createAsyncThunk('omdb/fetchHomeMovie', async () => {
	try {
		const response = await axios.get(
			`${baseURL}?apikey=${omdbApiKey}&i=tt21867434&type=movie&Plot=full`
		);
		return response.data;
	} catch (err) {
		return err.message;
	}
}
);

export const fetchSelectedMovies = createAsyncThunk(
  'omdb/fetchSelectedMovies',
  async (id) => {
    const response = await axios.get(
      `${baseURL}?apikey=${omdbApiKey}&i=${id}&type=movie&Plot=full`
    );
    return response.data;
  }
);

const initialState = {
  movies: [],
	homeMovie: {},
	selectedMovie: {},
	status: 'idle' | 'loading' | 'succeeded' | 'failed',
  isLoading: false,
};

export const omdbSlice = createSlice({
	name: 'omdb',
  initialState,
	reducers : {
		resetToDefault: (state) => {
      state.movies = [];
			state.selectedStatus = 'idle';
			state.isLoading = false;
    },
		setRequestStatus: (state) => {
			state.selectedStatus = 'idle';
			state.isLoading = false;
		},
		setMovies: (state, action) => {
			console.log('PAYLOAD',action.payload);
			state.movies.Search = action.payload;
		}
	},
	extraReducers (builder) {
		builder
			.addCase(fetchMovies.pending, (state, action) => {
				state.status = 'loading';
				state.isLoading = true;
			})
			.addCase(fetchMovies.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.isLoading = false;
				state.movies = action.payload;
			})
			.addCase(fetchMovies.rejected, (state, action) => {
				state.status = 'failed';
				state.isLoading = false;
				state.error = action.error.message;
			})
			.addCase(fetchHomeMovie.pending, (state, action) => {
				state.status = 'loading';
				state.isLoading = true;
			})
			.addCase(fetchHomeMovie.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.isLoading = false;
				state.homeMovie = action.payload;
			})
			.addCase(fetchHomeMovie.rejected, (state, action) => {
				state.omdb.status = 'failed';
				state.omdb.isLoading = false;
				state.omdb.error = action.error.message;
			})
			.addCase(fetchSelectedMovies.pending, (state, action) => {
				state.status = 'loading';
				state.isLoading = true;
			})
			.addCase(fetchSelectedMovies.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.isLoading = false;
				state.selectedMovie = action.payload;
			})
			.addCase(fetchSelectedMovies.rejected, (state, action) => {
				state.status = 'failed';
				state.omdb.isLoading = false;
				state.omdb.error = action.error.message;
			})
	}
});

export const { resetToDefault, setRequestStatus, setMovies } = omdbSlice.actions

export const getOMDB = (state) => state.omdb;
export const getMovies = (state) => state.omdb.movies;
export const getHomeMovie = (state) => state.omdb.homeMovie;
export const getSelectedMovie = (state) => state.omdb.selectedMovie;
export const getMoviesStatus = (state) => state.omdb.status;
export const getMoviesError = (state) => state.omdb.error;
export const getIsLoading = (state) => state.omdb.isLoading;

export default omdbSlice.reducer;