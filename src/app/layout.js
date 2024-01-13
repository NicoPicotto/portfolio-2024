import { Exo } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

const exo = Exo({ subsets: ['latin'], weight: ['300', '400', '700'] });

export const metadata = {
	title: 'Nico Picotto | Dev',
	description:
		'Discover my portfolio - Explore my skills, browse through my projects, and get in touch with me. Elevate your web experience with ReactJS and JavaScript expertise.',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={exo.className}>
				<Navbar />
				<div className='mx-auto max-w-screen-xl px-6 '>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
