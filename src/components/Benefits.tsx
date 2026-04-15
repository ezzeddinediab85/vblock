import { useI18n } from '@/lib/i18n';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Ban, Zap, Target, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const Benefits = () => {
  const { lang, t } = useI18n();
  const { ref, isVisible } = useScrollAnimation();

  const cards: Array<{ icon: LucideIcon; title: string; desc: string }> = [
    { icon: Ban, title: t.benefits.b1Title[lang], desc: t.benefits.b1Desc[lang] },
    { icon: Zap, title: t.benefits.b2Title[lang], desc: t.benefits.b2Desc[lang] },
    { icon: Target, title: t.benefits.b3Title[lang], desc: t.benefits.b3Desc[lang] },
    { icon: TrendingUp, title: t.benefits.b4Title[lang], desc: t.benefits.b4Desc[lang] },
  ];

  return (
    <section id="benefits" className="relative py-24 noise-overlay overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div ref={ref} className="relative z-10 container mx-auto px-4">
        <h2 className={`font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-16 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          {t.benefits.headline[lang]}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`glass-card p-8 text-center group hover:border-primary/40 hover:shadow-[0_0_40px_rgba(245,166,35,0.1)] transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-amber-500/10 rounded-full p-3">
                    <Icon size={28} color="#F5A623" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{card.title}</h3>
                <p className="font-body text-muted-foreground text-sm">{card.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Banner */}
        <div className="w-full py-6 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/20 text-center">
          <p className="font-display text-xl md:text-2xl italic text-foreground">
            {t.benefits.banner[lang]}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
