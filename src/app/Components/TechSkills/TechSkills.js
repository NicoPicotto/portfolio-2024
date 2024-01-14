import {
	SiTailwindcss,
	SiAdobeillustrator,
	SiAdobephotoshop,
	SiWebflow,
	SiReact,
	SiHtml5,
	SiCss3,
	SiSass,
	SiJavascript,
} from 'react-icons/si';
import { TbBrandReactNative, TbBrandNextjs } from 'react-icons/tb';
import { BsWordpress } from 'react-icons/bs';

const TechSkills = () => {
	return (
		<section id='skills'>
			<div className='flex-1 divide-y divide-[var(--brand-2)] space-y-2'>
				<h1 className='leading-tight text-balance'>
					The <span className='text-[var(--accent-1)]'>technologies</span> I
					work with.
				</h1>
				<ul className='grid grid-cols-2 md:grid-cols-4 gap-4 list-none md:space-y-4 space-y-2 pt-3'>
					<li className='mt-2'>
						<SiHtml5 className='mr-2' /> HTML
					</li>
					<li>
						<SiTailwindcss className='mr-2' />
						Tailwind
					</li>
					<li>
						<TbBrandReactNative className='mr-2' />
						React Native
					</li>
					<li>
						<BsWordpress className='mr-2' />
						Wordpress
					</li>
					<li>
						<SiCss3 className='mr-2' />
						CSS
					</li>
					<li>
						<SiJavascript className='mr-2' />
						Javascript
					</li>
					<li>
						<TbBrandNextjs className='mr-2' />
						NextJs
					</li>
					<li>
						<SiAdobephotoshop className='mr-2' />
						Adobe Photoshop
					</li>
					<li>
						<SiSass className='mr-2' />
						SASS
					</li>
					<li>
						<SiReact className='mr-2' />
						ReactJs
					</li>
					<li>
						<SiWebflow className='mr-2' />
						Webflow
					</li>
					<li>
						<SiAdobeillustrator className='mr-2' />
						Adobe Illustrator
					</li>
				</ul>
			</div>
		</section>
	);
};

export default TechSkills;
