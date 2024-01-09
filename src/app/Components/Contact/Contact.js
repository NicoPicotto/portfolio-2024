import { useState } from 'react';
import ButtonSolid from '../Buttons/ButtonSolid';
import { EmailTemplate } from '../EmailTemplate/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const Contact = () => {
	const [data, setData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [responseMsg, setResponseMsg] = useState('');

	const resend = new Resend('re_F9HpHcZt_A9APPeUWthem6TFfZ5y2nrD4');

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const sendEmail = async (e) => {
		e.preventDefault();
		try {
			const { dataEmail } = await resend.emails.send({
				from: 'no-reply@nicopicotto.dev',
				to: 'picottonico@gmail.com',
				subject: 'New message from your website!',
				react: EmailTemplate({
					name: data.name,
					email: data.email,
					message: data.message,
				}),
			});
			setResponseMsg('Message successfully sent!');
			return new NextResponse(dataEmail);
		} catch (error) {
			setResponseMsg('Something went wrong');
			return new NextResponse(error);
		}
	};

	return (
		<section id='contact' className='pb-20 mb-20'>
			<div className='flex-1 divide-y divide-[var(--brand-2)] space-y-2'>
				<h1>
					Get in <span className='text-[var(--accent-1)]'>touch</span>.
				</h1>
				<form onSubmit={sendEmail} className='flex flex-col pt-3 w-full'>
					<div className='flex w-full gap-4'>
						<div className='w-full flex flex-col'>
							<label required>Name</label>
							<input
								type='name'
								name='name'
								placeholder='John Doe'
								value={data.name}
								onChange={handleChange}
							/>
						</div>
						<div className='w-full flex flex-col'>
							<label>Email</label>
							<input
								value={data.email}
								onChange={handleChange}
								required
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
							value={data.message}
							onChange={handleChange}
							placeholder='I would like to talk about my new website ideas!'
						/>
					</div>
					<div className='flex items-center gap-3'>
						<ButtonSolid type='submit'>Submit</ButtonSolid>
						{responseMsg && <p>{responseMsg}</p>}
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
