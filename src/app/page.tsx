import Header from '@/components/Header/Header.view';
import Main from '@/components/Main/Main.view';
import Footer from '@/components/Footer/Footer.view';

export default function Home() {
	return (
		<>
			<div id='top' />
			<Header />
			<div className='overflow-x-hidden'>
				<Main />
				<Footer />
			</div>
		</>
	);
}
