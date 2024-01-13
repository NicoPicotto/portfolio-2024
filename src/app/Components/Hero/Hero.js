import Image from 'next/image';
import ButtonOutline from '../Buttons/ButtonOutline';
import ButtonSolid from '../Buttons/ButtonSolid';

const Hero = () => {
	return (
		<section className='justify-between' id='hero'>
			<div className='flex-1 max-w-xl'>
				<h1 className='mb-3 leading-tight'>
					Hey there!{' '}
					<span className='text-[var(--accent-1)]'>I&apos;m Nico</span>.
				</h1>
				<p className='text-[var(--neutral)] mb-7'>
					Web developer, graphic designer and passionate about creating
					<span className='font-bold'> powerful</span>,{' '}
					<span className='font-bold'> smooth</span> and{' '}
					<span className='font-bold'> practical</span> web and mobile products.
				</p>
				<div className='flex space-x-4'>
					<ButtonSolid>Learn more</ButtonSolid>
					<ButtonOutline>Work with me</ButtonOutline>
				</div>
			</div>

			<Image
				src='/img/profile.png'
				alt='Profile Portrait'
				width='350'
				height='350'
				priority
				className='hidden md:block grayscale hover:grayscale-0 transition-all outline outline-2 outline-[var(--accent-2)] hover:outline-offset-8 rounded-full'
			/>
		</section>
	);
};

export default Hero;
