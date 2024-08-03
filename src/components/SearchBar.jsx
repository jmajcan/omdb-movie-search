import React, { useState } from 'react';
import { SearchIcon } from './SearchIcon';
import { useDispatch } from 'react-redux';
import {
	fetchMovies,
} from '../app/features/omdbSlice';

export const SearchBar = () => {
	const [ searchTerm, setSearchTerm ] = useState('');
	const [ validSearch, setValidSearch ] = useState(true);
	const dispatch = useDispatch();

	const handleSearch = (e) => {
		e.preventDefault();

		if (Number(searchTerm) === 0) {
			setValidSearch(false);
		} else {
			setValidSearch(true);
			dispatch(fetchMovies(searchTerm));
		}
		setSearchTerm('');
	}

	return (
		<div>
			<form
				className='w-[500px] relative'
				onSubmit={(e) => handleSearch(e)}
			>
				<div className='relative'>
					<input
						className='w-full p-4 rounded-full focus-visible:outline-secondary'
						type='search'
						placeholder='Search Movies'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<button
						type='submit'
						className='absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-dark rounded-full'
					>
						<SearchIcon />
					</button>
				</div>
				{!validSearch ? (
					<div className='bg-red-100 border border-red-400 text-red-700 rounded relative mt-2' role='alert'>
						<span className='block sm:inline'>An error happened, please try again</span>
						<span className='absolute top-0 bottom-0 right-0'>
							<svg
								className='fill-current h-6 w-6 text-red-500'
								role='button' xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								onClick={() => setValidSearch(true)}
							>
								<path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z'/>
							</svg>
						</span>
					</div>
				) : null}
			</form>
		</div>
	);
}