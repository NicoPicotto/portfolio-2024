// components/ButtonSolid.js
const ButtonSolid = ({ children, targetId }) => {
	const scrollToTarget = () => {
		const target = document.getElementById(targetId);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};
	return (
		<button
			onClick={scrollToTarget}
			className='bg-[var(--brand-1)] hover:bg-[var(--brand-2)] px-4 py-2 rounded transition-colors'
		>
			{children}
		</button>
	);
};

export default ButtonSolid;
