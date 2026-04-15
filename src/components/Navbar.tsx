import { useState, useEffect } from 'react';
import { useI18n } from '@/lib/i18n';
import logo from '@/assets/vblock-logo.png';

const Navbar = () => {
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navItems = [
    { label: t.nav.home[lang], href: '#home' },
    { label: t.nav.product[lang], href: '#product' },
    { label: t.nav.howItWorks[lang], href: '#how-it-works' },
    { label: t.nav.benefits[lang], href: '#benefits' },
    { label: t.nav.faq[lang], href: '#faq' },
    { label: t.nav.contact[lang], href: '#contact' },
  ];

  const langs: Array<{ code: 'fr' | 'en' | 'ar'; label: string }> = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'عر' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <a href="#home">
            <img src={logo} alt="V-BLOCK" className="h-10 w-auto" width="40" height="40" decoding="async" />
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-foreground/70 hover:text-primary transition-colors font-body"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <div className="flex rounded-full bg-muted p-0.5">
              {langs.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    lang === l.code
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:shadow-[0_0_20px_rgba(245,166,35,0.4)] transition-all"
            >
              {t.nav.cta[lang]}
            </a>
          </div>

          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-background/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6">
          <button
            className="absolute top-4 right-4 text-foreground p-2"
            onClick={() => setMobileOpen(false)}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-2xl font-display text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex rounded-full bg-muted p-1 mt-4">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => { setLang(l.code); setMobileOpen(false); }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  lang === l.code ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold mt-2"
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.cta[lang]}
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
