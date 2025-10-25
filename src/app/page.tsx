import Header from '@/components/Header/Header.view';
import Main from '@/components/Main/Main';
import Footer from '@/components/Footer/Footer.view';

export default function Home() {
	return (
		<div id='top' className='font-sans min-h-screen'>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}
