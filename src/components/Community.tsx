import { useI18n } from '@/lib/i18n';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const images = [
  '/media/community-1.jpg',
  '/media/community-2.jpg',
  '/media/community-3.jpg',
  '/media/community-4.jpg',
  '/media/community-5.jpg',
  '/media/community-6.jpg',
];

const Community = () => {
  const { lang, t } = useI18n();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-24 noise-overlay overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div ref={ref} className="relative z-10 container mx-auto px-4">
        <h2 className={`font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-2 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          {t.community.headline[lang]}
        </h2>
        <p className="text-center text-primary font-body mb-12">@vblock_tn</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {images.map((src, i) => (
            <a
              key={i}
              href="https://www.instagram.com/vblock_tn"
              target="_blank"
              rel="noopener noreferrer"
              className={`relative aspect-square rounded-xl overflow-hidden group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img src={src} alt="V-BLOCK community" className="w-full h-full object-cover" loading="lazy" decoding="async" width="400" height="400" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity font-body text-sm font-semibold">
                  @vblock_tn
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.instagram.com/vblock_tn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:shadow-[0_0_20px_rgba(245,166,35,0.4)] transition-all"
          >
            {t.community.followBtn[lang]}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;
