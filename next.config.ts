import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	poweredByHeader: false,

	images: {
		unoptimized: true
	},

	compress: true,

	output: 'export',
	trailingSlash: true,

	experimental: {
		optimizeCss: false
	}
};

export default nextConfig;
