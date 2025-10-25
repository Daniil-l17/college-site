'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			const y = window.scrollY || document.documentElement.scrollTop;
			const doc = document.documentElement;
			const winH = window.innerHeight || doc.clientHeight;
			const bodyH = Math.max(doc.scrollHeight, doc.offsetHeight, (document.body && document.body.scrollHeight) || 0, (document.body && document.body.offsetHeight) || 0);
			const nearBottom = y > winH && y + winH < bodyH - 80;
			setVisible(y > winH && !nearBottom ? true : y > winH);
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const handleClick = () => {
		try {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		} catch {
			window.scrollTo(0, 0);
		}
	};

	return (
		<button
			type='button'
			onClick={handleClick}
			aria-label='Прокрутить наверх'
			className={`fixed right-4 z-[60] rounded-full bg-brand-500 text-white shadow-md hover:bg-brand-600 transition-colors cursor-pointer ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
			style={{ width: 44, height: 44, bottom: 'max(1rem, env(safe-area-inset-bottom))' }}
		>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-5 h-5 m-auto'>
				<polyline points='18 15 12 9 6 15' />
			</svg>
		</button>
	);
}
