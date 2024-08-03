import React, { useEffect } from 'react';
import {
	resetToDefault,
} from '../app/features/omdbSlice';
import { useDispatch } from 'react-redux';
import { SearchBar } from './SearchBar';
import { Link } from "react-router-dom";

export const Header = () => {
	const dispatch = useDispatch();

	const handleOnClick =() => {
		dispatch(resetToDefault());
	};

	return (
		<div className='flex bg-primary justify-between items-center h-24 py-0 px-10'>
			<div className='text-white text-xl justify-start font-semibold'>
				<Link to='/' onClick={handleOnClick}>OMDb Movie Search</Link>
			</div>
			<div className=''>
				<SearchBar />
			</div>
		</div>
	);
}