// Sticky header state
const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
const navOverlay = document.querySelector('#nav-overlay');
const mainNav = document.querySelector('.main-nav');
const langSelect = document.querySelector('#language-select');
const pageLoader = document.querySelector('.page-loader');
const themeToggle = document.querySelector('#theme-toggle');

const translations = {
  ar: {
    skip_link: 'تجاوز إلى المحتوى',
    brand_tagline: 'حلول هندسية معتمدة',
    nav_toggle: 'فتح وإغلاق القائمة',
    nav_aria: 'التنقل الرئيسي',
    nav_services: 'مجالات التدخل',
    nav_about: 'التعريف',
    nav_team: 'المسار المهني',
    nav_projects: 'مشاريعنا',
    nav_contact: 'التواصل',
    theme_dark: 'داكن',
    theme_light: 'فاتح',
    cta_contact: 'تواصل معنا',
    hero_badge: 'MK ENGINEERING',
    hero_main_title: 'مكتب دراسات متعدد الاختصاصات',
    hero_main_text: 'MK ENGINEERING مكتب هندسي متعدد الاختصاصات متخصص في الكهرباء والسلامة من الحرائق والأنظمة الفوطاضوئية والتدقيق الطاقي والتصرف في الطاقة عبر كل مراحل المشروع.',
    hero_main_btn_primary: 'مشاريعنا',
    hero_main_btn_secondary: 'استكشف مجالاتنا',
    cert_title: 'خبرات معتمدة',
    cert_1: 'مهندس استشاري في الكهرباء (معتمد من MEHAT)',
    cert_2: 'مهندس استشاري في السلامة من الحرائق (معتمد من ONPC)',
    cert_3: 'خبير تدقيق طاقي (معتمد من ANME)',
    cert_4: 'خبير في الفوطاضوئية (معتمد من ANME)',
    cert_5: 'خبير نظم التصرف في الطاقة (معتمد من GIZ)',
    eyebrow_hero: 'مكتب استشارات هندسية',
    eyebrow_services: 'مجالات التدخل',
    eyebrow_about: 'عن MK ENGINEERING',
    eyebrow_team: 'الفريق',
    eyebrow_contact: 'التواصل',
    hero_title: 'مكتب دراسات معتمد في الهندسة الكهربائية',
    hero_text: 'MK ENGINEERING يقدم حلولاً تقنية دقيقة مبنية على المعايير الهندسية المعتمدة، مع إشراف مهني يضمن سلامة التنفيذ والالتزام التنظيمي في كل مرحلة من المشروع.',
    hero_btn_primary: 'احجز استشارة',
    hero_btn_secondary: 'استعرض الخدمات',
    hero_panel_title: 'مجالات الاعتماد',
    services_title: 'النطاق التقني الذي يقدمه MK Engineering',
    service_1_title: 'محطات التحويل MT/BT',
    service_1_text: 'محطات الجهد المتوسط والمنخفض وأنظمة القياس وهندسة التوزيع.',
    service_2_title: 'أنظمة السلامة من الحرائق',
    service_2_text: 'دراسات الكشف والشفط والمكافحة مع ملفات مطابقة لتراخيص البناء.',
    service_3_title: 'التدقيق والتصرف في الطاقة',
    service_3_text: 'تشخيص الاستهلاك وخطط التحسين ومرافقة تطبيق ISO 50001.',
    service_4_title: 'الهندسة الفوطاضوئية',
    service_4_text: 'ملفات ANME/STEG والحسابات الفنية والمتابعة التنفيذية.',
    about_title: 'من رخصة البناء إلى القبول النهائي',
    about_text_1: 'يقع MK ENGINEERING بصفاقس تونس ويتدخل في جميع مراحل المشروع من المصادقة الفنية إلى الاستلام النهائي مع خبرة قوية في الكهرباء والسلامة من الحرائق والفوطاضوئية والتدقيق والتصرف الطاقي.',
    about_text_2: 'يقدّم المكتب دراسات كاملة وملفات طلب عروض ومخططات تنفيذية ومتابعة ميدانية للمشاريع الصناعية والثالثية والعامة والسكنية داخل تونس وخارجها.',
    team_title: 'المسار المهني للمؤسس',
    team_member_1_name: 'KESSENTINI MOHAMED',
    team_member_1_role: 'المؤسس والمدير الاستشاري',
    team_member_1_text: 'منذ 2013 يقود MK ENGINEERING في دراسات ومتابعة الكهرباء والسلامة من الحرائق والفوطاضوئية والتدقيق والتصرف الطاقي.',
    contact_title: 'المعطيات الرسمية للمكتب',
    contact_info_title: 'بيانات المكتب',
    label_manager: 'المدير',
    manager_name: 'KESSENTINI MOHAMED',
    label_address: 'العنوان',
    contact_address: 'طريق المهدية كم 0.5 إقامة الجنان<br />الذهبي الطابق الخامس، مكتب عدد 53<br />3002 صفاقس تونس',
    label_phone: 'الهاتف',
    label_phonefax: 'الهاتف / الفاكس',
    label_mobile: 'الجوال',
    label_email: 'البريد الإلكتروني',
    office_address: 'شارع المهدية كلم 0.5، عمارة "الجناح الذهبي"<br />الطابق الخامس، مكتب عدد 53، 3002 صفاقس، تونس',
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
    sponsors_text: 'شبكة موثوقة من المؤسسات والمالكين الصناعيين.',
    activities_badge: 'الأنشطة',
    activities_title: 'أنشطة مفصلة ومخرجات فنية',
    activities_block_1_title: 'المخرجات الهندسية',
    activities_block_1_item_1: 'إعداد ملفات السلامة من الحرائق الخاصة برخص البناء.',
    activities_block_1_item_2: 'إعداد ملفات الدراسات الفوطاضوئية (ANME, STEG, DAO).',
    activities_block_1_item_3: 'إعداد كراسات الشروط لأقساط الكهرباء والأمن والفوطاضوئية.',
    activities_block_1_item_4: 'مخططات أحادية وخطط توزيع وميزانيات قدرة وحسابات الكوابل.',
    activities_block_1_item_5: 'جداول الكميات ومخططات التنفيذ والتحيين أثناء الإنجاز.',
    activities_block_2_title: 'الأنظمة المشمولة',
    activities_block_2_item_1: 'الإنارة الداخلية والخارجية والمآخذ والمحركات وقنوات الكوابل.',
    activities_block_2_item_2: 'أنظمة التأريض والحماية من الصواعق.',
    activities_block_2_item_3: 'الشبكات الضعيفة: بيانات وهاتف ومراقبة دخول وكاميرات.',
    activities_block_2_item_4: 'الكشف والشفط ومكافحة الحرائق.',
    activities_block_2_item_5: 'محطات التحويل والمولدات ومحطات الطاقة الشمسية.',
    resources_badge: 'الموارد',
    resources_title: 'الموارد البشرية والأدوات الهندسية',
    resources_block_1_title: 'الموارد البشرية',
    resources_block_1_item_1: 'مهندس كهرباء واحد (18 سنة خبرة).',
    resources_block_1_item_2: 'مهندس إعلامية واحد (18 سنة خبرة).',
    resources_block_1_item_3: '3 تقنيين سامين في الكهرباء (أكثر من 8 سنوات خبرة).',
    resources_block_2_title: 'أدوات البرمجة والمحاكاة',
    resources_block_2_item_1: 'منظومة MS Office وتقارير تقنية متقدمة.',
    resources_block_2_item_2: 'AutoCAD و REVIT و SolidWorks.',
    resources_block_2_item_3: 'CANECO و ECODIAL و DIALUX و PVGIS.',
    resources_block_2_item_4: 'محاكاة ANME PROFITPV للجهد المنخفض والمتوسط.',
    training_badge: 'التكوين',
    training_title: 'أهم الدورات المهنية',
    training_item_1: 'تكوين ISO 50001:2018 (GIZ-ANME-TUV Rheinland، نوفمبر 2019).',
    training_item_2: 'تكوين دراسات المشاريع الفوطاضوئية المرتبطة بالشبكة (GIZ-ANME، نوفمبر 2018).',
    training_item_3: 'تكوين السلامة من الحرائق من طرف الديوان الوطني للحماية المدنية.',
    training_item_4: 'تكوينات في الأتمتة وAutoCAD والإنجليزية وISO9001 وNavision.',
    training_item_5: 'تكوين SPC للحقن والبثق بمركز CTC (أفريل 2008).',
    footer_tagline: 'مكتب دراسات متعدد الاختصاصات',
    footer_services: 'المجالات المعتمدة',
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
    skip_link: "Aller au contenu",
    brand_tagline: "Solutions d'ingénierie certifiées",
    brand_subtitle: "Mohamed Kessentini - PDG",
    nav_toggle: "Ouvrir/fermer le menu",
    nav_aria: "Navigation principale",
    nav_services: "Domaines d'intervention",
    nav_about: "Présentation",
    nav_team: "Parcours",
    nav_projects: "Nos projets",
    nav_contact: "Contact",
    theme_dark: "Sombre",
    theme_light: "Clair",
    cta_contact: "Nous contacter",
    hero_badge: "MK ENGINEERING",
    hero_main_title: "Bureau d'études pluridisciplinaire",
    hero_main_text: "MK ENGINEERING est un bureau d'études pluridisciplinaire spécialisé en électricité, sécurité incendie, photovoltaïque, audit énergétique et management de l'énergie sur l'ensemble des phases de projet.",
    hero_main_btn_primary: "Nos projets",
    hero_main_btn_secondary: "Explorer nos domaines",
    cert_title: "Expertises certifiées",
    cert_1: "Ingénieur-conseil en électricité (certifié par le MEHAT)",
    cert_2: "Ingénieur-conseil en sécurité incendie (certifié par l'ONPC)",
    cert_3: "Expert auditeur en énergie (certifié par l'ANME)",
    cert_4: "Expert en photovoltaïque (certifié par l'ANME)",
    cert_5: "Expert en système de management de l'énergie (certifié par GIZ)",
    eyebrow_hero: "Bureau de conseil en ingénierie",
    eyebrow_services: "Domaines d'intervention",
    eyebrow_about: "À propos de MK ENGINEERING",
    eyebrow_team: "Équipe",
    eyebrow_contact: "Contact",
    hero_title: "Bureau d'études agréé en ingénierie électrique",
    hero_text: "MK ENGINEERING fournit des solutions techniques précises conformes aux normes, avec un pilotage professionnel garantissant sécurité, conformité et qualité d'exécution.",
    hero_btn_primary: "Demander une consultation",
    hero_btn_secondary: "Voir les services",
    hero_panel_title: "Domaines agréés",
    services_title: "Périmètre technique assuré par MK Engineering",
    service_1_title: "Postes de transformation MT/BT",
    service_1_text: "Postes moyenne et basse tension, comptage et architecture de distribution.",
    service_2_title: "Systèmes de sécurité incendie",
    service_2_text: "Études de détection, désenfumage et lutte contre l'incendie conformes aux exigences réglementaires.",
    service_3_title: "Audit et management de l'énergie",
    service_3_text: "Diagnostic des consommations, optimisation et accompagnement ISO 50001.",
    service_4_title: "Ingénierie photovoltaïque",
    service_4_text: "Dossiers ANME/STEG, dimensionnement, rentabilité et suivi d'exécution.",
    about_title: "Du permis de construire à la réception finale",
    about_text_1: "MK ENGINEERING est basé à Sfax, en Tunisie, et intervient sur toutes les phases du projet, avec une expertise solide en électricité, sécurité incendie, photovoltaïque, audit et management énergétique.",
    about_text_2: "Le bureau réalise des études complètes, des dossiers d'appels d'offres, des plans d'exécution et le suivi de chantier pour des projets industriels, tertiaires, publics et résidentiels.",
    team_title: "Parcours professionnel du fondateur",
    team_member_1_name: "KESSENTINI MOHAMED",
    team_member_1_role: "Fondateur et gérant, ingénieur-conseil",
    team_member_1_text: "Depuis 2013, il dirige MK ENGINEERING dans les études et le suivi en électricité, sécurité incendie, photovoltaïque, audit et management énergétique.",
    contact_title: "Informations officielles du bureau",
    contact_info_title: "Coordonnées du bureau",
    label_manager: "Gérant",
    manager_name: "KESSENTINI MOHAMED",
    label_address: "Adresse",
    contact_address: "Route de Mahdia Km 0.5, Résidence El Jenene<br />Eddhahabi, 5e étage, bureau 53<br />3002 Sfax, Tunisie",
    label_phone: "Téléphone",
    label_phonefax: "Téléphone / Fax",
    label_mobile: "Mobile",
    label_email: "Email",
    office_address: "Rue de Mahdia Km 0.5, immeuble \"Al Janah Al Dhahabi\"<br />5e étage, bureau n°53, 3002 Sfax, Tunisie",
    form_title: "Demande de consultation",
    form_name: "Nom complet",
    form_email: "Email",
    form_phone: "Téléphone",
    form_service: "Type de service",
    option_select: "Choisir un service",
    form_message: "Détails du projet",
    form_submit: "Envoyer la demande",
    placeholder_name: "Entrez votre nom complet",
    placeholder_email: "example@entreprise.com",
    placeholder_phone: "+216 ...",
    placeholder_message: "Décrivez votre projet...",
    sponsors_title: "Nos partenaires",
    sponsors_text: "Un réseau fiable d'institutions et d'acteurs industriels.",
    activities_badge: "Activités",
    activities_title: "Activités détaillées et livrables",
    activities_block_1_title: "Livrables d'ingénierie",
    activities_block_1_item_1: "Dossiers de sécurité incendie pour dépôts de permis de construire.",
    activities_block_1_item_2: "Dossiers d'études photovoltaïques (ANME, STEG, DAO).",
    activities_block_1_item_3: "Dossiers d'appels d'offres pour les lots électricité, sécurité et PV.",
    activities_block_1_item_4: "Schémas unifilaires, synoptiques, bilans de puissance et calculs de câbles.",
    activities_block_1_item_5: "Devis quantitatifs, plans d'exécution et mises à jour chantier.",
    activities_block_2_title: "Systèmes couverts",
    activities_block_2_item_1: "Éclairage intérieur/extérieur, prises, moteurs et chemins de câbles.",
    activities_block_2_item_2: "Mise à la terre et protection contre la foudre.",
    activities_block_2_item_3: "Courants faibles: data, téléphonie, contrôle d'accès, CCTV.",
    activities_block_2_item_4: "Détection incendie, désenfumage et lutte incendie.",
    activities_block_2_item_5: "Postes de transformation, groupes électrogènes et centrales PV.",
    resources_badge: "Ressources",
    resources_title: "Ressources humaines et outils d'ingénierie",
    resources_block_1_title: "Ressources humaines",
    resources_block_1_item_1: "1 ingénieur électricien (18 ans d'expérience).",
    resources_block_1_item_2: "1 ingénieur informatique (18 ans d'expérience).",
    resources_block_1_item_3: "3 techniciens supérieurs en électricité (8+ ans d'expérience).",
    resources_block_2_title: "Outils numériques et simulation",
    resources_block_2_item_1: "Écosystème MS Office et reporting avancé.",
    resources_block_2_item_2: "AutoCAD, REVIT, SolidWorks.",
    resources_block_2_item_3: "CANECO, ECODIAL, DIALUX, PVGIS.",
    resources_block_2_item_4: "Simulation ANME PROFITPV BT et MT.",
    training_badge: "Formation",
    training_title: "Formations professionnelles principales",
    training_item_1: "Formation ISO 50001:2018 (GIZ-ANME-TUV Rheinland, novembre 2019).",
    training_item_2: "Formation projets PV raccordés réseau (GIZ-ANME, novembre 2018).",
    training_item_3: "Formation sécurité incendie par l'Office National de la Protection Civile.",
    training_item_4: "Formations automatisme, AutoCAD, anglais, ISO9001 et Navision.",
    training_item_5: "Formation SPC injection/extrusion au CTC (avril 2008).",
    footer_tagline: "Bureau d'études pluridisciplinaire",
    footer_services: "Domaines certifiés",
    footer_contact: "Contact",
    err_name: "Veuillez saisir un nom complet valide.",
    err_email: "Veuillez saisir un email valide.",
    err_phone: "Veuillez saisir un numéro de téléphone valide.",
    err_service: "Veuillez choisir le service souhaité.",
    err_message: "Veuillez décrire le projet (minimum 15 caractères).",
    form_error: "Veuillez corriger les champs signalés avant envoi.",
    form_success: "Votre demande a été reçue avec succès. Nous vous contacterons très bientôt."
  },
  en: {
    skip_link: 'Skip to content',
    brand_tagline: 'Certified Engineering Solutions',
    brand_subtitle: 'Mohamed Kessentini - Ceo ',
    nav_toggle: 'Open and close menu',
    nav_aria: 'Primary navigation',
    nav_services: 'Areas of Intervention',
    nav_about: 'Presentation',
    nav_team: 'Professional Career',
    nav_projects: 'Our Projects',
    nav_contact: 'Contact',
    theme_dark: 'Dark',
    theme_light: 'Light',
    cta_contact: 'Contact Us',
    hero_badge: 'MK ENGINEERING',
    hero_main_title: 'Multidisciplinary Design Office',
    hero_main_text: 'MK ENGINEERING is a multidisciplinary design office specialized in Electrical Engineering, Fire Safety, Photovoltaic Systems, Energy Audit, and Energy Management across all phases of project delivery.',
    hero_main_btn_primary: 'Our Projects',
    hero_main_btn_secondary: 'Explore Scope',
    cert_title: 'Certified Expertise',
    cert_1: 'Electrical Consulting Engineer (Certified by MEHAT)',
    cert_2: 'Fire Safety Consulting Engineer (Certified by ONPC)',
    cert_3: 'Expert Auditor in Energy (Certified by ANME)',
    cert_4: 'Expert in Photovoltaic (Certified by ANME)',
    cert_5: 'Energy Management System Expert (Certified by GIZ)',
    eyebrow_hero: 'Engineering Consultancy Office',
    eyebrow_services: 'Areas Of Intervention',
    eyebrow_about: 'About MK ENGINEERING',
    eyebrow_team: 'Leadership',
    eyebrow_contact: 'Contact',
    hero_title: 'Certified Engineering Office in Electrical Engineering',
    hero_text: 'MK ENGINEERING delivers precise technical solutions aligned with recognized standards, with professional supervision that ensures safety, compliance, and execution quality at every stage.',
    hero_btn_primary: 'Book a Consultation',
    hero_btn_secondary: 'Explore Services',
    hero_panel_title: 'Accredited Fields',
    services_title: 'Technical Scope Delivered By MK Engineering',
    service_1_title: 'MT/BT Transformer Stations',
    service_1_text: 'Medium and low voltage stations, metering systems, and distribution architecture.',
    service_2_title: 'Fire Safety Systems',
    service_2_text: 'Fire detection, smoke extraction, firefighting studies, and permit-compliant safety files.',
    service_3_title: 'Energy Audit and Management',
    service_3_text: 'Energy diagnostics, optimization plans, and ISO 50001 aligned energy management support.',
    service_4_title: 'Photovoltaic Engineering',
    service_4_text: 'ANME/STEG technical files, plant sizing, profitability calculations, and execution follow-up.',
    about_title: 'From Building Permit To Final Acceptance',
    about_text_1: 'MK ENGINEERING is located in Sfax, Tunisia and intervenes in all project phases from design approval to commissioning and final acceptance, with strong expertise in electricity, fire safety, photovoltaics, energy audit, and energy management.',
    about_text_2: 'The office delivers complete studies, tender files, shop drawings, and site monitoring for industrial, tertiary, public, and residential developments in Tunisia and internationally.',
    team_title: 'Founder Professional Career',
    team_member_1_name: 'KESSENTINI MOHAMED',
    team_member_1_role: 'Founder and Managing Consulting Engineer',
    team_member_1_text: 'Since 2013, leads MK ENGINEERING in electrical, fire safety, photovoltaic, energy audit, and energy management studies.',
    contact_title: 'Official Contact Information',
    contact_info_title: 'Office Details',
    label_manager: 'Manager',
    manager_name: 'KESSENTINI MOHAMED',
    label_address: 'Address',
    contact_address: 'Route Mahdia Km 0.5 Residence El Jenene<br />Eddhahabi, 5th Floor, Office 53<br />3002 Sfax, Tunisia',
    label_phone: 'Telephone',
    label_phonefax: 'Telephone / Fax',
    label_mobile: 'Mobile',
    label_email: 'Email',
    office_address: 'Street Mahdia Km 0.5, Building "Al Janah Al Dhahabi"<br />5th Floor, No.53, 3002 Sfax, Tunisia',
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
    sponsors_text: 'A trusted network of institutions and industrial owners.',
    activities_badge: 'Activities',
    activities_title: 'Detailed Activities And Deliverables',
    activities_block_1_title: 'Engineering Deliverables',
    activities_block_1_item_1: 'Fire safety files for building permit submissions.',
    activities_block_1_item_2: 'Photovoltaic study files (ANME, STEG, DAO).',
    activities_block_1_item_3: 'Tender documents for electricity, security, and PV lots.',
    activities_block_1_item_4: 'Single-line diagrams, synoptics, power budgets, and cable calculations.',
    activities_block_1_item_5: 'Bills of quantities, shop drawings, and as-built adjustments.',
    activities_block_2_title: 'Systems Covered',
    activities_block_2_item_1: 'Interior/exterior lighting, sockets, motors, cable trays, and boards.',
    activities_block_2_item_2: 'Earthing and lightning protection systems.',
    activities_block_2_item_3: 'Data, telephone, access control, CCTV, and low current networks.',
    activities_block_2_item_4: 'Fire detection, smoke extraction, and firefighting systems.',
    activities_block_2_item_5: 'Transformer stations, generators, and photovoltaic plants.',
    resources_badge: 'Resources',
    resources_title: 'Human Resources And Engineering Tools',
    resources_block_1_title: 'Human Resources',
    resources_block_1_item_1: '1 Electrical Engineer (18 years experience).',
    resources_block_1_item_2: '1 Computer Engineer (18 years experience).',
    resources_block_1_item_3: '3 Senior Electrical Technicians (8+ years experience).',
    resources_block_2_title: 'IT and Simulation Tools',
    resources_block_2_item_1: 'MS Office ecosystem and advanced reporting tools.',
    resources_block_2_item_2: 'AutoCAD, REVIT, SolidWorks.',
    resources_block_2_item_3: 'CANECO, ECODIAL, DIALUX, PVGIS.',
    resources_block_2_item_4: 'ANME PROFITPV simulations for BT and MT.',
    training_badge: 'Training',
    training_title: 'Selected Professional Training',
    training_item_1: 'ISO 50001:2018 training (GIZ-ANME-TUV Rheinland, November 2019).',
    training_item_2: 'PV grid-connected studies upgrading (GIZ-ANME, November 2018).',
    training_item_3: 'Fire safety training by National Office of Civil Protection.',
    training_item_4: 'Automation, AutoCAD, English, ISO9001 quality system, and Navision training.',
    training_item_5: 'SPC training for injection/extrusion at CTC (April 2008).',
    footer_tagline: 'Multidisciplinary Design Office',
    footer_services: 'Certified Scope',
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
  }, 3000);
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
    if (key === 'contact_address' || key === 'office_address') {
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

  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (!dict[key]) return;
    element.setAttribute('aria-label', dict[key]);
  });

  if (langSelect) {
    langSelect.value = lang;
  }

  if (mainNav && dict.nav_aria) {
    mainNav.setAttribute('aria-label', dict.nav_aria);
  }

  updateThemeButtonLabel();
  localStorage.setItem('mk_lang', lang);
};

window.addEventListener('scroll', updateHeaderState, { passive: true });
updateHeaderState();

if (navToggle && navList) {
  const setNavOpen = (open) => {
    navToggle.setAttribute('aria-expanded', String(open));
    navList.classList.toggle('open', open);
    if (navOverlay) {
      navOverlay.hidden = !open;
      navOverlay.classList.toggle('open', open);
    }
    document.body.classList.toggle('nav-open', open);
  };

  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    setNavOpen(!isExpanded);
  });

  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      setNavOpen(false);
    });
  });

  if (navOverlay) {
    navOverlay.addEventListener('click', () => setNavOpen(false));
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setNavOpen(false);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 980) setNavOpen(false);
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

const heroSection = document.querySelector('.hero');

if (heroSection) {
  const heroImages = [
    '1.png',
    '11111111111.webp',
    'v2_Photo - 1.jpg',
    'v2_Photo - 4.jpg',
    'v2_Photo - 7.jpg',
    'v2_Photo - 8.jpg'
  ];

  let currentHeroIndex = 0;
  const applyHeroImage = (index) => {
    const nextIndex = (index + heroImages.length) % heroImages.length;
    const imagePath = encodeURI(`hero/${heroImages[nextIndex]}`);
    heroSection.style.setProperty('--hero-background-image', `url("${imagePath}")`);
    currentHeroIndex = nextIndex;
  };

  applyHeroImage(currentHeroIndex);

  if (heroImages.length > 1) {
    window.setInterval(() => {
      applyHeroImage(currentHeroIndex + 1);
    }, 2000);
  }
}

const ideaSlideshow = document.querySelector('#idea-slideshow');
const ideaDots = document.querySelector('#idea-dots');

if (ideaSlideshow) {
  const ideaImages = [
    'WhatsApp Image 2026-02-26 at 00.08.12 (1).jpeg',
    'WhatsApp Image 2026-02-26 at 00.08.12 (2).jpeg',
    'WhatsApp Image 2026-02-26 at 00.08.12 (3).jpeg',
    'WhatsApp Image 2026-02-26 at 00.08.12.jpeg',
    'WhatsApp Image 2026-02-26 at 00.08.26 (1).jpeg',
    'WhatsApp Image 2026-02-26 at 00.08.26.jpeg',
    'WhatsApp Image 2026-02-26 at 00.08.27 (1).jpeg',
    'WhatsApp Image 2026-02-26 at 00.08.27 (2) - Copy.jpeg',
    'WhatsApp Image 2026-02-26 at 00.08.27 (3) - Copy.jpeg',
    'WhatsApp Image 2026-02-26 at 00.08.27 (4).jpeg',
    'WhatsApp Image 2026-02-26 at 00.08.27 (5).jpeg',
    'WhatsApp Image 2026-02-26 at 00.08.27 - Copy.jpeg',
    'WhatsApp Image 2026-02-26 at 00.08.27.jpeg',
    'work.png'
  ];

  ideaImages.forEach((fileName, index) => {
    const image = document.createElement('img');
    image.className = `idea-slide${index === 0 ? ' is-active' : ''}`;
    image.src = encodeURI(`idea/${fileName}`);
    image.alt = `Engineering project concept ${index + 1}`;
    image.loading = index === 0 ? 'eager' : 'lazy';
    image.decoding = 'async';
    ideaSlideshow.appendChild(image);
  });

  const slides = Array.from(ideaSlideshow.querySelectorAll('.idea-slide'));
  if (slides.length) {
    let activeIndex = Math.max(0, slides.findIndex((slide) => slide.classList.contains('is-active')));
    if (activeIndex < 0) activeIndex = 0;

    const dots = slides.map((_, index) => {
      const dot = document.createElement('span');
      dot.className = 'idea-dot';
      dot.setAttribute('data-index', String(index));
      if (ideaDots) ideaDots.appendChild(dot);
      return dot;
    });

    const setActiveSlide = (index) => {
      const nextIndex = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle('is-active', slideIndex === nextIndex);
      });
      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle('active', dotIndex === nextIndex);
      });
      activeIndex = nextIndex;
    };

    setActiveSlide(activeIndex);

    if (!prefersReducedMotion && slides.length > 1) {
      let timerId = null;
      const rotate = () => setActiveSlide(activeIndex + 1);
      const start = () => {
        if (timerId !== null) return;
        timerId = window.setInterval(rotate, 2300);
      };
      const stop = () => {
        if (timerId === null) return;
        window.clearInterval(timerId);
        timerId = null;
      };

      start();
      ideaSlideshow.addEventListener('mouseenter', stop);
      ideaSlideshow.addEventListener('mouseleave', start);
      ideaSlideshow.addEventListener('touchstart', stop, { passive: true });
      ideaSlideshow.addEventListener('touchend', start, { passive: true });
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          stop();
        } else {
          start();
        }
      });
    }
  }
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
