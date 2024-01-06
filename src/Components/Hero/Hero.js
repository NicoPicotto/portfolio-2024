import Image from 'next/image';
import ButtonOutline from '../Buttons/ButtonOutline';
import ButtonSolid from '../Buttons/ButtonSolid';

const Hero = () => {
	return (
		<section className='w-full mx-auto max-w-screen-xl flex items-center justify-between py-20'>
			<div className='flex-1 max-w-prose'>
				<h1 className='text-4xl font-bold text-[var(--neutral)] mb-4'>
					Hey there!{' '}
					<span className='text-[var(--accent-1)]'>I&apos;m Nico</span>.
				</h1>
				<p className='text-lg text-[var(--neutral)] mb-6'>
					Web developer, graphic designer and passionate about creating
					<span className='font-bold'> powerful</span>,{' '}
					<span className='font-bold'> amazing</span> and{' '}
					<span className='font-bold'> practical</span> web and mobile products.
				</p>
				<div className='flex space-x-4'>
					<ButtonSolid>Learn more</ButtonSolid>
					<ButtonOutline>Work with me</ButtonOutline>
				</div>
			</div>

			<div>
				<Image
					src='/img/profile.png'
					alt='Descripción de la imagen'
					width='350'
					height='350'
				/>
			</div>
		</section>
	);
};

export default Hero;
