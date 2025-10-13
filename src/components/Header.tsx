export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="#top" className="text-xl font-semibold tracking-tight text-gradient cursor-pointer">9/1-РПО-25/2</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-brand-400 transition-colors">О нас</a>
          <a href="#events" className="hover:text-brand-400 transition-colors">События</a>
          <a href="#gallery" className="hover:text-brand-400 transition-colors">Галерея</a>
          <a href="#contacts" className="hover:text-brand-400 transition-colors">Контакты</a>
        </nav>
        <a href="https://topitcollege.ru/surgut" target="_blank" rel="noopener noreferrer" className="text-sm rounded-md px-4 py-2 bg-brand-500 text-white hover:bg-brand-600 transition-colors">Поступить</a>
      </div>
    </header>
  );
}


