const ButtonGhost = ({ children, onClick, href, className }) => {

	if (href) {
		return (
			<a
				href={href}
				className={`text-[var(--neutral)] px-2 py-2 rounded hover:bg-[var(--brand-1)] transition-all ${className}`}
			>
				{children}
			</a>
		);
	}

	// Renderizar un elemento <button> si no se proporciona href
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
