import { useI18n } from '@/lib/i18n';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { HoneycombPattern } from '@/components/SVGElements';
import { FlaskConical, Leaf, Shield } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const HowItWorks = () => {
  const { lang, t } = useI18n();
  const { ref, isVisible } = useScrollAnimation();

  const steps: Array<{ num: string; icon: LucideIcon; title: string; desc: string }> = [
    { num: '01', icon: FlaskConical, title: t.howItWorks.step1Title[lang], desc: t.howItWorks.step1Desc[lang] },
    { num: '02', icon: Leaf, title: t.howItWorks.step2Title[lang], desc: t.howItWorks.step2Desc[lang] },
    { num: '03', icon: Shield, title: t.howItWorks.step3Title[lang], desc: t.howItWorks.step3Desc[lang] },
  ];

  return (
    <section id="how-it-works" className="relative py-24 noise-overlay overflow-hidden">
      <div className="absolute inset-0 bg-card" />
      <HoneycombPattern opacity={0.04} />

      <div ref={ref} className="relative z-10 container mx-auto px-4">
        <h2 className={`font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {t.howItWorks.headline[lang]}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-px border-t-2 border-dashed border-primary/30" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className={`glass-card p-8 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-display font-bold text-lg">{step.num}</span>
                </div>
                <div className="flex justify-center mb-3">
                  <Icon size={28} color="#F5A623" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
