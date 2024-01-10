import * as React from 'react';

export const EmailTemplate = ({ name, email, message }) => (
	<div className='bg-gray-100 p-6 rounded-lg shadow-md'>
		<h1 className='text-gray-800 text-xl font-semibold mb-4 border-b-2 border-gray-200 pb-2'>
			New email from <span className='text-blue-600'>{name}</span> -{' '}
			<span className='text-blue-600'>{email}</span>
		</h1>
		<p className='text-gray-600'>{message}</p>
	</div>
);
