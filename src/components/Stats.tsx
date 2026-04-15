import { useI18n } from '@/lib/i18n';
import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation';
import { HoneycombPattern } from '@/components/SVGElements';

const Stats = () => {
  const { lang, t } = useI18n();
  const { ref, isVisible } = useScrollAnimation();

  const stat1 = useCountUp(100, 2000, isVisible);
  const stat2 = useCountUp(0, 500, isVisible);
  const stat3 = useCountUp(3, 1500, isVisible);

  const stats = [
    { value: `${stat1}%`, label: t.stats.s1[lang] },
    { value: `${stat2}`, label: t.stats.s2[lang] },
    { value: `${stat3}`, label: t.stats.s3[lang] },
    { value: 'TN', label: t.stats.s4[lang], isBadge: true },
  ];

  return (
    <section className="relative py-24 noise-overlay overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1200&h=600&fit=crop&q=80"
          alt="Beekeeper"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          width="1200"
          height="600"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      <HoneycombPattern opacity={0.03} />

      <div ref={ref} className="relative z-10 container mx-auto px-4 text-center">
        <h2 className={`font-display text-4xl md:text-5xl font-bold text-foreground mb-16 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          {t.stats.headline[lang]}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`glass-card p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                {s.isBadge ? (
                  <span className="inline-block bg-amber-500/15 border border-amber-500/30 text-primary px-4 py-1 rounded-full text-2xl md:text-3xl font-bold tracking-wider">
                    TN
                  </span>
                ) : (
                  s.value
                )}
              </div>
              <div className="font-body text-muted-foreground text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
