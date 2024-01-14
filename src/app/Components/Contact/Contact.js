import { useState } from 'react';
import ButtonSolid from '../Buttons/ButtonSolid';

const Contact = () => {
	const [data, setData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [btnMsg, setBtnMsg] = useState('');
	const [responseMsg, setResponseMsg] = useState('');

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const sendEmail = async (e) => {
		e.preventDefault();
		setBtnMsg('Please wait...');
		const response = await fetch('/api/send', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if (response.status === 200) {
			setData({ name: '', email: '', message: '' });
			setResponseMsg('Email successfully sent!');
		} else {
			setResponseMsg('Something went wrong.');
		}
		setBtnMsg('');
	};

	return (
		<section id='contact'>
			<div className='flex-1 divide-y divide-[var(--brand-2)] space-y-2'>
				<h1 className='leading-tight'>
					Get in <span className='text-[var(--accent-1)]'>touch</span>.
				</h1>
				<form onSubmit={sendEmail} className='flex flex-col pt-3 w-full'>
					<div className='flex flex-col md:flex-row w-full gap-4'>
						<div className='w-full flex flex-col'>
							<label required>Name</label>
							<input
								type='name'
								name='name'
								placeholder='John Doe'
								value={data.name}
								className="text-md md:text-lg"
								onChange={handleChange}
							/>
						</div>
						<div className='w-full flex flex-col'>
							<label>Email</label>
							<input
								value={data.email}
								onChange={handleChange}
								required
								className="text-md md:text-lg"
								name='email'
								type='email'
								placeholder='jdoe@gmail.com'
							/>
						</div>
					</div>
					<div className='w-full flex flex-col'>
						<label>Message</label>
						<textarea
							required
							name='message'
							className="text-md md:text-lg"
							value={data.message}
							onChange={handleChange}
							placeholder='I would like to talk about my new website ideas!'
						/>
					</div>
					<div className='flex items-center gap-3'>
						<ButtonSolid type='submit'>
							{btnMsg ? btnMsg : 'Submit'}
						</ButtonSolid>
						{responseMsg && <p>{responseMsg}</p>}
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
