import React from 'react';

export const Button = ({ label, alertString }) => {
	return (
		<button
			className='bg-primary text-tertiary rounded-lg px-4 py-1 hover:bg-hover active:bg-clicked'
			onClick={() => alert(alertString)}
		>
			{label}
		</button>
	);
}