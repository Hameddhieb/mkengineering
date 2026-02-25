// Sticky header state
const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
const langSelect = document.querySelector('#language-select');
const pageLoader = document.querySelector('.page-loader');
const themeToggle = document.querySelector('#theme-toggle');

const translations = {
  ar: {
    skip_link: 'تجاوز إلى المحتوى',
    brand_tagline: 'حلول هندسية معتمدة',
    nav_toggle: 'فتح وإغلاق القائمة',
    nav_services: 'الخدمات',
    nav_about: 'من نحن',
    nav_team: 'فريقنا',
    nav_projects: 'مشاريعنا',
    nav_contact: 'التواصل',
    theme_dark: 'داكن',
    theme_light: 'فاتح',
    cta_contact: 'اتصل بنا',
    eyebrow_hero: 'مكتب استشارات هندسية',
    eyebrow_services: 'الخدمات',
    eyebrow_about: 'عن MK ENGINEERING',
    eyebrow_team: 'الفريق',
    eyebrow_contact: 'التواصل',
    hero_title: 'مكتب دراسات معتمد في الهندسة الكهربائية',
    hero_text: 'MK ENGINEERING يقدم حلولاً تقنية دقيقة مبنية على المعايير الهندسية المعتمدة، مع إشراف مهني يضمن سلامة التنفيذ والالتزام التنظيمي في كل مرحلة من المشروع.',
    hero_btn_primary: 'احجز استشارة',
    hero_btn_secondary: 'استعرض الخدمات',
    hero_panel_title: 'مجالات الاعتماد',
    services_title: 'خدمات هندسية متخصصة',
    service_1_title: 'الكهرباء',
    service_1_text: 'تصميم ومتابعة أنظمة الكهرباء للمباني الصناعية والتجارية والسكنية وفق المعايير الفنية المعتمدة.',
    service_2_title: 'الحماية من الحرائق',
    service_2_text: 'إعداد دراسات الحماية والإنذار والإخلاء وإصدار التوصيات الفنية لضمان السلامة والامتثال.',
    service_3_title: 'التدقيق ونظم التصرف في الطاقة',
    service_3_text: 'تشخيص استهلاك الطاقة، إعداد خطط التحسين، ومرافقة المؤسسات لتطبيق أنظمة إدارة طاقية فعّالة.',
    service_4_title: 'الفوطاضوئية',
    service_4_text: 'دراسات وتركيب حلول الطاقة الشمسية الفوطاضوئية مع حسابات مردودية دقيقة وإشراف تنفيذي مهني.',
    about_title: 'خبرة معتمدة وإشراف تقني دقيق',
    about_text_1: 'نعتمد منهجية هندسية واضحة تبدأ بتحليل المشروع وتحديد المتطلبات الفنية بدقة، ثم إعداد الدراسات التنفيذية ومتابعة التطبيق الميداني بما يضمن التوافق مع القوانين الفنية ومعايير الجودة والسلامة.',
    about_text_2: 'فريق المكتب يركز على الحلول القابلة للتنفيذ، إدارة المخاطر التقنية، وتحقيق التوازن بين الكفاءة الطاقية والاستدامة والتكلفة التشغيلية.',
    team_title: 'فريق هندسي متعدد الاختصاصات',
    team_member_1_name:'محمد قصمتيني',
    team_member_1_role: 'رئيس تنفيذي',
    team_member_1_text: 'قيادة دراسات المشاريع والإشراف على التنسيق التقني وضمان مطابقة الحلول للمواصفات.',
    team_member_2_name: 'فريق الدراسات الكهربائية',
    team_member_2_role: 'قسم الهندسة الكهربائية',
    team_member_2_text: 'إعداد المخططات التنفيذية والحسابات الفنية لأنظمة القدرة والتحكم والحماية.',
    team_member_3_name: 'فريق الطاقات المتجددة',
    team_member_3_role: 'قسم الفوطاضوئية والطاقة',
    team_member_3_text: 'تحليل الأداء الطاقي وتطوير حلول فوطاضوئية فعالة مع متابعة التنفيذ والاختبارات.',
    contact_title: 'تواصل مباشر مع المكتب',
    contact_info_title: 'بيانات التواصل',
    label_address: 'العنوان',
    contact_address: 'طريق المهدية كم 0.5 إقامة الجنان<br />الذهبي الطابق الخامس، مكتب عدد 53<br />3002 صفاقس تونس',
    label_phone: 'الهاتف',
    label_mobile: 'الجوال',
    label_email: 'البريد الإلكتروني',
    form_title: 'طلب استشارة',
    form_name: 'الاسم الكامل',
    form_email: 'البريد الإلكتروني',
    form_phone: 'رقم الهاتف',
    form_service: 'نوع الخدمة',
    option_select: 'اختر الخدمة',
    form_message: 'تفاصيل المشروع',
    form_submit: 'إرسال الطلب',
    placeholder_name: 'أدخل اسمك الكامل',
    placeholder_email: 'example@company.com',
    placeholder_phone: '+216 ...',
    placeholder_message: 'اكتب تفاصيل المشروع...',
    sponsors_title: 'شركاؤنا',
    sponsors_text: 'شبكة مشاريع مع مؤسسات وشركاء عبر قطاعات متعددة.',
    footer_tagline: 'حلول هندسية معتمدة',
    footer_services: 'الخدمات',
    footer_contact: 'التواصل',
    err_name: 'يرجى إدخال اسم كامل صحيح.',
    err_email: 'يرجى إدخال بريد إلكتروني صالح.',
    err_phone: 'يرجى إدخال رقم هاتف صالح.',
    err_service: 'يرجى اختيار الخدمة المطلوبة.',
    err_message: 'يرجى كتابة تفاصيل كافية للمشروع (15 حرفاً على الأقل).',
    form_error: 'يرجى مراجعة الحقول المعلّمة قبل الإرسال.',
    form_success: 'تم استلام طلبكم بنجاح. سيتم التواصل معكم في أقرب وقت.'
  },
  fr: {
    skip_link: 'Aller au contenu',
    brand_tagline: 'Solutions d ingenierie certifiees',
    brand_subtitle: 'Azhar Rouiha - Cheffe de Projet',
    nav_toggle: 'Ouvrir/fermer le menu',
    nav_services: 'Services',
    nav_about: 'A Propos',
    nav_team: 'Equipe',
    nav_projects: 'Nos Projets',
    nav_contact: 'Contact',
    theme_dark: 'Sombre',
    theme_light: 'Clair',
    cta_contact: 'Nous Contacter',
    eyebrow_hero: 'Bureau de conseil en ingenierie',
    eyebrow_services: 'Services',
    eyebrow_about: 'A propos de MK ENGINEERING',
    eyebrow_team: 'Equipe',
    eyebrow_contact: 'Contact',
    hero_title: 'Bureau d etudes agree en ingenierie electrique',
    hero_text: 'MK ENGINEERING fournit des solutions techniques precises conformes aux normes, avec un pilotage professionnel garantissant securite, conformite et qualite d execution.',
    hero_btn_primary: 'Demander une consultation',
    hero_btn_secondary: 'Voir les services',
    hero_panel_title: 'Domaines agrees',
    services_title: 'Services d ingenierie specialises',
    service_1_title: 'Electricite',
    service_1_text: 'Conception et suivi des systemes electriques pour batiments industriels, commerciaux et residentiels selon les normes en vigueur.',
    service_2_title: 'Protection incendie',
    service_2_text: 'Etudes de protection, alarme et evacuation avec recommandations techniques pour la securite et la conformite.',
    service_3_title: 'Audit et management de l energie',
    service_3_text: 'Diagnostic de consommation, plans d optimisation et accompagnement a la mise en place de systemes de management energetique.',
    service_4_title: 'Photovoltaique',
    service_4_text: 'Etudes et solutions photovoltaiques avec calcul de rentabilite et suivi d execution professionnel.',
    about_title: 'Expertise certifiee et supervision technique rigoureuse',
    about_text_1: 'Notre methodologie commence par une analyse precise du projet, suivie de l elaboration des etudes d execution et d un accompagnement terrain conforme aux normes.',
    about_text_2: 'L equipe se concentre sur des solutions realistes, la maitrise des risques techniques et l equilibre entre performance energetique, durabilite et cout.',
    team_title: 'Equipe d ingenierie pluridisciplinaire',
    team_member_1_name: 'Mohamed ksamtini',
    team_member_1_role: 'PDG',
    team_member_1_text: 'Pilotage des etudes, coordination technique et verification de la conformite des solutions.',
    team_member_2_name: 'Equipe Etudes Electriques',
    team_member_2_role: 'Pole Ingenierie Electrique',
    team_member_2_text: 'Preparation des plans d execution et des calculs techniques des systemes de puissance, controle et protection.',
    team_member_3_name: 'Equipe Energies Renouvelables',
    team_member_3_role: 'Pole Photovoltaique et Energie',
    team_member_3_text: 'Analyse des performances energetiques, conception de solutions PV et suivi de mise en service.',
    contact_title: 'Contact direct avec le bureau',
    contact_info_title: 'Coordonnees',
    label_address: 'Adresse',
    contact_address: 'Route de Mahdia Km 0.5 Residence El Jenene<br />Eddhahabi 5eme etage, Bureau 53<br />3002 Sfax, Tunisie',
    label_phone: 'Telephone',
    label_mobile: 'Mobile',
    label_email: 'Email',
    form_title: 'Demande de consultation',
    form_name: 'Nom complet',
    form_email: 'Email',
    form_phone: 'Telephone',
    form_service: 'Type de service',
    option_select: 'Choisir un service',
    form_message: 'Details du projet',
    form_submit: 'Envoyer la demande',
    placeholder_name: 'Entrez votre nom complet',
    placeholder_email: 'example@entreprise.com',
    placeholder_phone: '+216 ...',
    placeholder_message: 'Decrivez votre projet...',
    sponsors_title: 'Nos Partenaires',
    sponsors_text: 'Un reseau de projets avec des institutions et des partenaires multisectoriels.',
    footer_tagline: 'Solutions d ingenierie certifiees',
    footer_services: 'Services',
    footer_contact: 'Contact',
    err_name: 'Veuillez saisir un nom complet valide.',
    err_email: 'Veuillez saisir un email valide.',
    err_phone: 'Veuillez saisir un numero de telephone valide.',
    err_service: 'Veuillez choisir le service souhaite.',
    err_message: 'Veuillez decrire le projet (minimum 15 caracteres).',
    form_error: 'Veuillez corriger les champs signales avant envoi.',
    form_success: 'Votre demande a ete recue avec succes. Nous vous contacterons tres bientot.'
  },
  en: {
    skip_link: 'Skip to content',
    brand_tagline: 'Certified Engineering Solutions',
    brand_subtitle: 'Azhar Rouiha - Project Lead',
    nav_toggle: 'Open and close menu',
    nav_services: 'Services',
    nav_about: 'About',
    nav_team: 'Team',
    nav_projects: 'Our Projects',
    nav_contact: 'Contact',
    theme_dark: 'Dark',
    theme_light: 'Light',
    cta_contact: 'Contact Us',
    eyebrow_hero: 'Engineering Consultancy Office',
    eyebrow_services: 'Services',
    eyebrow_about: 'About MK ENGINEERING',
    eyebrow_team: 'Team',
    eyebrow_contact: 'Contact',
    hero_title: 'Certified Engineering Office in Electrical Engineering',
    hero_text: 'MK ENGINEERING delivers precise technical solutions aligned with recognized standards, with professional supervision that ensures safety, compliance, and execution quality at every stage.',
    hero_btn_primary: 'Book a Consultation',
    hero_btn_secondary: 'Explore Services',
    hero_panel_title: 'Accredited Fields',
    services_title: 'Specialized Engineering Services',
    service_1_title: 'Electrical Engineering',
    service_1_text: 'Design and supervision of electrical systems for industrial, commercial, and residential buildings according to approved standards.',
    service_2_title: 'Fire Protection',
    service_2_text: 'Preparation of protection, alarm, and evacuation studies with technical recommendations for safety and compliance.',
    service_3_title: 'Energy Audit and Management Systems',
    service_3_text: 'Consumption diagnostics, optimization plans, and support for implementing effective energy management systems.',
    service_4_title: 'Photovoltaics',
    service_4_text: 'Studies and implementation of photovoltaic solutions with accurate yield calculations and professional execution supervision.',
    about_title: 'Certified Expertise and Precise Technical Supervision',
    about_text_1: 'Our engineering methodology starts with detailed project analysis, followed by execution studies and field follow-up to ensure compliance with technical regulations and quality standards.',
    about_text_2: 'Our team focuses on practical solutions, technical risk control, and balance between energy efficiency, sustainability, and operating cost.',
    team_title: 'Multidisciplinary Engineering Team',
    team_member_1_name: 'Mohamed Ksamtini ',
    team_member_1_role: 'Ceo',
    team_member_1_text: 'Leads project studies, technical coordination, and compliance checks for all engineering deliverables.',
    team_member_2_name: 'Electrical Studies Team',
    team_member_2_role: 'Electrical Engineering Division',
    team_member_2_text: 'Develops execution drawings and technical calculations for power, control, and protection systems.',
    team_member_3_name: 'Renewable Energy Team',
    team_member_3_role: 'PV and Energy Division',
    team_member_3_text: 'Analyzes energy performance, develops PV solutions, and follows commissioning and testing activities.',
    contact_title: 'Direct Contact with the Office',
    contact_info_title: 'Contact Information',
    label_address: 'Address',
    contact_address: 'Route Mahdia Km 0.5 Residence El Jenene<br />Eddhahabi, 5th Floor, Office 53<br />3002 Sfax, Tunisia',
    label_phone: 'Phone',
    label_mobile: 'Mobile',
    label_email: 'Email',
    form_title: 'Consultation Request',
    form_name: 'Full Name',
    form_email: 'Email',
    form_phone: 'Phone Number',
    form_service: 'Service Type',
    option_select: 'Select a service',
    form_message: 'Project Details',
    form_submit: 'Submit Request',
    placeholder_name: 'Enter your full name',
    placeholder_email: 'example@company.com',
    placeholder_phone: '+216 ...',
    placeholder_message: 'Write your project details...',
    sponsors_title: 'Our Partners',
    sponsors_text: 'A project network built with institutions and partners across sectors.',
    footer_tagline: 'Certified Engineering Solutions',
    footer_services: 'Services',
    footer_contact: 'Contact',
    err_name: 'Please enter a valid full name.',
    err_email: 'Please enter a valid email address.',
    err_phone: 'Please enter a valid phone number.',
    err_service: 'Please select the required service.',
    err_message: 'Please provide enough project details (at least 15 characters).',
    form_error: 'Please review the marked fields before submitting.',
    form_success: 'Your request was received successfully. We will contact you shortly.'
  }
};

let currentLang = 'ar';
let currentTheme = localStorage.getItem('mk_theme') === 'dark' ? 'dark' : 'light';

const updateThemeButtonLabel = () => {
  if (!themeToggle) return;
  const key = currentTheme === 'dark' ? 'theme_light' : 'theme_dark';
  themeToggle.textContent = translations[currentLang][key] || translations.en[key];
};

const applyTheme = (theme, persist = true) => {
  currentTheme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeButtonLabel();
  if (persist) localStorage.setItem('mk_theme', currentTheme);
};

if (pageLoader) {
  window.setTimeout(() => {
    pageLoader.classList.add('is-hidden');
    document.body.classList.remove('is-loading');
  }, 4000);
}

const updateHeaderState = () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 8);
};

const applyLanguage = (lang) => {
  if (!translations[lang]) return;
  currentLang = lang;
  const dict = translations[lang];

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (!dict[key]) return;
    if (key === 'contact_address') {
      element.innerHTML = dict[key];
    } else {
      element.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (!dict[key]) return;
    element.setAttribute('placeholder', dict[key]);
  });

  if (langSelect) {
    langSelect.value = lang;
  }

  updateThemeButtonLabel();
  localStorage.setItem('mk_lang', lang);
};

window.addEventListener('scroll', updateHeaderState, { passive: true });
updateHeaderState();

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    navList.classList.toggle('open');
  });

  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navList.classList.remove('open');
    });
  });
}

if (langSelect) {
  langSelect.addEventListener('change', () => applyLanguage(langSelect.value));
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
}

const revealItems = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && revealItems.length) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 45, 220)}ms`;
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const form = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

if (form) {
  const validatorKeys = {
    fullName: 'err_name',
    email: 'err_email',
    phone: 'err_phone',
    service: 'err_service',
    message: 'err_message'
  };

  const validators = {
    fullName: (value) => value.trim().length >= 3,
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()),
    phone: (value) => /^[+]?[-\d\s]{8,}$/.test(value.trim()),
    service: (value) => value.trim() !== '',
    message: (value) => value.trim().length >= 15
  };

  const setFieldState = (input, valid, message = '') => {
    const field = input.closest('.field') || input.parentElement;
    const helper = field ? field.querySelector('.field-message') : null;
    if (!field || !helper) return;
    field.classList.toggle('invalid', !valid);
    field.classList.toggle('valid', valid);
    helper.textContent = message;
  };

  const clearFieldState = (input) => {
    const field = input.closest('.field') || input.parentElement;
    const helper = field ? field.querySelector('.field-message') : null;
    if (!field || !helper) return;
    field.classList.remove('invalid', 'valid');
    helper.textContent = '';
  };

  const validateInput = (input) => {
    const rule = validators[input.name];
    if (!rule) return true;

    const isValid = rule(input.value);
    const message = isValid ? '' : translations[currentLang][validatorKeys[input.name]];
    setFieldState(input, isValid, message);
    return isValid;
  };

  Array.from(form.elements).forEach((element) => {
    if (!(element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement || element instanceof HTMLSelectElement)) return;
    if (!validators[element.name]) return;

    element.addEventListener('blur', () => validateInput(element));
    element.addEventListener('input', () => {
      if (element.closest('.field')?.classList.contains('invalid')) {
        validateInput(element);
      }
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputs = Array.from(form.elements).filter(
      (element) =>
        (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement || element instanceof HTMLSelectElement) &&
        validators[element.name]
    );

    const allValid = inputs.every((input) => validateInput(input));

    if (!allValid) {
      if (formStatus) {
        formStatus.textContent = translations[currentLang].form_error;
        formStatus.className = 'form-status error';
      }
      return;
    }

    if (formStatus) {
      formStatus.textContent = translations[currentLang].form_success;
      formStatus.className = 'form-status success';
    }

    form.reset();
    inputs.forEach((input) => clearFieldState(input));
  });
}

applyTheme(currentTheme, false);
applyLanguage(localStorage.getItem('mk_lang') || 'ar');
