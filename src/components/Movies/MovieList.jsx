import React from 'react';
import { useSelector } from 'react-redux';
import {
	getIsLoading,
} from '../../app/features/omdbSlice';
import { LoadingSpinner } from  '../LoadingSpinner';
import { MovieCard } from './MovieCard';
import { DropDownButton } from '../DropDownButton';
import { Button } from '../Button';

export const MovieList = ({movies}) => {
	const isLoading = useSelector(getIsLoading);

	return (
		<div>
			{isLoading ? <LoadingSpinner /> :
				<div className='my-5 mx-0'>
					<div className='flex justify-between'>
						<p className='text-4xl font-extrabold pb-4'>Movies</p>
						<DropDownButton />
					</div>
					<div className='grid grid-cols-4 gap-4'>
						{movies.map(
							(movie, index) => <MovieCard key={`${movie.imdbID}.${index}`} movie={movie} />
						)}
						<div className='flex justify-center items-center pb-4'>
							<Button label={'Load More'} alertString={'This would load more movies'} />
						</div>
					</div>
				</div>
			}
		</div>
	);
}