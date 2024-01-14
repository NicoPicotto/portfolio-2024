const ButtonOutline = ({ children, targetId, name }) => {
	const scrollToTarget = () => {
		const target = document.getElementById(targetId);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	return (
		<button
			onClick={scrollToTarget}
			aria-label={name}
			className='border-2 border-[var(--brand-1)] px-4 py-2 rounded hover:bg-[var(--brand-1)] transition-colors'
		>
			{children}
		</button>
	);
};

export default ButtonOutline;
