import Image from 'next/image';
import ButtonGhost from '../Buttons/ButtonGhost';
import { FaGithub } from 'react-icons/fa';
import { BiDesktop } from 'react-icons/bi';

const Card = ({ project }) => {
	return (
		<div
			key={project.name}
			className='flex flex-col border-2 border-[var(--brand-1)] rounded-lg overflow-hidden'
		>
			{!project && <h1>NADA</h1>}
			<div>
				<Image
					src={project.img}
					alt='Descripción de la imagen'
					width='350'
					height='350'
					className='object-cover w-full overflow-hidden'
				/>
			</div>
			<div className='flex flex-col p-4 gap-2 mb-1'>
				<h2>{project.name}</h2>
				<p className='text-[var(--brand-3)]'>{project.content}</p>
			</div>
			<div className='flex-1 flex border-t-2 border-t-[var(--brand-2)]'>
				<ButtonGhost className='flex items-center gap-2 w-full justify-center rounded-none text-[var(--brand-3)]'>
					<FaGithub color='var(--accent-1)' />
					Code on Github
				</ButtonGhost>
				<div className='h-full border border-[var(--brand-2)]'></div>
				<ButtonGhost className='flex items-center gap-2 w-full justify-center rounded-none text-[var(--brand-3)]'>
					<BiDesktop color='var(--accent-1)' />
					Live/Demo Version
				</ButtonGhost>
			</div>
		</div>
	);
};

export default Card;
