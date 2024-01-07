import Image from 'next/image';
import ButtonOutline from '../Buttons/ButtonOutline';
import ButtonSolid from '../Buttons/ButtonSolid';

const Hero = () => {
	return (
		<section className='justify-between' id="hero">
			<div className='flex-1 max-w-xl'>
				<h1 className='mb-3'>
					Hey there!{' '}
					<span className='text-[var(--accent-1)]'>I&apos;m Nico</span>.
				</h1>
				<p className='text-[var(--neutral)] mb-7'>
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
