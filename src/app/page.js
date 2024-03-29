'use client';
import { useEffect } from 'react';
import Hero from '@/app/Components/Hero/Hero';
import TechSkills from '@/app/Components/TechSkills/TechSkills';
import Lenis from '@studio-freight/lenis';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

export default function Home() {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

	return (
		<main className='flex flex-col scroll-smooth'>
			<Hero />
			<TechSkills />
			<Projects />
			<Contact />
			<Footer />
		</main>
	);
}
