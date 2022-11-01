import { DefaultSeoProps } from 'next-seo';

export const SEOConfig: DefaultSeoProps = {
	titleTemplate: '%s | nextjs-mantine-tailwindcss-template',
	defaultTitle: 'nextjs-mantine-tailwindcss-template',
	description: 'A template for Next.js with Mantine UI and TailwindCSS',
	canonical: 'https://nextjs-mantine-template.deploy.cnoside.dev',
	additionalLinkTags: [
		{
			rel: 'icon',
			href: '/favicon.ico',
		},
	],
	openGraph: {
		url: 'https://nextjs-mantine-template.deploy.cnoside.dev',
		title: 'nextjs-mantine-tailwindcss-template',
		type: 'website',
		site_name: 'nextjs-mantine-tailwindcss-template',
		locale: 'es_ES',
		images: [
			{
				url: 'https://dev-cnoside.sgp1.digitaloceanspaces.com/shared/images/nextjs-mantine-template.og-image.jpg',
				alt: 'nextjs-mantine-tailwindcss-template og:image',
				width: 1280,
				height: 640,
			},
		],
	},
};
