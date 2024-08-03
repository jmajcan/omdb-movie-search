import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchHomeMovie,
	getMoviesStatus,
	getMoviesError,
	getHomeMovie,
} from '../../app/features/omdbSlice';
import { LoadingSpinner } from  '../LoadingSpinner';
import { ErrorMessage } from '../ErrorMessage';

export const HomeMovieCard = () => {
	const dispatch = useDispatch();
	const status = useSelector(getMoviesStatus);
	const error = useSelector(getMoviesError);
	const homeMovie = useSelector(getHomeMovie);

	useEffect(() => {
		if (status === 'idle') {
				dispatch(fetchHomeMovie());
		}
	}, [status, dispatch]);

	const renderContent = useMemo(() => {
		switch (status) {
			case 'loading':
				return (
					<LoadingSpinner />
				);
			case 'succeeded':
				return (
					<div className='max-w-4xl rounded-lg overflow-hidden shadow-lg bg-secondary border-secondary bordermax-w-xl border' >
						<div className='flex-1 flex justify-center'>
							<img className='w-full border border-black' src={homeMovie.Poster} alt='Black Berry Movie Poster' style={{height: '60%', width: '60%'}}/>
							<div className='p-4'>
								<div className='flex-1 flex justify-center'>
									<p className='text-primary text-4xl pb-4 font-semibold text-left'>{homeMovie.Title}</p>
								</div>
								<div>
									<p className='text-dark text-md font-medium pl-4 pb-4 '>
										{`IMDb Rating: ${homeMovie.imdbRating} | Metascore: ${homeMovie.Metascore} | Rotten Tomatoes: ${homeMovie.Ratings[1].Value}`}
									</p>
								</div>
								<div>
									<p className='text-dark text-xl font-semibold text-left'>Plot</p>
									<p className='text-primary text-base text-left pb-4'>{homeMovie.Plot}</p>
								</div>
								<div>
									<p className='text-dark text-xl font-semibold text-left'>Cast</p>
									<p className='text-primary text-base text-left pb-1'>{`Director: ${homeMovie.Director}`}</p>
									<p className='text-primary text-base text-left pb-1'>{`Writers: ${homeMovie.Writer}`}</p>
									<p className='text-primary text-base text-left pb-4'>{`Actors: ${homeMovie.Actors}`}</p>
								</div>
								<div>
									<p className='text-dark text-xl font-semibold text-left'>Awards</p>
									<p className='text-primary text-base text-left pb-1'>{`${homeMovie.Awards}`}</p>
								</div>
							</div>
						</div>
					</div>
				);
			case 'failed':
					return <ErrorMessage error={error} />;
			default:
				return;
		}
	}, [error, homeMovie, status]);

	return (
		<div>
			{renderContent}
		</div>
	);
}