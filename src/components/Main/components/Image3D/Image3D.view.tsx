'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Image3DProps } from './Image3D.typed';

export default function Image3D({ src, alt, onClick, className = '' }: Image3DProps) {
	const [isHovered, setIsHovered] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const imageRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!imageRef.current) return;

		const rect = imageRef.current.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;

		const x = (e.clientX - centerX) / (rect.width / 2);
		const y = (e.clientY - centerY) / (rect.height / 2);

		const clampedX = Math.max(-1, Math.min(1, x));
		const clampedY = Math.max(-1, Math.min(1, y));

		setMousePosition({ x: clampedX, y: clampedY });
	};

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
		setMousePosition({ x: 0, y: 0 });
	};

	const rotateX = mousePosition.y * 8;
	const rotateY = mousePosition.x * 8;

	return (
		<div
			ref={imageRef}
			className={`relative cursor-pointer transform-gpu transition-all duration-700 ease-out ${className}`}
			style={{
				transform: isHovered
					? `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateZ(20px) scale(1.05)`
					: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)',
				transformStyle: 'preserve-3d'
			}}
			onMouseMove={handleMouseMove}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={onClick}
		>
			<div
				className='relative h-full w-full rounded-2xl overflow-hidden'
				style={{
					boxShadow: isHovered
						? `0 0 0 2px rgba(99, 102, 241, 0.4),
               -10px 0 20px rgba(99, 102, 241, 0.2),
               10px 0 20px rgba(99, 102, 241, 0.2),
               0 -5px 15px rgba(99, 102, 241, 0.1),
               0 5px 15px rgba(99, 102, 241, 0.1)`
						: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
					transition: 'box-shadow 0.7s ease-out'
				}}
			>
				<Image src={src} alt={alt} fill className='object-cover transition-all duration-500' />

				{isHovered && (
					<div
						className='absolute inset-0 pointer-events-none'
						style={{
							background: `radial-gradient(circle at ${(mousePosition.x + 1) * 50}% ${(mousePosition.y + 1) * 50}%, 
                rgba(99, 102, 241, 0.08) 0%, 
                transparent 50%)`,
							transform: 'translateZ(10px)'
						}}
					/>
				)}
			</div>
		</div>
	);
}
