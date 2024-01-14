import Image from 'next/image';
import ButtonOutline from '../Buttons/ButtonOutline';
import ButtonSolid from '../Buttons/ButtonSolid';

const Hero = () => {
	return (
		<section
			className='justify-between items-start flex flex-col-reverse md:flex-row md:items-center gap-6 md:gap-0'
			id='hero'
		>
			<div className='flex-1 max-w-xl'>
				<h1 className='mb-3 leading-tight'>
					Hey there!{' '}
					<span className='text-[var(--accent-1)]'>I&apos;m Nico</span>.
				</h1>
				<p className='text-[var(--neutral)] mb-7'>
					Web developer, graphic designer and passionate about creating
					<span className='font-bold'> awesome</span> and{' '}
					<span className='font-bold'> smooth</span> web and mobile products.
				</p>
				<div className='flex space-x-4'>
					<ButtonSolid targetId='projects'>Learn more</ButtonSolid>
					<ButtonOutline targetId='contact'>Work with me</ButtonOutline>
				</div>
			</div>

			<Image
				src='/img/profile.png'
				alt='Profile Portrait'
				width='350'
				height='350'
				priority
				className='w-2/4 md:w-auto grayscale hover:grayscale-0 transition-all outline outline-2 outline-transparent hover:outline-[var(--accent-2)] hover:outline-offset-8 rounded-full'
			/>
		</section>
	);
};

export default Hero;
