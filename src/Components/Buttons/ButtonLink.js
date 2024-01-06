const ButtonLink = ({ children, onClick }) => {
	return (
		<button
			onClick={onClick}
			className='flex items-center text-brand-3 hover:underline'
		>
			{children}
		</button>
	);
};

export default ButtonLink;
