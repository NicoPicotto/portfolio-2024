//https://jsonplaceholder.typicode.com/todos
import useFirebaseData from '@/app/Hooks/db';
import Card from './Card';

const Projects = () => {
	const projects = useFirebaseData('projects');

	return (
		<section id='projects'>
			<div className='flex-1 divide-y divide-[var(--brand-2)] space-y-2'>
				<h1 className="leading-tight">
					Take a look at my latest{' '}
					<span className='text-[var(--accent-1)]'>work</span>.
				</h1>
				<div className='pt-3 grid grid-co1 md:grid-cols-2 gap-3'>
					{projects &&
						Object.keys(projects).map((key) => {
							const project = projects[key];
							return <Card key={key} project={project} />;
						})}
				</div>
			</div>
		</section>
	);
};

export default Projects;
