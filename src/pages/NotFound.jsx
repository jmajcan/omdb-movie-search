import React from 'react';
import NotFoundImage from '../assets/404-NotFound.png';

export const NotFound = () => {
	return (
		<div className='flex justify-center items-center pt-8 pb-4'>
      <img src={NotFoundImage} alt='Not Found' />
    </div>
	);
}