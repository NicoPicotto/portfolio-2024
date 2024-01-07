// components/ButtonSolid.js
const ButtonSolid = ({ children, onClick }) => {
	return (
		<button
			onClick={onClick}
			className='bg-[var(--brand-1)] hover:bg-[var(--brand-2)] px-4 py-2 rounded transition-colors'
		>
			{children}
		</button>
	);
};

export default ButtonSolid;
