'use client';
import React, { useState } from 'react';
import ButtonLink from '../Buttons/ButtonLink';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header
			className={`${
				isOpen
					? 'bg-[var(--brand-2)] relative'
					: 'bg-[var(--background)] relative'
			} flex justify-center sticky top-0 z-10`}
		>
			<div className='flex flex-col max-w-screen-lg md:flex-row justify-between w-full md:py-8 md:px-auto py-6 px-6'>
				<div className='flex justify-between md:w-fit w-full'>
					<ButtonLink targetId='hero'>
						{' '}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='w-4 h-4 mr-2'
						>
							<path
								fillRule='evenodd'
								d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
								clipRule='evenodd'
							/>
						</svg>
						Nico Picotto
					</ButtonLink>
					<div className='flex md:hidden'>
						<button
							onClick={() => setIsOpen(!isOpen)}
							className='md:hidden'
							aria-expanded={isOpen}
						>
							<svg className='w-6 h-6' viewBox='0 0 20 20' fill='currentColor'>
								{isOpen ? (
									<path
										fillRule='evenodd'
										d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
										clipRule='evenodd'
									/>
								) : (
									<path
										fillRule='evenodd'
										d='M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z'
										clipRule='evenodd'
									/>
								)}
							</svg>
						</button>
					</div>
				</div>

				<div
					className={`${
						isOpen ? 'flex' : 'hidden'
					}  md:static absolute top-full left-0 right-0 md:bg-transparent bg-[var(--brand-2)] px-6 md:pb-0 pb-6 flex-col md:flex md:flex-row md:items-center md:justify-end md:w-full md:space-x-8 md:space-y-0 space-y-5 md:p-0 z-20`}
				>
					<ButtonLink targetId='skills'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='w-4 h-4 mr-2'
						>
							<path
								fillRule='evenodd'
								d='M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z'
								clipRule='evenodd'
							/>
							<path d='m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z' />
							<path
								fillRule='evenodd'
								d='m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z'
								clipRule='evenodd'
							/>
						</svg>
						Tech Skills
					</ButtonLink>
					<ButtonLink targetId='projects'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='w-4 h-4 mr-2'
						>
							<path d='M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z' />
						</svg>
						Projects
					</ButtonLink>
					<ButtonLink targetId='contact'>
						{' '}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='w-4 h-4 mr-2'
						>
							<path d='M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z' />
							<path d='M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z' />
						</svg>
						Contact
					</ButtonLink>
					<div className='h-full border border-[var(--brand-1)] md:border-[var(--brand-2)]'></div>
					<div className='flex gap-4'>
						<a href='https://github.com/NicoPicotto' target='_blank'>
							<FaGithub />
						</a>
						<a href='https://linkedin.com/in/nicolaspicotto/' target='_blank'>
							<FaLinkedin />
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
