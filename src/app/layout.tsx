import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import './globals.css';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop.view';

const manrope = Onest({
	variable: '--font-manrope',
	subsets: ['cyrillic', 'latin'],
	display: 'swap'
});

export const metadata: Metadata = {
	title: {
		default: 'College Digest - Жизнь колледжа',
		template: '%s | College Digest'
	},
	description: 'Творчество, наука, спорт и дружба — каждый день насыщен событиями. Узнай больше о том, чем живут студенты нашего колледжа. Фотогалерея событий с 1 сентября 2025 года.',
	keywords: ['колледж', 'студенты', 'события', 'фотогалерея', 'жизнь колледжа', 'образование', 'творчество', 'спорт', 'наука', 'дружба'],
	authors: [{ name: 'Лукьнов Даниил' }, { name: 'Слепушкина Екатерина' }],
	creator: 'Лукьнов Даниил, Слепушкина Екатерина',
	publisher: 'College Digest',
	icons: {
		icon: '/favicon.ico'
	},
	formatDetection: {
		email: false,
		address: false,
		telephone: false
	},
	metadataBase: new URL('https://life-it-top-college.ru'),
	alternates: {
		canonical: '/'
	},
	openGraph: {
		type: 'website',
		locale: 'ru_RU',
		url: 'https://life-it-top-college.ru',
		siteName: 'College Digest',
		title: 'College Digest - Жизнь колледжа',
		description: 'Творчество, наука, спорт и дружба — каждый день насыщен событиями. Узнай больше о том, чем живут студенты нашего колледжа.',
		images: [
			{
				url: '/back.jpg',
				width: 1200,
				height: 630,
				alt: 'College Digest - Жизнь колледжа'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: 'College Digest - Жизнь колледжа',
		description: 'Творчество, наука, спорт и дружба — каждый день насыщен событиями. Узнай больше о том, чем живут студенты нашего колледжа.',
		images: ['/back.jpg']
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1
		}
	},
	verification: {
		google: 'JKPPbVVYmo67LyGK8vikLWL_0MQWd2-kgP9Fe-V1Rkc',
		yandex: 'c53e0936303a3a0f'
	}
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'College Digest',
		description: 'Творчество, наука, спорт и дружба — каждый день насыщен событиями. Узнай больше о том, чем живут студенты нашего колледжа.',
		url: 'https://life-it-top-college.ru',
		author: {
			'@type': 'Organization',
			name: 'College Digest',
			creator: [
				{
					'@type': 'Person',
					name: 'Лукьнов Даниил'
				},
				{
					'@type': 'Person',
					name: 'Слепушкина Екатерина'
				}
			]
		},
		publisher: {
			'@type': 'Organization',
			name: 'College Digest'
		},
		dateCreated: '2025-09-01',
		inLanguage: 'ru-RU',
		keywords: 'колледж, студенты, события, фотогалерея, жизнь колледжа, образование, творчество, спорт, наука, дружба'
	};

	return (
		<html lang='ru'>
			<head>
				<meta name='yandex-verification' content='c53e0936303a3a0f' />
				<meta name='google-site-verification' content='JKPPbVVYmo67LyGK8vikLWL_0MQWd2-kgP9Fe-V1Rkc' />
				<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
			</head>
			<body className={`${manrope.variable} antialiased`}>
				{children}
				<ScrollToTop />
			</body>
		</html>
	);
}
