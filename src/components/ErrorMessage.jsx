import React from 'react';

export const ErrorMessage = ({ error }) => {
	return (
		<div className='flex absolute top-1/2 right-1/2'>
			<div className='flex absolute top-1/2 right-1/2'>
				<div
					type='button'
					className={
						'inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md'+
						' text-red-700 bg-red-100 border border-red-700 transition ease-in-out duration-150 cursor-not-allowed'
					}
					disabled
				>
					<p>{error}</p>
				</div>
			</div>
		</div>
	);
}