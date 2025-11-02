import Header from '@/components/Header/Header.view';
import Main from '@/components/Main/Main.view';
import Footer from '@/components/Footer/Footer.view';

export default function Home() {
	return (
		<>
			<div id='top' style={{ position: 'absolute', top: 0, height: 0 }} />
			<Header />
			<div style={{ paddingTop: 'var(--header-height, 73px)' }}>
				<Main />
				<Footer />
			</div>
		</>
	);
}
