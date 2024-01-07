const ButtonGhost = ({ children, onClick, className }) => {
	return (
		<button
			onClick={onClick}
			className={`text-[var(--neutral)] px-2 py-2 rounded hover:bg-[var(--brand-1)] transition-all ${className}`}
		>
			{children}
		</button>
	);
};

export default ButtonGhost;
