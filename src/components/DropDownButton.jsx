import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	getMovies,
	setMovies,
} from '../app/features/omdbSlice';

export const DropDownButton = () => {
	const dispatch = useDispatch();
	const movies = useSelector(getMovies);
	const [ toggle, setToggle ] = useState(false);

	const sortMovies = (sortOption) => {
		const newMoviesSearch = [...movies.Search];

		switch (sortOption) {
			case 'TITLE-A':
				newMoviesSearch.sort((a, b) => a.Title.localeCompare(b.Title));
				dispatch(setMovies(newMoviesSearch));
				break;
			case 'TITLE-D':
				newMoviesSearch.sort((a, b) => b.Title.localeCompare(a.Title));
				dispatch(setMovies(newMoviesSearch));
				break;
			case 'YEAR-A':
				newMoviesSearch.sort((a, b) => a.Year.localeCompare(b.Year));
				dispatch(setMovies(newMoviesSearch));
				break;
			case 'YEAR-D':
				newMoviesSearch.sort((a, b) => b.Year.localeCompare(a.Year));
				dispatch(setMovies(newMoviesSearch));
				break;
			default:
				newMoviesSearch.sort((a, b) => a.Title.localeCompare(b.Title));
				dispatch(setMovies(newMoviesSearch));
				break;
		}
	}

	const handleClick = (e) => {
		e.preventDefault();
		setToggle(!toggle);
	}

	return (
		<div className='relative inline-block text-left'>
	<div>
		<button
			type='button'
			className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
			id='menu-button'
			aria-expanded={toggle}
			aria-haspopup={toggle}
			onClick={(e) => handleClick(e)}
		>
			Sort
			<svg className='-mr-1 h-5 w-5 text-gray-400' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
				<path
					fillRule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
					clipRule='evenodd'
				/>
			</svg>
		</button>
	</div>
	{ toggle ?
		<div
			className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
			role='menu'
			aria-orientation='vertical'
			aria-labelledby='menu-button'
			tabIndex='-1'
		>
		<div className='py-1' role='none'>
			<button className='block px-4 py-2 text-sm text-gray-700' id='menu-item-0' onClick={() => sortMovies('TITLE-A')}>
				Ascending Title
			</button>
			<button className='block px-4 py-2 text-sm text-gray-700' id='menu-item-0' onClick={() => sortMovies('TITLE-D')}>
				Descending Title
			</button>
			<button className='block px-4 py-2 text-sm text-gray-700' id='menu-item-1' onClick={() => sortMovies('YEAR-A')}>
				Ascending Release
			</button>
			<button className='block px-4 py-2 text-sm text-gray-700' id='menu-item-1' onClick={() => sortMovies('YEAR-D')}>
				Descending Release
			</button>
		</div>
	</div>
	: null}
</div>

	);
}