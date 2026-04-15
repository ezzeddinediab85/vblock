import { useI18n } from '@/lib/i18n';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Star } from 'lucide-react';

const StarRating = () => (
  <div className="flex items-center gap-0.5 mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={14} fill="#F5A623" color="#F5A623" strokeWidth={1.5} />
    ))}
  </div>
);

const Testimonials = () => {
  const { lang, t } = useI18n();
  const { ref, isVisible } = useScrollAnimation();

  const cards = [
    { text: t.testimonials.t1[lang], author: t.testimonials.t1Author[lang] },
    { text: t.testimonials.t2[lang], author: t.testimonials.t2Author[lang] },
    { text: t.testimonials.t3[lang], author: t.testimonials.t3Author[lang] },
  ];

  return (
    <section className="relative py-24 noise-overlay overflow-hidden">
      <div className="absolute inset-0 bg-card" />
      <div ref={ref} className="relative z-10 container mx-auto px-4">
        <span className="block text-primary font-body text-sm tracking-widest uppercase text-center mb-2">
          {t.testimonials.label[lang]}
        </span>
        <h2 className={`font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-16 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          {t.testimonials.headline[lang]}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`glass-card p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <StarRating />
              <p className="font-body text-foreground/80 italic leading-relaxed mb-6">"{card.text}"</p>
              <p className="font-body text-muted-foreground text-sm">— {card.author}</p>
            </div>
          ))}
        </div>

        <p className="text-center font-body text-primary/70 italic text-sm">
          {t.testimonials.note[lang]}
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
