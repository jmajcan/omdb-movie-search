import React from 'react';
import { Link } from "react-router-dom";

export const MovieCard = ({movie}) => {
	const noMoviePoster = 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-768x1129.jpg';

	return (
		<Link to={`/movie/${movie.imdbID}`}>
			<div className='max-w-sm rounded-lg overflow-hidden shadow-lg bg-secondary border-secondary border'>
				<div className='flex items-center justify-center my-4'>
					<img
						className='w-full border border-black'
						src={movie.Poster === 'N/A' ? noMoviePoster : movie.Poster}
						alt='Black Berry Movie Poster'
						style={{height: 360, width: 240}}
					/>
				</div>
				<div className='py-2'>
					<p className='text-dark text-lg font-medium'>{movie.Year}</p>
					<div className='font-bold text-l text-dark pb-2'>{movie.Title}</div>
				</div>
			</div>
		</Link>
	);
}