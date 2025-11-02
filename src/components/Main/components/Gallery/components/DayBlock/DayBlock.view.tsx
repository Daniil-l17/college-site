import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';
import Image3D from '../Image3D/Image3D.view';
import { DayBlockProps } from './DayBlock.typed';

export default function DayBlock({ day, index, onImageClick }: DayBlockProps) {
	const blockRef = useRef<HTMLDivElement>(null);
	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true
	});

	useLayoutEffect(() => {
		if (blockRef.current) {
			const isEven = index % 2 === 0;
			if (!inView) {
				gsap.set(blockRef.current.querySelector('.day-image'), {
					x: isEven ? -80 : 80,
					opacity: 0
				});
				gsap.set(blockRef.current.querySelector('.day-content'), {
					x: isEven ? 80 : -80,
					opacity: 0
				});
			} else {
				gsap.to(blockRef.current.querySelector('.day-image'), {
					x: 0,
					opacity: 1,
					duration: 1,
					ease: 'power3.out'
				});
				gsap.to(blockRef.current.querySelector('.day-content'), {
					x: 0,
					opacity: 1,
					duration: 1,
					ease: 'power3.out',
					delay: 0.2
				});
			}
		}
	}, [inView, index]);

	return (
		<div
			ref={node => {
				ref(node);
				blockRef.current = node;
			}}
			className='day-block'
			data-index={index}
		>
			<div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
				<div className={`day-image relative h-96 lg:h-[500px] ${index % 2 === 1 ? 'lg:col-start-2' : ''}`} style={{ opacity: 0 }}>
					<Image3D src={day.image} alt={day.title} onClick={() => onImageClick(day.image)} className='h-full w-full' />
				</div>

				<div className={`day-content ${index % 2 === 1 ? 'lg:col-start-1' : ''}`} style={{ opacity: 0 }}>
					<h3 className='text-3xl font-bold mb-6'>{day.title}</h3>
					<p className='text-gray-600 leading-relaxed text-lg'>{day.description}</p>
				</div>
			</div>
		</div>
	);
}
