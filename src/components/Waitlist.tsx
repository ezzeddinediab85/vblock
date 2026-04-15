import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { CheckCircle2, MessageCircle, Instagram, Lock, Ban, AlertCircle } from 'lucide-react';

const FUNCTION_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/waitlist-signup`;

const Waitlist = () => {
  const { lang, t } = useI18n();
  const { ref, isVisible } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profileType, setProfileType] = useState('');
  const [hiveCount, setHiveCount] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const fullName = [firstName, lastName].filter(Boolean).join(' ').trim();

    try {
      const res = await fetch(FUNCTION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: fullName || 'Anonymous',
          email: email.toLowerCase().trim(),
          phone: phone || null,
          profile_type: profileType || null,
          hive_count: hiveCount || null,
        }),
      });

      const data = await res.json();

      if (data?.error === 'duplicate_email') {
        setError(t.waitlist.errorDuplicate[lang]);
        return;
      }

      if (!res.ok || data?.error) {
        setError(t.waitlist.errorGeneric[lang]);
        return;
      }

      setSubmitted(true);
    } catch {
      setError(t.waitlist.errorGeneric[lang]);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full bg-muted/50 border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors";

  const trustBadges = [
    { icon: Lock, text: t.waitlist.trust1[lang] },
    { icon: Ban, text: t.waitlist.trust2[lang] },
    { icon: null, text: t.waitlist.trust3[lang], badge: 'TN' },
  ];

  return (
    <section id="contact" className="relative py-24 noise-overlay overflow-hidden">
      <div className="absolute inset-0 bg-card" />
      <div ref={ref} className="relative z-10 container mx-auto px-4 max-w-2xl">
        <h2 className={`font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-4 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          {t.waitlist.headline[lang]}
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12">{t.waitlist.sub[lang]}</p>

        {submitted ? (
          <div className="glass-card p-12 text-center animate-fade-in-up">
            <div className="flex justify-center mb-4">
              <div className="bg-amber-500/10 rounded-full p-3">
                <CheckCircle2 size={40} color="#F5A623" strokeWidth={1.5} />
              </div>
            </div>
            <p className="font-body text-foreground text-lg">{t.waitlist.success[lang]}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={t.waitlist.firstName[lang]}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={inputClass}
              />
              <input
                type="text"
                placeholder={t.waitlist.lastName[lang]}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={inputClass}
              />
            </div>
            <input
              type="email"
              required
              placeholder={t.waitlist.email[lang]}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
            <input
              type="tel"
              placeholder={t.waitlist.phone[lang]}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={inputClass}
            />
            <select
              value={profileType}
              onChange={(e) => setProfileType(e.target.value)}
              className={`${inputClass} ${!profileType ? 'text-muted-foreground' : ''}`}
            >
              <option value="">{t.waitlist.profile[lang]}</option>
              {t.waitlist.profileOptions[lang].map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder={t.waitlist.hiveCount[lang]}
              value={hiveCount}
              onChange={(e) => setHiveCount(e.target.value)}
              className={inputClass}
            />

            {error && (
              <div className="flex items-center gap-2 text-red-400 font-body text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                <AlertCircle size={16} />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground py-4 rounded-lg font-semibold text-lg hover:shadow-[0_0_30px_rgba(245,166,35,0.4)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? t.waitlist.submitting[lang] : t.waitlist.submit[lang]}
            </button>
          </form>
        )}

        {/* Contact buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <a href="#" className="glass-card px-6 py-3 text-center font-body text-foreground hover:border-primary/40 transition-all flex items-center justify-center gap-2">
            <MessageCircle size={18} color="#F5A623" strokeWidth={1.5} />
            {t.waitlist.whatsapp[lang]}
          </a>
          <a href="https://www.instagram.com/vblock_tn" target="_blank" rel="noopener noreferrer" className="glass-card px-6 py-3 text-center font-body text-foreground hover:border-primary/40 transition-all flex items-center justify-center gap-2">
            <Instagram size={18} color="#F5A623" strokeWidth={1.5} />
            {t.waitlist.instagram[lang]}
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {trustBadges.map((badge) => (
            <span key={badge.text} className="flex items-center gap-1.5 text-muted-foreground font-body text-sm">
              {badge.icon ? (
                <badge.icon size={14} color="#F5A623" strokeWidth={1.5} />
              ) : (
                <span className="inline-block bg-amber-500/15 border border-amber-500/30 text-primary px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider leading-none">
                  TN
                </span>
              )}
              {badge.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
