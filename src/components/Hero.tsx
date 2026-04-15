import { useI18n } from '@/lib/i18n';
import logo from '@/assets/vblock-logo.png';
import { HoneycombPattern, AnimatedBee } from '@/components/SVGElements';
import { BeeIcon } from '@/components/BeeIcon';

const Hero = () => {
  const { lang, t } = useI18n();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(245,166,35,0.08) 0%, transparent 70%)' }} />
      <HoneycombPattern className="animate-honeycomb-drift" />
      <AnimatedBee />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto stagger-children pt-16 mt-8">

        {/* Logo */}
        <div className="opacity-0 animate-fade-in-up relative flex justify-center mb-8" style={{ animationDelay: '0.15s' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-primary/15 animate-pulse-glow" />
          </div>
          <img src={logo} alt="V-BLOCK" className="relative z-10 h-44 w-auto" width="176" height="176" decoding="async" />
        </div>

        {/* Headline */}
        <h1 className="opacity-0 animate-fade-in-up font-display text-5xl sm:text-7xl md:text-8xl font-bold leading-tight text-foreground mb-6" style={{ animationDelay: '0.3s' }}>
          {t.hero.headline1[lang]}
          <br />
          <span className="text-primary italic">{t.hero.headline2[lang]}</span>
        </h1>

        {/* Subheadline */}
        <p className="opacity-0 animate-fade-in-up font-body text-muted-foreground text-lg max-w-2xl mx-auto mb-10" style={{ animationDelay: '0.45s' }}>
          {t.hero.sub[lang]}
        </p>

        {/* CTAs */}
        <div className="opacity-0 animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4 mb-8" style={{ animationDelay: '0.55s' }}>
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:shadow-[0_0_30px_rgba(245,166,35,0.4)] transition-all"
          >
            {t.hero.ctaPrimary[lang]}
          </a>
          <a
            href="#product"
            className="border border-primary/40 text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/10 transition-all flex items-center gap-2"
          >
            {t.hero.ctaSecondary[lang]}
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12l7-7M5 5h7v7" /></svg>
          </a>
        </div>

        {/* Social proof */}
        <p className="opacity-0 animate-fade-in-up text-muted-foreground text-sm font-body inline-flex items-center gap-2 justify-center" style={{ animationDelay: '0.65s' }}>
          <BeeIcon size={16} color="#F5A623" />
          {t.hero.social[lang]}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce-down">
        <svg width="24" height="24" fill="none" stroke="hsl(36 90% 55%)" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
