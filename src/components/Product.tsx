import { useI18n } from '@/lib/i18n';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import productHero from '@/assets/product-hero.png';
import { Leaf, Droplets } from 'lucide-react';
import { BeeIcon } from '@/components/BeeIcon';

const Product = () => {
  const { lang, t } = useI18n();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="product" className="relative py-24 noise-overlay overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div
        ref={ref}
        className={`relative z-10 container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Left - Visual */}
        <div className="relative flex items-center justify-center">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-primary/20 hover:shadow-[0_0_30px_rgba(245,166,35,0.3)] transition-all duration-500">
            <img
              src={productHero}
              alt="V-BLOCK Product"
              className="w-full h-auto object-cover max-w-md"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Right - Text */}
        <div>
          <span className="text-primary font-body text-sm tracking-widest uppercase">{t.product.label[lang]}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            {t.product.headline[lang]}
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            {t.product.body[lang]}
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full text-sm font-body inline-flex items-center gap-2">
              <Leaf size={14} color="#F5A623" strokeWidth={1.5} />
              {t.product.pill1[lang]}
            </span>
            <span className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full text-sm font-body inline-flex items-center gap-2">
              <BeeIcon size={14} color="#F5A623" />
              {t.product.pill2[lang]}
            </span>
            <span className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full text-sm font-body inline-flex items-center gap-2">
              <Droplets size={14} color="#F5A623" strokeWidth={1.5} />
              {t.product.pill3[lang]}
            </span>
          </div>
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2">
            <span className="inline-block bg-amber-500/15 border border-amber-500/30 text-primary px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider leading-none">
              TN
            </span>
            <span className="text-sm font-body text-foreground">{t.product.badge[lang]}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
