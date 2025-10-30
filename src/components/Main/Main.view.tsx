import Hero from '@/components/Main/components/Hero/Hero.view';
import Gallery from '@/components/Main/components/Gallery/Gallery.view';

export default function Main() {
	return (
		<main className='max-w-[100vw]'>
			<Hero />
			<Gallery />
		</main>
	);
}
