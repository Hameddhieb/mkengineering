const projects = [
  {
    owner: 'Whiba Holding / Osool',
    country: 'Libya',
    project: 'Construction of a juice factory - Zliten - Musrata',
    note: ''
  },
  {
    owner: 'Mr. Mansour Jafel / Al Waha Adawliah',
    country: 'Libya',
    project: 'Construction of a cattle feed factory - Al Swani - Tripoli',
    note: ''
  },
  {
    owner: 'Dr. Ahmed Boudhhir',
    country: 'Libya',
    project: 'Construction of new wheat mill - Tajoura - Tripoli',
    note: ''
  },
  {
    owner: 'Biout Al Eaz',
    country: 'Libya',
    project: 'Construction of a gypsum factory BIOUT EL EAZ - Zaouia - Libya',
    note: ''
  },
  {
    owner: 'Golden Poultry / Mr. Ahmed Bahij',
    country: 'Libya',
    project: 'Construction of a poultry slaughterhouse - Sidi Al Sayah - Tripoli',
    note: 'Project in collaboration with company 2CM - Anis ZAWEM'
  },
  {
    owner: 'Golden / Mr. Ahmed Hahij',
    country: 'Libya',
    project: 'Construction of a cattle feed factory - Al Guiaa - Libya',
    note: 'Project in collaboration with company 2CM - Anis ZAWEM'
  },
  {
    owner: 'Al Imtiez / Mr. Ben Hamel',
    country: 'Libya',
    project: 'Construction of a cattle feed factory - Zliten - Musrata',
    note: 'Project in collaboration with company 2CM - Anis ZAWEM'
  },
  {
    owner: 'Al Maraii / Mr. Al Hadj Hssine',
    country: 'Libya',
    project: 'Construction of a cattle feed factory - Oued Rabie - Libya',
    note: 'Project in collaboration with company 2CM - Anis ZAWEM'
  },
  {
    owner: 'Libyan United Company',
    country: 'Libya',
    project: 'Construction of a cattle feed factory - Benghazi - Libya',
    note: 'Project in collaboration with company 2CM - Anis ZAWEM'
  },
  {
    owner: 'Mr. Mahmoud Rtimi',
    country: 'Libya',
    project: 'Construction of a cattle feed factory - Al Djafra - Libya',
    note: 'Project in collaboration with company 2CM - Anis ZAWEM'
  },
  {
    owner: 'Al Tadhamen Company / Mr. Salah Charkassi',
    country: 'Libya',
    project: 'Construction of a cattle feed factory - Al Kararim - Libya',
    note: 'Project in collaboration with company 2CM - Anis ZAWEM'
  },
  {
    owner: 'Najah For Major Works',
    country: 'Islamic Republic of Mauritania',
    project: 'Construction of seat CE-C3I - Ministry of Defense',
    note: ''
  },
  {
    owner: 'Najah For Major Works',
    country: 'Islamic Republic of Mauritania',
    project: 'Construction of the Great Mosque of Nouakchott',
    note: ''
  },
  {
    owner: 'Hayem Nour T.P. / El Hadj Samir Bedjaoui',
    country: 'Algeria',
    project: 'Construction of The Palm Hotel in Oran with B-2/B-1/G+20 floors',
    note: ''
  },
  {
    owner: 'Eden Das / Mr. Djemiai Salah',
    country: 'Algeria',
    project: 'Construction of a hotel with 80 rooms and 28 suites (B+G+7) in Tebessa',
    note: ''
  },
  {
    owner: 'SCCO / El Hadj Samir Bedjaoui',
    country: 'Algeria',
    project: 'Construction of a livestock feed manufacturing unit in Essania - Oran',
    note: ''
  },
  {
    owner: 'Groupe Ameni / Mr. Noureddine Selmani',
    country: 'Algeria',
    project: 'Construction of a B+G+5 residential building in Barika Wilaya Batna',
    note: ''
  },
  {
    owner: 'Club House',
    country: 'Dubai',
    project: 'Construction of offices and driving center building: Club House (B+G+1) in Dubai',
    note: ''
  },
  {
    owner: 'Ministry of Sports and Recreation',
    country: 'Republic Burkina Faso',
    project: 'Rehabilitation of the August 4 Olympic Stadium, Ouagadougou',
    note: 'Republic Burkina Faso'
  },
  {
    owner: 'Salalah',
    country: 'Sultanate of Oman',
    project: 'Construction of a lime plant in Salalah, 400 TPD lime calcination project - phase 1A',
    note: 'Project in collaboration with Building & Electricity and EMPI group PTG'
  },
  {
    owner: 'Allokoi',
    country: 'Ivory Coast',
    project: 'Construction of Bixin Extraction Plant in Allokoi - Ivory Coast',
    note: 'Project in collaboration with Building & Electricity and EMPI group PTG'
  },
  {
    owner: 'Bango',
    country: 'Ivory Coast',
    project: 'Extension of a rubber factory in Bango - Ivory Coast',
    note: 'Project in collaboration with Building & Electricity and EMPI group PTG'
  },
  {
    owner: 'Tunisia Reference 01',
    country: 'Tunisia',
    project: 'Reference listed in source without additional project details',
    note: 'Original source row with Tunisia only'
  },
  {
    owner: 'Tunisia Reference 02',
    country: 'Tunisia',
    project: 'Reference listed in source without additional project details',
    note: 'Original source row with Tunisia only'
  },
  {
    owner: 'Tunisia Reference 03',
    country: 'Tunisia',
    project: 'Reference listed in source without additional project details',
    note: 'Original source row with Tunisia only'
  },
  {
    owner: 'Tunisia Reference 04',
    country: 'Tunisia',
    project: 'Reference listed in source without additional project details',
    note: 'Original source row with Tunisia only'
  },
  {
    owner: 'Tunisia Reference 05',
    country: 'Tunisia',
    project: 'Reference listed in source without additional project details',
    note: 'Original source row with Tunisia only'
  },
  {
    owner: 'Tunisia Reference 06',
    country: 'Tunisia',
    project: 'Reference listed in source without additional project details',
    note: 'Original source row with Tunisia only'
  },
  {
    owner: 'Tunisia Reference 07',
    country: 'Tunisia',
    project: 'Reference listed in source without additional project details',
    note: 'Original source row with Tunisia only'
  },
  {
    owner: 'Tunisia Reference 08',
    country: 'Tunisia',
    project: 'Reference listed in source without additional project details',
    note: 'Original source row with Tunisia only'
  },
  {
    owner: 'Tunisia Reference 09',
    country: 'Tunisia',
    project: 'Reference listed in source without additional project details',
    note: 'Original source row with Tunisia only'
  },
  {
    owner: 'Chahia / Chahia Group',
    country: 'Tunisia',
    project: 'Redevelopment and extension of the CHAHIA slaughterhouse - Sfax - Tunisia',
    note: ''
  },
  {
    owner: 'El Banna / Chahia Group',
    country: 'Tunisia',
    project: 'Redevelopment and extension of the CHAHIA slaughterhouse - Jbeniana - Tunisia',
    note: ''
  },
  {
    owner: 'SVA / Chahia Group',
    country: 'Tunisia',
    project: 'Redevelopment and extension of the CHAHIA slaughterhouse - Zaghouane - Tunisia',
    note: ''
  },
  {
    owner: 'Sacno / Chahia Group',
    country: 'Tunisia',
    project: 'Redevelopment and extension of the CHAHIA slaughterhouse - Mghira - Ben Arous - Tunisia',
    note: ''
  },
  {
    owner: 'Bovi / Btg Group',
    country: 'Tunisia',
    project: 'Construction of a poultry slaughterhouse - Mghira - Ben Arous - Tunisia',
    note: ''
  },
  {
    owner: 'Tacaps / Chahia Group',
    country: 'Tunisia',
    project: 'Construction of a hatchery - Gabes - Tunisia',
    note: ''
  },
  {
    owner: 'Ideal Company / Chahia Group',
    country: 'Tunisia',
    project: 'Construction of four breeding buildings for broiler start-up - Elghourafi center 1 - Gabes - Tunisia',
    note: ''
  },
  {
    owner: 'Anaam Company / Chahia Group',
    country: 'Tunisia',
    project: 'Construction of ten breeding buildings for broiler production - Elghourafi center 2 - Gabes - Tunisia',
    note: ''
  },
  {
    owner: 'Cho Group',
    country: 'Tunisia',
    project: 'Construction project of an oil mill - Sfax - Tunisia',
    note: ''
  },
  {
    owner: 'Botria Oil / Chahia Group',
    country: 'Tunisia',
    project: 'Construction project of an oil mill - Jbeniana - Sfax - Tunisia',
    note: ''
  },
  {
    owner: 'Nour El Ain / Frikha Group (Dar Saydali)',
    country: 'Tunisia',
    project: 'Construction project of an oil mill - Bizerte - Tunisia',
    note: ''
  },
  {
    owner: 'Sppas / Warda-Belkhiria Group',
    country: 'Tunisia',
    project: 'Rehabilitation of electrical installation (power and process) of southern food products plant - Sfax - Tunisia',
    note: ''
  },
  {
    owner: 'Amt Company / Warda-Belkhiria Group',
    country: 'Tunisia',
    project: 'Construction of a flour factory - Sousse - Tunisia',
    note: ''
  },
  {
    owner: 'Gmcp / Warda-Belkhiria Group',
    country: 'Tunisia',
    project: 'Power increase of HV/LV substation from 2x1000KVA+800KVA to 1000KVA+2x2000KVA at Great Mills of Cap-Bon - Nabeul - Tunisia',
    note: ''
  },
  {
    owner: 'Al Naoora / Triki Group',
    country: 'Tunisia',
    project: 'Construction of a furniture factory "New Conforta" - Sfax - Tunisia',
    note: ''
  },
  {
    owner: 'Assad Group',
    country: 'Tunisia',
    project: 'Redevelopment of the three Assad Bouargoub plants - Nabeul - Tunisia',
    note: ''
  },
  {
    owner: 'RNTA',
    country: 'Tunisia',
    project: 'Reconfiguration of electrical HV and LV distribution network of factory B - National Manufacture of Tobacco and Matches - Tunis - Tunisia',
    note: ''
  },
  {
    owner: 'Perlamed',
    country: 'Tunisia',
    project: 'Construction of a drug production unit at Z.I. Sbikha - Kairouan - Tunisia',
    note: ''
  },
  {
    owner: 'Central Pharmacy of Tunisia',
    country: 'Tunisia',
    project: 'Renovation of electricity and fire safety installations of the Central Pharmacy of Tunisia',
    note: ''
  },
  {
    owner: 'Mchp',
    country: 'Tunisia',
    project: 'Construction of a baby diaper factory - Sfax - Tunisia',
    note: ''
  },
  {
    owner: 'Presidency of the Republic of Tunisia',
    country: 'Tunisia',
    project: 'Construction of the medical center for security of the president and official figures - Carthage - Tunisia',
    note: ''
  },
  {
    owner: 'Presidency of the Republic of Tunisia',
    country: 'Tunisia',
    project: 'Redevelopment of the presidential security dormitory - Gammarth - Tunisia',
    note: ''
  },
  {
    owner: 'Presidency of the Republic of Tunisia',
    country: 'Tunisia',
    project: 'Redevelopment of a few premises in Carthage and Gammarth - Tunisia',
    note: ''
  },
  {
    owner: 'Doctor Hanen Farsi',
    country: 'Tunisia',
    project: 'Construction of a clinic - Sidi Bouzid - Tunisia',
    note: ''
  },
  {
    owner: 'Syphax Clinic Group',
    country: 'Tunisia',
    project: 'Construction of a building for medical use - Sfax - Tunisia',
    note: ''
  },
  {
    owner: 'National Family and Population Office',
    country: 'Tunisia',
    project: 'Construction of the regional ONFP clinic - Sidi Bouzid - Tunisia',
    note: ''
  },
  {
    owner: 'C.H.U. Rabta',
    country: 'Tunisia',
    project: 'Redevelopment and extension of surgery operating theater (eight operating rooms) - Tunis - Tunisia',
    note: ''
  },
  {
    owner: 'C.H.U. Habib Bourguiba',
    country: 'Tunisia',
    project: 'Rehabilitation of the intensive care unit - Sfax - Tunisia',
    note: ''
  },
  {
    owner: 'C.H.U. Habib Bourguiba',
    country: 'Tunisia',
    project: 'Rehabilitation of the neuro-vascular service - Sfax - Tunisia',
    note: ''
  },
  {
    owner: 'C.H.U. Habib Bourguiba',
    country: 'Tunisia',
    project: 'Rehabilitation of the physical medicine department - Sfax - Tunisia',
    note: ''
  },
  {
    owner: 'C.H.U. Habib Bourguiba',
    country: 'Tunisia',
    project: 'Rehabilitation of the radiotherapy department - Sfax - Tunisia',
    note: ''
  },
  {
    owner: 'C.H.U. Gabes',
    country: 'Tunisia',
    project: 'Renovation of the morgue and autopsy rooms at C.H.U. Gabes - Tunisia',
    note: ''
  },
  {
    owner: 'Sndp / National Oil Distribution Company',
    country: 'Tunisia',
    project: 'Photovoltaic installations 2500 KWp (2.5 MWp) - Kasserine - Tunisia',
    note: ''
  },
  {
    owner: 'Ministry of Justice',
    country: 'Tunisia',
    project: 'Photovoltaic installations 150 KWp - Tunis - Tunisia',
    note: ''
  },
  {
    owner: 'Sid Company',
    country: 'Tunisia',
    project: 'Photovoltaic installations 200 KWp - Sfax - Tunisia',
    note: ''
  },
  {
    owner: 'Trapsa / Pipeline Transport Company',
    country: 'Tunisia',
    project: 'Extension and redevelopment of the two administrations of Sfax and Skhira - Tunisia',
    note: ''
  },
  {
    owner: 'Diar Morsi',
    country: 'Tunisia',
    project: 'Construction of a B+G+8 residential building - Sfax - Tunisia',
    note: ''
  },
  {
    owner: 'S.P.I. Zitouna',
    country: 'Tunisia',
    project: 'Construction of a B+G+4 residential building - Sfax - Tunisia',
    note: ''
  },
  {
    owner: 'S.P.I. Gremda',
    country: 'Tunisia',
    project: 'Construction of a B+G+6 residential building - Sfax - Tunisia',
    note: ''
  },
  {
    owner: 'S.P.I. Sirs',
    country: 'Tunisia',
    project: 'Construction of a B+G+6 residential building - Sfax - Tunisia',
    note: ''
  },
  {
    owner: 'S.P.I. Sya',
    country: 'Tunisia',
    project: 'Construction of a 350-unit residential building - Sfax - Tunisia',
    note: ''
  }
];

const tbody = document.querySelector('#projects-tbody');
const countryFilter = document.querySelector('#country-filter');
const searchInput = document.querySelector('#search-input');
const resultsCount = document.querySelector('#results-count');
const statsGrid = document.querySelector('#stats-grid');
const languageSelect = document.querySelector('#projects-language');
const metaDescription = document.querySelector('meta[name="description"]');

const translations = {
  ar: {
    page_title: 'MK ENGINEERING | مشاريعنا',
    page_description: 'MK Engineering - مشاريعنا: مراجع هندسية دولية عبر الصناعة والصحة والطاقة والبنية التحتية.',
    skip_link: 'تجاوز إلى المحتوى',
    nav_aria: 'التنقل الرئيسي',
    nav_home: 'الرئيسية',
    nav_services: 'الخدمات',
    nav_contact: 'التواصل',
    lang_label: 'اللغة',
    sponsor_aria: 'مرجع الشعارات',
    sponsor_alt: 'شعار شريك',
    hero_eyebrow: 'مراجع المشاريع',
    hero_title: 'مشاريعنا',
    hero_text: 'محفظة تفصيلية لمراجع MK Engineering عبر تونس وليبيا والجزائر وموريتانيا وعمان وساحل العاج وبوركينا فاسو والإمارات.',
    stats_aria: 'إحصاءات المشاريع',
    label_country: 'الدولة',
    all_countries: 'كل الدول',
    label_search: 'البحث',
    search_placeholder: 'ابحث باسم الحريف أو الموقع أو التعاون أو نطاق المشروع',
    th_owner: 'المالك / الحريف',
    th_country: 'الدولة',
    th_project: 'المشروع',
    th_note: 'ملاحظة مرجعية',
    results_prefix: 'عرض',
    results_suffix: 'مرجع',
    no_results: 'لا توجد مراجع مطابقة لعوامل التصفية الحالية.',
    stat_total: 'إجمالي المراجع',
    stat_countries: 'الدول المغطاة',
    stat_tunisia: 'مراجع تونس',
    stat_collab: 'مشاريع بالشراكة',
    back_main: 'العودة إلى الموقع الرئيسي'
  },
  fr: {
    page_title: 'MK ENGINEERING | Nos Projets',
    page_description: 'MK Engineering - Nos Projets : references d ingenierie internationales dans l industrie, la sante, l energie et l infrastructure.',
    skip_link: 'Aller au contenu',
    nav_aria: 'Navigation principale',
    nav_home: 'Accueil',
    nav_services: 'Services',
    nav_contact: 'Contact',
    lang_label: 'Langue',
    sponsor_aria: 'References partenaires',
    sponsor_alt: 'Logo partenaire',
    hero_eyebrow: 'REFERENCES PROJETS',
    hero_title: 'Nos Projets',
    hero_text: 'Portefeuille detaille des references de MK Engineering en Tunisie, Libye, Algerie, Mauritanie, Oman, Cote d Ivoire, Burkina Faso et EAU.',
    stats_aria: 'Statistiques des projets',
    label_country: 'Pays',
    all_countries: 'Tous les pays',
    label_search: 'Recherche',
    search_placeholder: 'Rechercher par client, localisation, collaboration ou perimetre du projet',
    th_owner: 'Proprietaire / Client',
    th_country: 'Pays',
    th_project: 'Projet',
    th_note: 'Note de reference',
    results_prefix: 'Affichage de',
    results_suffix: 'references',
    no_results: 'Aucune reference ne correspond au filtre actuel.',
    stat_total: 'Total des references',
    stat_countries: 'Pays couverts',
    stat_tunisia: 'References en Tunisie',
    stat_collab: 'Projets en collaboration',
    back_main: 'Retour au site principal'
  },
  en: {
    page_title: 'MK ENGINEERING | Our Projets',
    page_description: 'MK Engineering - Our Projets: International engineering references across industry, healthcare, energy, and infrastructure.',
    skip_link: 'Skip to content',
    nav_aria: 'Primary navigation',
    nav_home: 'Home',
    nav_services: 'Services',
    nav_contact: 'Contact',
    lang_label: 'Language',
    sponsor_aria: 'Sponsorship references',
    sponsor_alt: 'Sponsorship project',
    hero_eyebrow: 'PROJECT REFERENCES',
    hero_title: 'Our Projets',
    hero_text: 'Detailed portfolio of MK Engineering references across Tunisia, Libya, Algeria, Mauritania, Oman, Ivory Coast, Burkina Faso, and UAE.',
    stats_aria: 'Project statistics',
    label_country: 'Country',
    all_countries: 'All countries',
    label_search: 'Search',
    search_placeholder: 'Search by owner, location, collaboration or project scope',
    th_owner: 'Owner / Client',
    th_country: 'Country',
    th_project: 'Project',
    th_note: 'Reference Note',
    results_prefix: 'Showing',
    results_suffix: 'references',
    no_results: 'No references match your current filter.',
    stat_total: 'Total references',
    stat_countries: 'Countries covered',
    stat_tunisia: 'Tunisia references',
    stat_collab: 'Collaboration projects',
    back_main: 'Back to main website'
  }
};

const countryNames = {
  Tunisia: { ar: 'تونس', fr: 'Tunisie', en: 'Tunisia' },
  Libya: { ar: 'ليبيا', fr: 'Libye', en: 'Libya' },
  Algeria: { ar: 'الجزائر', fr: 'Algerie', en: 'Algeria' },
  'Islamic Republic of Mauritania': { ar: 'الجمهورية الإسلامية الموريتانية', fr: 'Republique Islamique de Mauritanie', en: 'Islamic Republic of Mauritania' },
  'Sultanate of Oman': { ar: 'سلطنة عمان', fr: 'Sultanat d Oman', en: 'Sultanate of Oman' },
  'Ivory Coast': { ar: 'ساحل العاج', fr: 'Cote d Ivoire', en: 'Ivory Coast' },
  'Republic Burkina Faso': { ar: 'جمهورية بوركينا فاسو', fr: 'Republique du Burkina Faso', en: 'Republic Burkina Faso' },
  Dubai: { ar: 'دبي', fr: 'Dubai', en: 'Dubai' }
};

let currentLang = localStorage.getItem('mk_projects_lang') || 'en';
if (!translations[currentLang]) currentLang = 'en';

const t = (key) => translations[currentLang][key] || translations.en[key] || key;
const countryLabel = (country) => countryNames[country]?.[currentLang] || country;

const countByCountry = () => {
  const map = new Map();
  projects.forEach((item) => {
    map.set(item.country, (map.get(item.country) || 0) + 1);
  });
  return Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
};

const renderStats = () => {
  const countries = countByCountry();
  const collaborations = projects.filter((p) => p.note.toLowerCase().includes('collaboration')).length;

  const cards = [
    { label: t('stat_total'), value: projects.length },
    { label: t('stat_countries'), value: countries.length },
    { label: t('stat_tunisia'), value: projects.filter((p) => p.country === 'Tunisia').length },
    { label: t('stat_collab'), value: collaborations }
  ];

  statsGrid.innerHTML = cards
    .map(
      (card) => `
      <article class="stat">
        <div class="num">${card.value}</div>
        <div class="label">${card.label}</div>
      </article>
    `
    )
    .join('');
};

const buildCountryFilter = () => {
  const countries = [...new Set(projects.map((p) => p.country))].sort((a, b) => a.localeCompare(b));
  countries.forEach((country) => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = countryLabel(country);
    countryFilter.appendChild(option);
  });
};

const updateCountryFilterLabels = () => {
  const firstOption = countryFilter.querySelector('option[value="all"]');
  if (firstOption) firstOption.textContent = t('all_countries');

  Array.from(countryFilter.options).forEach((option) => {
    if (option.value === 'all') return;
    option.textContent = countryLabel(option.value);
  });
};

const filterProjects = () => {
  const country = countryFilter.value;
  const query = searchInput.value.trim().toLowerCase();

  return projects.filter((project) => {
    const countryMatch = country === 'all' || project.country === country;
    const haystack = `${project.owner} ${project.project} ${project.note} ${project.country}`.toLowerCase();
    const searchMatch = query === '' || haystack.includes(query);
    return countryMatch && searchMatch;
  });
};

const renderTable = () => {
  const rows = filterProjects();
  resultsCount.textContent = String(rows.length);

  if (!rows.length) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="result-note">${t('no_results')}</td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = rows
    .map(
      (project, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${project.owner}</td>
        <td>${countryLabel(project.country)}</td>
        <td>${project.project}</td>
        <td>${project.note || '-'}</td>
      </tr>
    `
    )
    .join('');
};

const applyLanguage = (lang) => {
  if (!translations[lang]) return;
  currentLang = lang;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.title = t('page_title');
  if (metaDescription) metaDescription.setAttribute('content', t('page_description'));

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (!translations[currentLang][key]) return;
    element.textContent = t(key);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (!translations[currentLang][key]) return;
    element.setAttribute('placeholder', t(key));
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (!translations[currentLang][key]) return;
    element.setAttribute('aria-label', t(key));
  });

  document.querySelectorAll('.sponsor-track:first-child img').forEach((image, index) => {
    image.alt = `${t('sponsor_alt')} ${index + 1}`;
  });

  if (languageSelect) languageSelect.value = lang;

  updateCountryFilterLabels();
  renderStats();
  renderTable();
  localStorage.setItem('mk_projects_lang', lang);
};

countryFilter.addEventListener('change', renderTable);
searchInput.addEventListener('input', renderTable);
if (languageSelect) {
  languageSelect.addEventListener('change', () => applyLanguage(languageSelect.value));
}

buildCountryFilter();
applyLanguage(currentLang);
