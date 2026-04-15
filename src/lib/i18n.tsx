import React, { createContext, useContext, useState, useCallback } from 'react';

export type Lang = 'fr' | 'en' | 'ar';

const translations = {
  nav: {
    home: { fr: 'Accueil', en: 'Home', ar: 'الرئيسية' },
    product: { fr: 'Produit', en: 'Product', ar: 'المنتج' },
    howItWorks: { fr: 'Comment ça marche', en: 'How it works', ar: 'كيف يعمل' },
    benefits: { fr: 'Avantages', en: 'Benefits', ar: 'المزايا' },
    faq: { fr: 'FAQ', en: 'FAQ', ar: 'الأسئلة الشائعة' },
    contact: { fr: 'Contact', en: 'Contact', ar: 'اتصل بنا' },
    cta: { fr: "Rejoindre la liste d'attente", en: 'Join the Waitlist', ar: 'انضم لقائمة الانتظار' },
  },
  hero: {
    headline1: { fr: 'Protégez Vos Abeilles.', en: 'Protect Your Bees.', ar: 'احمِ نحلك.' },
    headline2: { fr: 'Naturellement.', en: 'Naturally.', ar: 'بشكل طبيعي.' },
    sub: {
      fr: 'La première solution biologique tunisienne contre la Varroa — pour des colonies plus fortes et un miel plus pur.',
      en: 'The first Tunisian biological solution against Varroa — for stronger colonies and purer honey.',
      ar: 'أول حل بيولوجي تونسي ضد الفاروا — لمستعمرات أقوى وعسل أنقى.',
    },
    ctaPrimary: { fr: "Rejoindre la liste d'attente", en: 'Join the Waitlist', ar: 'انضم لقائمة الانتظار' },
    ctaSecondary: { fr: 'Découvrir le produit', en: 'Discover the product', ar: 'اكتشف المنتج' },
    social: { fr: 'Rejoignez les apiculteurs qui nous font confiance', en: 'Join the beekeepers who trust us', ar: 'انضم إلى النحالين الذين يثقون بنا' },
  },
  product: {
    label: { fr: '— Le Produit', en: '— The Product', ar: '— المنتج' },
    headline: { fr: 'Une Solution Naturelle pour Vos Ruches', en: 'A Natural Solution for Your Hives', ar: 'حل طبيعي لخلاياك' },
    body: {
      fr: "V-BLOCK est composé de bandelettes biologiques à base d'extractions de plantes soigneusement sélectionnées. Efficace contre l'acarien Varroa destructor — le parasite le plus destructeur pour les colonies d'abeilles — V-BLOCK protège vos ruches sans aucun produit chimique, préservant ainsi la santé de vos abeilles et la pureté de votre miel.",
      en: "V-BLOCK consists of biological strips made from carefully selected plant extracts. Effective against the Varroa destructor mite — the most destructive parasite for bee colonies — V-BLOCK protects your hives without any chemicals, preserving the health of your bees and the purity of your honey.",
      ar: "يتكون V-BLOCK من شرائط بيولوجية مصنوعة من مستخلصات نباتية مختارة بعناية. فعال ضد عث الفاروا المدمر — الطفيلي الأكثر تدميراً لمستعمرات النحل — يحمي V-BLOCK خلاياك دون أي مواد كيميائية، محافظاً على صحة نحلك ونقاء عسلك.",
    },
    pill1: { fr: '100% Biologique', en: '100% Organic', ar: 'عضوي 100%' },
    pill2: { fr: 'Anti-Varroa', en: 'Anti-Varroa', ar: 'مضاد للفاروا' },
    pill3: { fr: 'Miel Plus Pur', en: 'Purer Honey', ar: 'عسل أنقى' },
    badge: { fr: 'Fabriqué en Tunisie', en: 'Made in Tunisia', ar: 'صنع في تونس' },
  },
  howItWorks: {
    headline: { fr: 'Simple. Naturel. Efficace.', en: 'Simple. Natural. Effective.', ar: 'بسيط. طبيعي. فعّال.' },
    step1Title: { fr: 'Appliquez', en: 'Apply', ar: 'طبّق' },
    step1Desc: { fr: 'Insérez la bandelette V-BLOCK à l\'intérieur de la ruche entre les cadres', en: 'Insert the V-BLOCK strip inside the hive between the frames', ar: 'أدخل شريط V-BLOCK داخل الخلية بين الإطارات' },
    step2Title: { fr: 'Agit', en: 'Acts', ar: 'يعمل' },
    step2Desc: { fr: 'Les extraits de plantes se diffusent naturellement et ciblent les acariens Varroa sans perturber la colonie', en: 'Plant extracts naturally diffuse and target Varroa mites without disturbing the colony', ar: 'تنتشر المستخلصات النباتية بشكل طبيعي وتستهدف عث الفاروا دون إزعاج المستعمرة' },
    step3Title: { fr: 'Protège', en: 'Protects', ar: 'يحمي' },
    step3Desc: { fr: 'Vos abeilles prospèrent, votre colonie est saine, votre miel reste pur', en: 'Your bees thrive, your colony is healthy, your honey stays pure', ar: 'ينمو نحلك، مستعمرتك صحية، وعسلك يبقى نقياً' },
  },
  benefits: {
    headline: { fr: 'Pourquoi V-BLOCK?', en: 'Why V-BLOCK?', ar: 'لماذا V-BLOCK؟' },
    b1Title: { fr: 'Zéro Chimique', en: 'Zero Chemicals', ar: 'صفر مواد كيميائية' },
    b1Desc: { fr: "Sûr pour les abeilles, le miel et l'apiculteur", en: 'Safe for bees, honey, and the beekeeper', ar: 'آمن للنحل والعسل والنحال' },
    b2Title: { fr: 'Facile à Utiliser', en: 'Easy to Use', ar: 'سهل الاستخدام' },
    b2Desc: { fr: "Aucun équipement spécial, application en minutes", en: 'No special equipment, apply in minutes', ar: 'بدون معدات خاصة، تطبيق في دقائق' },
    b3Title: { fr: 'Hautement Efficace', en: 'Highly Effective', ar: 'فعّال للغاية' },
    b3Desc: { fr: 'Cible spécifiquement le Varroa destructor', en: 'Specifically targets Varroa destructor', ar: 'يستهدف بشكل خاص الفاروا المدمر' },
    b4Title: { fr: 'Améliore le Rendement', en: 'Improves Yield', ar: 'يحسّن الإنتاج' },
    b4Desc: { fr: 'Colonies plus fortes, production optimisée', en: 'Stronger colonies, optimized production', ar: 'مستعمرات أقوى، إنتاج محسّن' },
    banner: { fr: 'V-BLOCK — Parce que chaque abeille compte.', en: 'V-BLOCK — Because every bee matters.', ar: 'V-BLOCK — لأن كل نحلة مهمة.' },
  },
  stats: {
    headline: { fr: 'Le Choix Intelligent pour Chaque Apiculteur', en: 'The Smart Choice for Every Beekeeper', ar: 'الخيار الذكي لكل نحال' },
    s1: { fr: 'Formule Bio', en: 'Bio-Based Formula', ar: 'تركيبة عضوية' },
    s2: { fr: 'Produits Chimiques', en: 'Chemicals', ar: 'مواد كيميائية' },
    s3: { fr: "Étapes d'Application", en: 'Application Steps', ar: 'خطوات التطبيق' },
    s4: { fr: 'Fabriqué en Tunisie', en: 'Made in Tunisia', ar: 'صنع في تونس' },
  },
  testimonials: {
    label: { fr: '— Ils Nous Font Confiance', en: '— They Trust Us', ar: '— يثقون بنا' },
    headline: { fr: 'Les Premiers Retours', en: 'Early Feedback', ar: 'ردود الفعل الأولى' },
    t1: {
      fr: "J'ai essayé V-BLOCK sur 5 de mes ruches cet été. Les résultats m'ont vraiment surpris — une réduction nette des acariens sans stress pour mes abeilles.",
      en: "I tried V-BLOCK on 5 of my hives this summer. The results really surprised me — a clear reduction in mites without stress for my bees.",
      ar: "جربت V-BLOCK على 5 من خلاياي هذا الصيف. النتائج فاجأتني حقاً — انخفاض واضح في العث دون إجهاد لنحلي.",
    },
    t1Author: { fr: 'Ahmed B., Apiculteur — Béja, Tunisie', en: 'Ahmed B., Beekeeper — Béja, Tunisia', ar: 'أحمد ب.، نحّال — باجة، تونس' },
    t2: {
      fr: "Enfin une solution locale, naturelle et efficace. V-BLOCK s'intègre parfaitement dans ma pratique apicole bio.",
      en: "Finally a local, natural and effective solution. V-BLOCK integrates perfectly into my organic beekeeping practice.",
      ar: "أخيراً حل محلي وطبيعي وفعّال. يتكامل V-BLOCK تماماً مع ممارستي في تربية النحل العضوية.",
    },
    t2Author: { fr: 'Sonia M., Productrice de Miel Bio — Nabeul, Tunisie', en: 'Sonia M., Organic Honey Producer — Nabeul, Tunisia', ar: 'سونيا م.، منتجة عسل عضوي — نابل، تونس' },
    t3: {
      fr: "Produit très prometteur. En tant que vétérinaire spécialisé, je recommande V-BLOCK pour sa formule sûre et son efficacité prouvée.",
      en: "Very promising product. As a specialized veterinarian, I recommend V-BLOCK for its safe formula and proven effectiveness.",
      ar: "منتج واعد جداً. كطبيب بيطري متخصص، أوصي بـ V-BLOCK لتركيبته الآمنة وفعاليته المثبتة.",
    },
    t3Author: { fr: 'Dr. Karim T., Vétérinaire Apicole — Tunis, Tunisie', en: 'Dr. Karim T., Apicultural Veterinarian — Tunis, Tunisia', ar: 'د. كريم ت.، طبيب بيطري للنحل — تونس، تونس' },
    note: {
      fr: '* Témoignages de testeurs bêta — lancement officiel bientôt.',
      en: '* Beta tester testimonials — official launch coming soon.',
      ar: '* شهادات مختبري النسخة التجريبية — الإطلاق الرسمي قريباً.',
    },
  },
  faq: {
    headline: { fr: 'Questions Fréquentes', en: 'Frequently Asked Questions', ar: 'الأسئلة الشائعة' },
    q1: { fr: "Qu'est-ce que la Varroa et pourquoi est-elle dangereuse?", en: 'What is Varroa and why is it dangerous?', ar: 'ما هو الفاروا ولماذا هو خطير؟' },
    a1: { fr: "Varroa destructor est un acarien parasite qui s'attaque aux abeilles adultes et au couvain. Sans traitement, elle peut décimer une colonie entière en 1 à 3 ans.", en: 'Varroa destructor is a parasitic mite that attacks adult bees and brood. Without treatment, it can decimate an entire colony in 1 to 3 years.', ar: 'الفاروا المدمر هو عث طفيلي يهاجم النحل البالغ والحضنة. بدون علاج، يمكنه القضاء على مستعمرة بأكملها في 1 إلى 3 سنوات.' },
    q2: { fr: 'Comment utiliser les bandelettes V-BLOCK?', en: 'How to use V-BLOCK strips?', ar: 'كيف تستخدم شرائط V-BLOCK؟' },
    a2: { fr: "Insérez simplement la bandelette entre deux cadres de la ruche. Aucun outil spécial n'est nécessaire. La diffusion des extraits de plantes se fait naturellement.", en: 'Simply insert the strip between two frames of the hive. No special tools needed. The diffusion of plant extracts happens naturally.', ar: 'أدخل الشريط ببساطة بين إطارين في الخلية. لا حاجة لأدوات خاصة. ينتشر مستخلص النباتات بشكل طبيعي.' },
    q3: { fr: 'V-BLOCK est-il sans danger pour les abeilles et le miel?', en: 'Is V-BLOCK safe for bees and honey?', ar: 'هل V-BLOCK آمن للنحل والعسل؟' },
    a3: { fr: "Oui. V-BLOCK est 100% biologique, composé uniquement d'extraits végétaux. Il ne laisse aucun résidu chimique dans le miel.", en: 'Yes. V-BLOCK is 100% organic, made only from plant extracts. It leaves no chemical residue in honey.', ar: 'نعم. V-BLOCK عضوي 100%، مصنوع فقط من مستخلصات نباتية. لا يترك أي بقايا كيميائية في العسل.' },
    q4: { fr: "À quelle fréquence faut-il appliquer V-BLOCK?", en: 'How often should V-BLOCK be applied?', ar: 'كم مرة يجب تطبيق V-BLOCK؟' },
    a4: { fr: "Le protocole recommandé sera fourni avec le produit. Un traitement saisonnier suffit généralement selon le niveau d'infestation.", en: 'The recommended protocol will be provided with the product. A seasonal treatment is generally sufficient depending on the level of infestation.', ar: 'سيتم توفير البروتوكول الموصى به مع المنتج. العلاج الموسمي يكفي عادة حسب مستوى الإصابة.' },
    q5: { fr: 'V-BLOCK est-il certifié bio?', en: 'Is V-BLOCK certified organic?', ar: 'هل V-BLOCK معتمد عضوياً؟' },
    a5: { fr: 'Le processus de certification est en cours. V-BLOCK est formulé selon les standards biologiques les plus stricts.', en: 'The certification process is underway. V-BLOCK is formulated according to the strictest organic standards.', ar: 'عملية الاعتماد جارية. تم تصنيع V-BLOCK وفقاً لأكثر المعايير العضوية صرامة.' },
    q6: { fr: 'Où puis-je acheter V-BLOCK?', en: 'Where can I buy V-BLOCK?', ar: 'أين يمكنني شراء V-BLOCK؟' },
    a6: { fr: "V-BLOCK sera bientôt disponible. Inscrivez-vous à notre liste d'attente pour être notifié en premier.", en: 'V-BLOCK will be available soon. Sign up for our waitlist to be notified first.', ar: 'سيكون V-BLOCK متاحاً قريباً. سجّل في قائمة الانتظار ليصلك الإشعار أولاً.' },
  },
  waitlist: {
    headline: { fr: 'Soyez Parmi les Premiers', en: 'Be Among the First', ar: 'كن من الأوائل' },
    sub: {
      fr: "Inscrivez-vous pour être notifié au lancement et recevoir une offre exclusive.",
      en: 'Sign up to be notified at launch and receive an exclusive offer.',
      ar: 'سجّل ليصلك إشعار عند الإطلاق واحصل على عرض حصري.',
    },
    firstName: { fr: 'Prénom', en: 'First Name', ar: 'الاسم الأول' },
    lastName: { fr: 'Nom', en: 'Last Name', ar: 'اسم العائلة' },
    email: { fr: 'Adresse email', en: 'Email address', ar: 'البريد الإلكتروني' },
    phone: { fr: 'Téléphone (optionnel)', en: 'Phone (optional)', ar: 'الهاتف (اختياري)' },
    profile: { fr: 'Profil', en: 'Profile', ar: 'الملف الشخصي' },
    profileOptions: {
      fr: ['Apiculteur Amateur', 'Producteur Professionnel', 'Coopérative Agricole', 'Vétérinaire', 'Autre'],
      en: ['Amateur Beekeeper', 'Professional Producer', 'Agricultural Cooperative', 'Veterinarian', 'Other'],
      ar: ['نحّال هاوٍ', 'منتج محترف', 'تعاونية زراعية', 'طبيب بيطري', 'أخرى'],
    },
    message: { fr: 'Message (optionnel)', en: 'Message (optional)', ar: 'رسالة (اختياري)' },
    submit: { fr: "Rejoindre la Liste d'Attente", en: 'Join the Waitlist', ar: 'انضم لقائمة الانتظار' },
    hiveCount: { fr: 'Nombre de ruches (optionnel)', en: 'Hive count (optional)', ar: 'عدد الخلايا (اختياري)' },
    submitting: { fr: 'Envoi en cours...', en: 'Submitting...', ar: 'جارٍ الإرسال...' },
    success: {
      fr: "Merci ! Vous serez notifié(e) en priorité au lancement de V-BLOCK.",
      en: "Thank you! You'll be notified first when V-BLOCK launches.",
      ar: "شكراً! ستكون من أوائل من يتلقى إشعاراً عند إطلاق V-BLOCK.",
    },
    errorDuplicate: {
      fr: 'Cet email est déjà inscrit sur la liste d\'attente.',
      en: 'This email is already on the waitlist.',
      ar: 'هذا البريد الإلكتروني مسجل بالفعل في قائمة الانتظار.',
    },
    errorGeneric: {
      fr: 'Une erreur est survenue. Veuillez réessayer.',
      en: 'Something went wrong. Please try again.',
      ar: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
    },
    whatsapp: { fr: 'Contactez-nous sur WhatsApp', en: 'Contact us on WhatsApp', ar: 'تواصل معنا على واتساب' },
    instagram: { fr: 'Suivez-nous sur Instagram', en: 'Follow us on Instagram', ar: 'تابعنا على إنستغرام' },
    trust1: { fr: 'Données sécurisées', en: 'Secure data', ar: 'بيانات آمنة' },
    trust2: { fr: 'Pas de spam', en: 'No spam', ar: 'بدون إزعاج' },
    trust3: { fr: 'Projet Tunisien', en: 'Tunisian Project', ar: 'مشروع تونسي' },
  },
  community: {
    headline: { fr: 'Notre Communauté', en: 'Our Community', ar: 'مجتمعنا' },
    followBtn: { fr: 'Suivez-nous sur Instagram', en: 'Follow us on Instagram', ar: 'تابعنا على إنستغرام' },
  },
  footer: {
    tagline: { fr: 'Natural Protection for a Thriving Hive.', en: 'Natural Protection for a Thriving Hive.', ar: 'حماية طبيعية لخلية مزدهرة.' },
    rights: { fr: '© 2025 V-BLOCK. Tous droits réservés.', en: '© 2025 V-BLOCK. All rights reserved.', ar: '© 2025 V-BLOCK. جميع الحقوق محفوظة.' },
    country: { fr: 'Tunisie', en: 'Tunisia', ar: 'تونس' },
  },
} as const;

type Translations = typeof translations;

interface I18nContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
  isRTL: boolean;
}

const I18nContext = createContext<I18nContextType>({
  lang: 'fr',
  setLang: () => {},
  t: translations,
  isRTL: false,
});

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>('fr');

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = l === 'ar' ? 'ar' : l === 'en' ? 'en' : 'fr';
  }, []);

  return (
    <I18nContext.Provider value={{ lang, setLang, t: translations, isRTL: lang === 'ar' }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
