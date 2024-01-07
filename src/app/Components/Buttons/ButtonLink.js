'use client';
const ButtonLink = ({ children, targetId }) => {
	const scrollToTarget = () => {
		const target = document.getElementById(targetId);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};
	return (
		<button
			onClick={scrollToTarget}
			className='flex items-center text-brand-3 hover:underline'
		>
			{children}
		</button>
	);
};

export default ButtonLink;
