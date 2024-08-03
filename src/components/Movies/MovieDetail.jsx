import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	getIsLoading,
	getSelectedMovie,
	fetchSelectedMovies,
} from '../../app/features/omdbSlice';
import { useParams } from "react-router-dom";
import { LoadingSpinner } from  '../LoadingSpinner';

export const MovieDetail = () => {
	const { imdbID } = useParams();

	const dispatch = useDispatch();
	const isLoading = useSelector(getIsLoading);
	const selectedMovie = useSelector(getSelectedMovie);

	const noMoviePoster = 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-768x1129.jpg';

	const imdbRating = selectedMovie.imdbRating ? selectedMovie.imdbRating : 'N/A';
	const metacriticScore = selectedMovie.Metascore ? selectedMovie.Metascore : 'N/A';
	const rottentTomatoesScore = selectedMovie.Ratings
		&& selectedMovie.Ratings.length > 1 && selectedMovie.Ratings[1].Value
		? selectedMovie.Ratings[1].Value : 'N/A';

	useEffect(() => {
		dispatch(fetchSelectedMovies(imdbID))
	}, [imdbID, dispatch]);

	return (
		<div className='flex items-center justify-center py-8 h-full'>
			{isLoading  ? <LoadingSpinner /> : (
				<div className='max-w-5xl rounded-lg overflow-hidden shadow-lg bg-secondary border-secondary bordermax-w-xl border' >
					<div className='flex-1 flex justify-center'>
						<img
							className='flex w-full'
							src={selectedMovie.Poster === 'N/A' ? noMoviePoster : selectedMovie.Poster}
							alt={`${selectedMovie.Title} Movie Poster`}
							style={{height: 600, width: 400}}
						/>
						<div className='p-4'>
							<div className='flex-1 flex justify-center'>
								<p className='text-primary text-4xl pb-4 font-semibold text-left'>{selectedMovie.Title}</p>
							</div>
							<div>
								<p className='text-dark text-md font-medium pl-4 pb-4 '>
									{`IMDb Rating: ${imdbRating} | Metascore: ${metacriticScore} | Rotten Tomatoes: ${rottentTomatoesScore}`}
								</p>
							</div>
							<div>
								<p className='text-dark text-xl font-semibold text-left'>Plot</p>
								<p className='text-primary text-base text-left pb-4'>{selectedMovie.Plot ? selectedMovie.Plot : 'N/A'}</p>
							</div>
							<div>
								<p className='text-dark text-xl font-semibold text-left'>Cast</p>
								<p className='text-primary text-base text-left pb-1'>{`Director: ${selectedMovie.Director ? selectedMovie.Director : 'N/A'}`}</p>
								<p className='text-primary text-base text-left pb-1'>{`Writers: ${selectedMovie.Writer ? selectedMovie.Writer : 'N/A'}`}</p>
								<p className='text-primary text-base text-left pb-4'>{`Actors: ${selectedMovie.Actors ? selectedMovie.Actors : 'N/A'}`}</p>
							</div>
							<div>
								<p className='text-dark text-xl font-semibold text-left'>Awards</p>
								<p className='text-primary text-base text-left pb-1'>{`${selectedMovie.Awards ? selectedMovie.Awards : 'N/A'}`}</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}