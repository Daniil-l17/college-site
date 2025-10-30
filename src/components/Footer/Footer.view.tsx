export default function Footer() {
	return (
		<footer id='contacts' className='border-t border-black/10'>
			<div className='mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-8 text-sm'>
				<div>
					<div className='text-lg font-semibold'>IT-TOP College</div>
					<p className='text-neutral-600 mt-2'>© {new Date().getFullYear()} IT-TOP College. Все права защищены.</p>
				</div>
				<div>
					<div className='font-semibold mb-2'>Разработка</div>
					<ul className='space-y-1 text-neutral-700'>
						<li>
							<a href='https://github.com/Daniil-l17/college-site' target='_blank' rel='noopener noreferrer' className='hover:text-brand-400 transition-colors'>
								GitHub репозиторий
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='mx-auto max-w-6xl px-4 pb-8'>
				<p className='text-center text-xs text-neutral-500'>Создание сайта осуществляли Лукьнов Даниил и Слепушкина Екатерина</p>
			</div>
		</footer>
	);
}
