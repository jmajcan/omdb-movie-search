import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';

export const Header = () => {
	const [ searchTerm, setSearchTerm ] = useState('');

	const submitSearch = (e) => {
		e.preventDefault();

		console.log('e.target.value', e.target.value);

		if (!e.target.value || e.target.value === '' || Number(e.target.value) === 0) {
			return 
		} else {
			setSearchTerm(e.target.value);
		}

		console.log('Search for: ', e.target.value);
	}

	console.log('searchTerm', searchTerm);

	return (
		<div className='flex items-center bg-primary h-24 py-0 px-10'>
			<div className='text-tertiary justify-start text-xl font-semibold'>
				<Link to='/'>OMDb Movie Search</Link>
			</div>
			<div className='w-6/12 flex justify-end'>
				<SearchBar />
			</div>
		</div>
	);
}