const ButtonOutline = ({ children, onClick }) => {
	return (
		<button
			onClick={onClick}
			className='border-2 border-[var(--brand-1)] px-4 py-2 rounded hover:bg-[var(--brand-1)] transition-colors'
		>
			{children}
		</button>
	);
};

export default ButtonOutline;
