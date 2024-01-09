import * as React from 'react';

export const EmailTemplate = ({ name, email, message }) => (
	<div>
		<h1>
			New email from {name} - {email}
		</h1>
		<p>{message}</p>
	</div>
);
