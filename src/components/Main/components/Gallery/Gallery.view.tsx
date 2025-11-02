'use client';

import { useState, useEffect, useRef } from 'react';
import { octoberDays } from './constants';
import DayBlock from './components/DayBlock/DayBlock.view';
import FullscreenImage from './components/FullscreenImage/FullscreenImage.view';

export default function Gallery() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsDropdownOpen(false);
			}
		};

		if (isDropdownOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isDropdownOpen]);

	return (
		<section id='gallery' className='py-20 bg-gradient-to-b from-white to-gray-50'>
			<div className='mx-auto px-4' style={{ maxWidth: '1600px' }}>
				<div className='text-center mb-20'>
					<div className='relative inline-block' ref={dropdownRef}>
						<button
							onClick={e => {
								e.preventDefault();
								setIsDropdownOpen(!isDropdownOpen);
								document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
							}}
							className='inline-flex items-center px-4 py-2 rounded-full bg-brand-500/10 text-brand-600 text-sm font-medium mb-6 hover:bg-brand-500/20 transition-colors cursor-pointer'
						>
							📅 Октябрь 2025
							<svg className={`w-4 h-4 ml-2 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
							</svg>
						</button>

						{isDropdownOpen && (
							<div className='absolute top-[80%] left-1/2 transform -translate-x-1/2 mt-1 w-48 bg-white rounded-xl shadow-lg border border-gray-200 z-50'>
								<div className='py-2'>
									<button className='w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer' onClick={() => setIsDropdownOpen(false)}>
										📅 Октябрь 2025
									</button>
								</div>
							</div>
						)}
					</div>
					<h2 className='text-4xl font-bold mb-4'>
						События <span className='text-gradient'>октября</span>
					</h2>
					<p className='text-xl text-gray-600'>Каждый день в нашем колледже наполнен событиями и открытиями</p>
				</div>

				<div className='space-y-24 overflow-hidden'>
					{octoberDays.map((day, index) => (
						<DayBlock key={index} day={day} index={index} onImageClick={setSelectedImage} />
					))}
				</div>
			</div>

			{selectedImage && <FullscreenImage imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />}
		</section>
	);
}
