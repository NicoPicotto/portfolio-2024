import React from 'react';
import ButtonSolid from '../Buttons/ButtonSolid';

const Contact = () => {
	return (
		<section id='contact' className='pb-20 mb-20'>
			<div className='flex-1 divide-y divide-[var(--brand-2)] space-y-2'>
				<h1>
					Get in <span className='text-[var(--accent-1)]'>touch</span>.
				</h1>
				<form className='flex flex-col pt-3 w-full'>
					<div className='flex w-full gap-4'>
						<div className='w-full flex flex-col'>
							<label>Name</label>
							<input type='text' placeholder='John Doe' />
						</div>
						<div className='w-full flex flex-col'>
							<label>Email</label>
							<input placeholder='jdoe@gmail.com' />
						</div>
					</div>
					<div className='w-full flex flex-col'>
						<label>Message</label>
						<textarea placeholder="I would like to talk about my new website ideas!"/>
					</div>
					<div>
						<ButtonSolid>Submit</ButtonSolid>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
