import React from 'react';
import Image from 'next/image';

interface FullscreenImageProps {
	imageSrc: string;
	onClose: () => void;
}

const FullscreenImage: React.FC<FullscreenImageProps> = ({ imageSrc, onClose }) => {
	const handleClose = () => {
		onClose();
	};

	return (
		<div
			className='fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-8 cursor-pointer'
			style={{
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				width: '100vw',
				height: '100dvh',
				position: 'fixed'
			}}
			onClick={handleClose}
		>
			<div className='relative w-full h-full flex items-center justify-center cursor-default'>
				<Image src={imageSrc} alt='Увеличенное изображение' width={1200} height={800} className='rounded-2xl max-w-full max-h-full object-contain' />
			</div>
		</div>
	);
};

export default FullscreenImage;
