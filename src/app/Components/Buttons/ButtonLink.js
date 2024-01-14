'use client';
const ButtonLink = ({ children, targetId, name }) => {
	const scrollToTarget = () => {
		const target = document.getElementById(targetId);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};
	return (
		<button
			onClick={scrollToTarget}
			name={name}
			className='flex items-center text-brand-3 hover:underline text-nowrap'
		>
			{children}
		</button>
	);
};

export default ButtonLink;
