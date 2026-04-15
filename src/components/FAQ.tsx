import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Plus, X } from 'lucide-react';

const FAQ = () => {
  const { lang, t } = useI18n();
  const { ref, isVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    { q: t.faq.q1[lang], a: t.faq.a1[lang] },
    { q: t.faq.q2[lang], a: t.faq.a2[lang] },
    { q: t.faq.q3[lang], a: t.faq.a3[lang] },
    { q: t.faq.q4[lang], a: t.faq.a4[lang] },
    { q: t.faq.q5[lang], a: t.faq.a5[lang] },
    { q: t.faq.q6[lang], a: t.faq.a6[lang] },
  ];

  return (
    <section id="faq" className="relative py-24 noise-overlay overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div ref={ref} className="relative z-10 container mx-auto px-4 max-w-3xl">
        <h2 className={`font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-16 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          {t.faq.headline[lang]}
        </h2>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className={`glass-card overflow-hidden transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-body font-semibold text-foreground pr-4">{item.q}</span>
                <span className="text-primary flex-shrink-0 transition-transform duration-300">
                  {openIndex === i ? (
                    <X size={18} color="#F5A623" strokeWidth={1.5} />
                  ) : (
                    <Plus size={18} color="#F5A623" strokeWidth={1.5} />
                  )}
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: openIndex === i ? '200px' : '0' }}
              >
                <p className="px-6 pb-6 font-body text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
