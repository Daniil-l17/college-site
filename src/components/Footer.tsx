export default function Footer() {
  return (
    <footer id="contacts" className="mt-20 border-t border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="text-lg font-semibold">Колледж</div>
          <p className="text-neutral-600 mt-2">© {new Date().getFullYear()} Наш колледж. Все права защищены.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Контакты</div>
          <ul className="space-y-1 text-neutral-700">
            <li>Email: info@college.ru</li>
            <li>Телефон: +7 (900) 123-45-67</li>
            <li>Адрес: ул. Академическая, 1</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Соцсети</div>
          <ul className="space-y-1 text-neutral-700">
            <li><a href="#" className="hover:text-brand-400">VK</a></li>
            <li><a href="#" className="hover:text-brand-400">Telegram</a></li>
            <li><a href="#" className="hover:text-brand-400">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-8">
        <p className="text-center text-xs text-neutral-500">Создание сайта осуществляли Лукьнов Даниил и Слепушкина Екатерина</p>
      </div>
    </footer>
  );
}


