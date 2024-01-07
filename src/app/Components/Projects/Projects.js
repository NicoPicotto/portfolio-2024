//https://jsonplaceholder.typicode.com/todos
const Projects = () => {
	//console.log(database);

	return (
		<section id='projects'>
			<div className='flex-1 divide-y divide-[var(--brand-2)] space-y-2'>
				<h1>
					Take a look at my latest{' '}
					<span className='text-[var(--accent-1)]'>work</span>.
				</h1>
			</div>
		</section>
	);
};

export default Projects;
