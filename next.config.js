/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'placehold.jp',
				port: '',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'encrypted-tbn0.gstatic.com',
				port: '',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'firebasestorage.googleapis.com',
				port: '',
				pathname: '**',
			},
		],
	},
};

module.exports = nextConfig;
