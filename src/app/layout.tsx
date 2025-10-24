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
	title: 'Жизнь колледжа',
	description: 'Современный лендинг о жизни нашего колледжа: события, студенты, достижения.'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru'>
			<body className={`${manrope.variable} antialiased`}>
				{children}
				<ScrollToTop />
			</body>
		</html>
	);
}
