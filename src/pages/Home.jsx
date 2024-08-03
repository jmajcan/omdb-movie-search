import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HomeMovieCard } from '../components/Movies/HomeMovieCard';
import { MovieList } from '../components/Movies/MovieList';
import {
	getMovies,
	resetToDefault
} from '../app/features/omdbSlice';

export const Home = () => {
	const dispatch = useDispatch();
	const movies = useSelector(getMovies);

	useEffect(() => {
		dispatch(resetToDefault());
	}, [dispatch]);

	return (
		<div className='flex items-center justify-center py-8 h-full'>
			{movies.Search && movies?.Search.length > 0
				? <MovieList movies={movies.Search} />
				: (<HomeMovieCard />)
			}
		</div>
	);
}
