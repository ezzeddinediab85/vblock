import { useI18n } from '@/lib/i18n';
import logo from '@/assets/vblock-logo.png';

const Footer = () => {
  const { lang, t } = useI18n();

  const navItems = [
    { label: t.nav.home[lang], href: '#home' },
    { label: t.nav.product[lang], href: '#product' },
    { label: t.nav.howItWorks[lang], href: '#how-it-works' },
    { label: t.nav.faq[lang], href: '#faq' },
    { label: t.nav.contact[lang], href: '#contact' },
  ];

  return (
    <footer className="relative pt-16 pb-8" style={{ background: 'hsl(110 35% 3%)' }}>
      {/* Top amber line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4 text-center">
        <img src={logo} alt="V-BLOCK" className="h-28 w-auto mx-auto mb-4" width="112" height="112" loading="lazy" decoding="async" />
        <p className="font-body text-muted-foreground italic mb-8">{t.footer.tagline[lang]}</p>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="font-body text-sm text-foreground/60 hover:text-primary transition-colors">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="https://www.instagram.com/vblock_tn"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-foreground/60 hover:text-primary transition-colors mb-8"
          aria-label="Instagram"
        >
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </a>

        <div className="border-t border-border pt-6">
          <p className="font-body text-muted-foreground text-sm inline-flex items-center gap-2 justify-center w-full">
            {t.footer.rights[lang]}
            <span className="inline-block bg-amber-500/15 border border-amber-500/30 text-primary px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider leading-none">
              TN
            </span>
            {t.footer.country[lang]}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
