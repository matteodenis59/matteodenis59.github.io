const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      education: "Formation",
      experience: "Expérience",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
      cv: "CV"
    },
    footer: {
      tag: "Étudiant ingénieur généraliste — Centrale Lille",
      copy: "© 2026 Mattéo Denis. Tous droits réservés."
    },
    home: {
      eyebrow: "Étudiant ingénieur généraliste",
      title1: "Mattéo",
      title2: "Denis",
      title3: "École Centrale de Lille",
      tagline: "À la recherche d'un stage césure de 5 à 6 mois à partir de mars 2027 - Conception aéronautique · Ingénierie industrielle · Performance industrielle",
      ctaProjects: "Voir mes projets",
      ctaContact: "Me contacter",
      hEyebrow: "Explorer le portfolio",
      hTitle: "Découvrez mon parcours",
      aboutTitle: "À propos",
      aboutDesc: "Qui je suis, mes centres d'intérêt et ma façon de travailler.",
      eduTitle: "Formation",
      eduDesc: "Centrale Lille, échange Erasmus en Espagne, classes préparatoires.",
      expTitle: "Expérience",
      expDesc: "Toyota, Alstom — performance industrielle et ingénierie TPS.",
      projTitle: "Projets",
      projDesc: "Aérodynamique, CFD et lévitation acoustique en équipe.",
      skillsTitle: "Compétences",
      skillsDesc: "CAO, programmation, gestion de projet et savoir-faire industriel.",
      contactTitle: "Contact",
      contactDesc: "Discutons d'un stage, d'un projet ou d'une opportunité.",
      linkLabel: "En savoir plus"
    },
    about: {
      eyebrow: "Qui suis-je",
      title: "À propos de moi",
      p1: "Étudiant ingénieur généraliste à Centrale Lille, je m'intéresse aux environnements techniques qui allient conception, production et performance.",
      p2: "Curieux, rigoureux et pragmatique, j'aime les défis d'ingénierie concrets qui combinent conception mécanique, expérimentation et amélioration continue. Fiable et orienté travail d'équipe, j'accorde une grande importance à une résolution de problèmes structurée et à une communication claire.",
      interestsTitle: "Centres d'intérêt",
      interest1: "Arbitre de basketball en championnat régional : gestion de la pression, communication et leadership",
      interest2: "Sports : basketball et course à pied",
      interest3: "Bricolage et projets mécaniques pratiques"
    },
    education: {
      eyebrow: "Parcours",
      title: "Mon parcours académique",
      e1school: "École Centrale de Lille, France",
      e1degree: "Diplôme d'ingénieur généraliste",
      e1desc: "Matières clés : Aérodynamique & contrôle d'écoulement — Mécanique — CAO & procédés de fabrication — Électronique — Programmation avancée & Deep Learning. GPA : 3.7/4.",
      e2school: "Universitat Politècnica de Catalunya, Espagne",
      e2degree: "Semestre d'échange Erasmus",
      e2desc: "Cours de niveau Master : Véhicules hybrides & électriques — Contrôle des machines électriques & électronique de puissance — Projet industriel.",
      e3school: "Lycée Faidherbe, Lille, France",
      e3degree: "Classes Préparatoires aux Grandes Écoles (MPSI-MP*)",
      e3desc: "Programme intensif de deux ans en mathématiques et physique, préparant aux concours des meilleures écoles d'ingénieurs françaises."
    },
    experience: {
      eyebrow: "Expérience",
      title: "Expérience professionnelle",
      badge: "À venir",
      x1company: "Toyota Motor Manufacturing France",
      x1role: "Stagiaire Amélioration de la Performance Industrielle",
      x1desc: "Périmètre prévu : ateliers Kaizen, formation des utilisateurs finaux et reporting d'indicateurs (KPI) à la direction.",
      x2company: "Toyota Motor Manufacturing France, Onnaing",
      x2role: "Stagiaire Ingénierie TPS",
      x2desc1: "Mise en place d'un système de Maintenance Productive Totale (TPM) et mise à jour des standards de maintenance et plans techniques.",
      x2desc2: "Conception de calibres de contrôle et de montages d'inspection pour le contrôle qualité en production.",
      x3company: "Alstom Transport, Valenciennes, France",
      x3role: "Stagiaire Service Douane",
      x3desc: "Construction d'arbres de décision pour la classification douanière et automatisation de traitements de données avec Python/VBA."
    },
    projects: {
      eyebrow: "Réalisations",
      title: "Projets académiques",
      p1title: "Optimisation de traînée par contrôle d'écoulement",
      p1meta: "École Centrale de Lille · Challenge compétitif de 12 semaines · Chef de groupe",
      p1desc1: "Minimisation de la traînée aérodynamique sur des prototypes de véhicules à l'échelle 1/25, via essais en soufflerie, simulations CFD et itérations CAO.",
      p1desc2: "Pilotage de la répartition des tâches, du développement du prototype et du suivi hebdomadaire pour une équipe de 8 étudiants.",
      p1tag1: "CFD", p1tag2: "Soufflerie", p1tag3: "CAO", p1tag4: "Leadership",
      p2title: "Dispositif de lévitation acoustique",
      p2meta: "École Centrale de Lille, en partenariat avec le laboratoire CNRS IEMN",
      p2desc1: "Conception et développement d'un système de lévitation acoustique sur 3 semestres académiques.",
      p2desc2: "Coordination, planification et gestion des livrables d'une équipe de 8 étudiants tout au long du projet.",
      p2tag1: "Conception", p2tag2: "R&D", p2tag3: "Gestion de projet",
      moreLink: "Voir le détail",
      githubLabel: "Voir sur GitHub"
    },
    projectDrag: {
      back: "← Retour aux projets",
      title: "Optimisation de traînée par contrôle d'écoulement",
      meta: "École Centrale de Lille · Challenge compétitif de 12 semaines · Chef de groupe · Nov. 2025 – Jan. 2026",
      overviewTitle: "Aperçu du projet",
      overviewText: "Dans le cadre d'un challenge compétitif de 12 semaines à Centrale Lille, j'ai dirigé une équipe de 8 étudiants sur un projet de minimisation de la traînée aérodynamique. L'objectif : réduire la traînée sur des prototypes de véhicules à l'échelle 1/25 en combinant essais expérimentaux et simulation numérique.",
      methodTitle: "Démarche",
      methodItem1: "Essais en soufflerie pour mesurer les performances aérodynamiques des prototypes.",
      methodItem2: "Simulations CFD pour analyser et prédire les écoulements avant fabrication.",
      methodItem3: "Itérations de conception CAO pour affiner la géométrie des prototypes.",
      methodItem4: "Fabrication et test de plusieurs versions du prototype à l'échelle 1/25.",
      roleTitle: "Mon rôle",
      roleText: "En tant que chef de groupe, j'ai piloté la répartition des tâches entre les 8 membres de l'équipe, coordonné le développement du prototype et assuré un suivi hebdomadaire de l'avancement auprès de l'encadrement pédagogique.",
      skillsTitle: "Compétences mobilisées",
      teamTitle: "Équipe du projet",
      reportTitle: "Rapport du projet",
      reportDownload: "Télécharger le PDF",
      githubLabel: "Voir sur GitHub"
    },
    projectEolienne: {
      title: "Conception et fabrication d'une éolienne tripale à axe vertical",
      meta: "École Centrale de Lille · Projet de 8 semaines · Septembre 2025 – Novembre 2025",
      reportLabel: "Voir les slides de la soutenance finale (PDF)",
      methodTitle: "Démarche",
      methodAeroTitle: "1. Modélisation aérodynamique",
      methodAeroSubtitle1: "Optimisation analytique du cycle (Python)",
      methodAeroText1: "Afin de maximiser l'extraction d'énergie, le pôle aérodynamique a développé un modèle Python évaluant le coefficient de puissance Cp en fonction de l'angle d'incidence des pales, du facteur d'induction axiale et du ratio de vitesse spécifique.",
      captionPython: "Comparaison des Cp selon les profils de pales.",
      methodAeroSubtitle2: "Simulations numériques (STAR-CCM+)",
      methodAeroText2: "Pour valider le profil des pales, plusieurs géométries (profils constants, profils NACA 15 et 18, profils affinés) ont été testées en CFD.",
      captionCFD: "Cartographie des vitesses et de la pression (STAR-CCM+) autour du profil de la pale 16_4 optimisée.",
      methodMecaTitle: "2. Conception mécanique et dimensionnement (CAO)",
      methodMecaSubtitle1: "Calculs de Résistance des Matériaux (RDM)",
      methodMecaText1: "Les bras de maintien des pales (section 10x30x140 mm en PLA) ont été dimensionnés pour résister aux différentes contraintes mécaniques en fonctionnement.",
      captionRDM: "Simulation de flexion sur les bras de maintien sous RDM Le Mans (force verticale de 60 N).",
      methodMecaSubtitle2: "Architecture cinématique et Liaisons",
      methodMecaText2: "La transmission du mouvement (rapport de réduction de 1/2) est assurée par un train d'engrenages coniques (10 et 42 dents), privilégié aux courroies pour sa robustesse et l'absence de glissement. L'ensemble a été modélisé sous Onshape.",
      captionCAO: "Vue de la maquette CAO mettant en évidence les liaisons pivots (montages en X et en O) et l'intégration des engrenages coniques.",
      methodManufTitle: "3. Industrialisation et prototypage",
      methodManufText1: "Le projet a été mené jusqu'à la fabrication physique complète en atelier, en croisant plusieurs procédés pour s'adapter aux différents matériaux :",
      captionManuf: "Usinage de l'axe principal en acier sur tour conventionnel dans les ateliers de Centrale Lille.",
      methodTestTitle: "4. Essais en soufflerie et vision système",
      methodTestText1: "Le prototype final a été couplé à une génératrice et testé en soufflerie pour confronter les modèles théoriques à la réalité physique de l'écoulement.",
      captionTest: "Test du prototype final en soufflerie et analyse comparative des performances réelles vs théoriques.",
      roleText: "En tant que chef de groupe, j'ai piloté la répartition des tâches entre les 8 membres de l'équipe, coordonné le développement du prototype et assuré un suivi hebdomadaire de l'avancement auprès de l'encadrement pédagogique.",
      tag1: "Dimensionnement", tag2: "CAO", tag3: "Prototypage rapide", tag4: "Usinage",
      reportText: "Les slides complètes de la soutenance finale, incluant la méthodologie détaillée, les résultats des simulations CFD et des essais en soufflerie, sont disponibles ci-dessous."
    },
    projectAcoustic: {
      back: "← Retour aux projets",
      title: "Dispositif de lévitation acoustique",
      meta: "École Centrale de Lille, en partenariat avec le laboratoire CNRS IEMN · Sept. 2024 – Fév. 2026",
      overviewTitle: "Aperçu du projet",
      overviewText: "Sur 3 semestres académiques, en partenariat avec le laboratoire CNRS IEMN, j'ai participé à la conception et au développement d'un système de lévitation acoustique — un dispositif utilisant des ondes ultrasonores pour faire léviter de petits objets sans contact physique.",
      methodTitle: "Démarche",
      methodItem1: "Recherche et compréhension des principes physiques de la lévitation par ondes acoustiques.",
      methodItem2: "Conception itérative du dispositif en lien avec les chercheurs du laboratoire IEMN.",
      methodItem3: "Tests et ajustements successifs sur plusieurs semestres pour améliorer la stabilité du système.",
      roleTitle: "Mon rôle",
      roleText: "J'ai géré la coordination, la planification et les livrables d'une équipe de 8 étudiants tout au long du projet, en assurant l'interface avec le laboratoire partenaire.",
      skillsTitle: "Compétences mobilisées",
      githubLabel: "Voir sur GitHub"
    },
    skills: {
      eyebrow: "Savoir-faire",
      title: "Mes compétences",
      catCad: "CAO & Simulation",
      catProg: "Programmation",
      catMgmt: "Gestion de projet",
      catInd: "Industriel",
      mgmt1: "Planification",
      mgmt2: "Répartition des tâches",
      mgmt3: "Coordination d'équipe",
      langTitle: "Langues",
      lang1: "Français", lang1level: "Langue maternelle",
      lang2: "Anglais", lang2level: "Avancé — TOEIC 930/990",
      lang3: "Espagnol", lang3level: "Intermédiaire",
      certTitle: "Certifications",
      cert1: "MOOC Gestion de Projet — École Centrale de Lille",
      cert2: "Permis de conduire B"
    },
    contact: {
      eyebrow: "Parlons-en",
      title: "Me contacter",
      intro: "Vous souhaitez échanger à propos d'un stage, d'un projet ou simplement discuter d'ingénierie ? N'hésitez pas à me contacter.",
      location: "Saint-Saulve, France",
      emailBtn: "Envoyer un e-mail",
      linkedinBtn: "Me contacter sur LinkedIn"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      education: "Education",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      cv: "Resume"
    },
    footer: {
      tag: "Generalist Engineering Student — Centrale Lille",
      copy: "© 2026 Mattéo Denis. All rights reserved."
    },
    home: {
      eyebrow: "Generalist Engineering Student",
      title1: "Mattéo",
      title2: "Denis",
      title3: "École Centrale de Lille",
      tagline: "Seeking a second 5- to 6-month gap-year internship from March 2027 — Aircraft Design · Manufacturing Engineering · Industrial Performance",
      ctaProjects: "View my projects",
      ctaContact: "Get in touch",
      hEyebrow: "Explore the portfolio",
      hTitle: "Discover my background",
      aboutTitle: "About",
      aboutDesc: "Who I am, my interests and how I work.",
      eduTitle: "Education",
      eduDesc: "Centrale Lille, Erasmus exchange in Spain, prep school.",
      expTitle: "Experience",
      expDesc: "Toyota, Alstom — industrial performance and TPS engineering.",
      projTitle: "Projects",
      projDesc: "Aerodynamics, CFD and acoustic levitation, in a team.",
      skillsTitle: "Skills",
      skillsDesc: "CAD, programming, project management and industrial know-how.",
      contactTitle: "Contact",
      contactDesc: "Let's talk about an internship, project or opportunity.",
      linkLabel: "Learn more"
    },
    about: {
      eyebrow: "Who I am",
      title: "About me",
      p1: "Generalist engineering student at Centrale Lille, I am interested in technical environments linking design, production and performance.",
      p2: "Curious, rigorous and hands-on, I enjoy practical engineering challenges combining mechanical design, experimentation and continuous improvement. Reliable and team-oriented, I value structured problem-solving and clear communication.",
      interestsTitle: "Interests",
      interest1: "Regional basketball referee: pressure management, communication and leadership",
      interest2: "Sports: basketball and running",
      interest3: "DIY and hands-on mechanical projects"
    },
    education: {
      eyebrow: "Background",
      title: "Academic background",
      e1school: "École Centrale de Lille, France",
      e1degree: "Generalist Engineering Degree",
      e1desc: "Relevant coursework: Aerodynamics & Flow Control — Mechanics — CAD & Manufacturing Processes — Electronics — Advanced Programming & Deep Learning. GPA: 3.7/4.",
      e2school: "Universitat Politècnica de Catalunya, Spain",
      e2degree: "Erasmus exchange semester",
      e2desc: "Master's-level coursework: Hybrid & Electric Vehicles — Control of Electrical Machines & Power Electronics — Industrial Project.",
      e3school: "Lycée Faidherbe, Lille, France",
      e3degree: "Classes Préparatoires aux Grandes Écoles (MPSI-MP*)",
      e3desc: "Two-year intensive undergraduate program in Mathematics and Physics preparing for top French engineering school entrance exams."
    },
    experience: {
      eyebrow: "Experience",
      title: "Work experience",
      badge: "Incoming",
      x1company: "Toyota Motor Manufacturing France",
      x1role: "Industrial Performance Improvement Intern",
      x1desc: "Expected scope: Kaizen workshops, end-user training and KPI reporting to senior management.",
      x2company: "Toyota Motor Manufacturing France, Onnaing",
      x2role: "TPS Engineering Intern",
      x2desc1: "Implemented a Total Productive Maintenance (TPM) system and updated maintenance standards and technical drawings.",
      x2desc2: "Designed control gauges and inspection fixtures for production quality checks.",
      x3company: "Alstom Transport, Valenciennes, France",
      x3role: "Customs Department Intern",
      x3desc: "Built customs classification decision trees and automated data processing tasks using Python/VBA."
    },
    projects: {
      eyebrow: "Highlights",
      title: "Academic projects",
      p1title: "Drag Optimisation by Flow Control",
      p1meta: "École Centrale de Lille · 12-week competitive challenge · Group Leader",
      p1desc1: "Minimised aerodynamic drag on 1/25-scale vehicle prototypes using wind-tunnel testing, CFD simulations and CAD iterations.",
      p1desc2: "Led task allocation, prototype development and weekly progress tracking for an 8-student team.",
      p1tag1: "CFD", p1tag2: "Wind Tunnel", p1tag3: "CAD", p1tag4: "Leadership",
      p2title: "Acoustic Levitation Device",
      p2meta: "École Centrale de Lille, in partnership with the CNRS laboratory IEMN",
      p2desc1: "Designed and developed an acoustic levitation system over 3 academic semesters.",
      p2desc2: "Managed the coordination, planning and deliverables of an 8-student team across the project.",
      p2tag1: "Design", p2tag2: "R&D", p2tag3: "Project Management",
      moreLink: "View details",
      githubLabel: "View on GitHub"
    },
    projectDrag: {
      back: "← Back to projects",
      title: "Drag Optimisation by Flow Control",
      meta: "École Centrale de Lille · 12-week competitive challenge · Group Leader · Nov. 2025 – Jan. 2026",
      overviewTitle: "Project overview",
      overviewText: "As part of a 12-week competitive challenge at Centrale Lille, I led a team of 8 students on a drag-minimisation project. The goal: reduce aerodynamic drag on 1/25-scale vehicle prototypes by combining experimental testing with numerical simulation.",
      methodTitle: "Approach",
      methodItem1: "Wind-tunnel testing to measure the aerodynamic performance of prototypes.",
      methodItem2: "CFD simulations to analyse and predict airflow before manufacturing.",
      methodItem3: "CAD design iterations to refine prototype geometry.",
      methodItem4: "Manufacturing and testing several versions of the 1/25-scale prototype.",
      roleTitle: "My role",
      roleText: "As group leader, I led task allocation across the 8-member team, coordinated prototype development and provided weekly progress updates to the teaching staff.",
      skillsTitle: "Skills used",
      teamTitle: "Project team",
      reportTitle: "Project report",
      reportDownload: "Download the PDF",
      githubLabel: "View on GitHub"
    },
    projectEolienne: {
      title: "Design and Manufacturing of a Three-Bladed Vertical-Axis Wind Turbine",
      meta: "École Centrale de Lille · 8-week project · September 2025 – November 2025",
      reportLabel: "View the final defence slides (PDF)",
      methodTitle: "Approach",
      methodAeroTitle: "1. Aerodynamic Modelling",
      methodAeroSubtitle1: "Analytical Cycle Optimisation (Python)",
      methodAeroText1: "To maximise energy extraction, the aerodynamics team developed a Python model evaluating the power coefficient Cp as a function of blade incidence angle, axial induction factor and tip-speed ratio.",
      captionPython: "Comparison of Cp values across blade profiles.",
      methodAeroSubtitle2: "Numerical Simulations (STAR-CCM+)",
      methodAeroText2: "To validate the blade profile, several geometries (constant profiles, NACA 15 and 18 profiles, refined profiles) were tested in CFD.",
      captionCFD: "Velocity and pressure mapping (STAR-CCM+) around the optimised 16_4 blade profile.",
      methodMecaTitle: "2. Mechanical Design and Sizing (CAD)",
      methodMecaSubtitle1: "Strength of Materials (SOM) Calculations",
      methodMecaText1: "The blade support arms (10x30x140 mm PLA cross-section) were sized to withstand the various mechanical stresses experienced in operation.",
      captionRDM: "Bending simulation on the support arms under RDM Le Mans (60 N vertical force).",
      methodMecaSubtitle2: "Kinematic Architecture and Bearings",
      methodMecaText2: "Motion transmission (1/2 reduction ratio) is provided by a bevel gear train (10 and 42 teeth), chosen over belts for its robustness and absence of slippage. The assembly was modelled in Onshape.",
      captionCAO: "Cross-section CAD view showing the pivot connections (X and O mounting arrangements) and the integration of the bevel gears.",
      methodManufTitle: "3. Manufacturing and Prototyping",
      methodManufText1: "The project was carried through to full physical manufacturing in the workshop, combining several processes to suit the different materials:",
      captionManuf: "Machining the main steel shaft on a conventional lathe in the Centrale Lille workshops.",
      methodTestTitle: "4. Wind-Tunnel Testing and System Validation",
      methodTestText1: "The final prototype was coupled to a generator and tested in the wind tunnel to compare theoretical models with actual flow behaviour.",
      captionTest: "Testing the final prototype in the wind tunnel and comparing real vs theoretical performance.",
      roleText: "As group leader, I led task allocation across the 8-member team, coordinated prototype development and provided weekly progress updates to the teaching staff.",
      tag1: "Sizing", tag2: "CAD", tag3: "Rapid Prototyping", tag4: "Machining",
      reportText: "The full final defence slides, including the detailed methodology and the results of the CFD simulations and wind-tunnel tests, are available below."
    },
    projectAcoustic: {
      back: "← Back to projects",
      title: "Acoustic Levitation Device",
      meta: "École Centrale de Lille, in partnership with the CNRS laboratory IEMN · Sept. 2024 – Feb. 2026",
      overviewTitle: "Project overview",
      overviewText: "Over 3 academic semesters, in partnership with the CNRS laboratory IEMN, I took part in the design and development of an acoustic levitation system — a device using ultrasonic waves to levitate small objects without physical contact.",
      methodTitle: "Approach",
      methodItem1: "Research into the physical principles of acoustic wave levitation.",
      methodItem2: "Iterative design of the device in collaboration with IEMN laboratory researchers.",
      methodItem3: "Successive testing and adjustments over several semesters to improve system stability.",
      roleTitle: "My role",
      roleText: "I managed the coordination, planning and deliverables of an 8-student team throughout the project, acting as the interface with the partner laboratory.",
      skillsTitle: "Skills used",
      githubLabel: "View on GitHub"
    },
    skills: {
      eyebrow: "Know-how",
      title: "My skills",
      catCad: "CAD & Simulation",
      catProg: "Programming",
      catMgmt: "Project Management",
      catInd: "Industrial",
      mgmt1: "Planning",
      mgmt2: "Task allocation",
      mgmt3: "Team coordination",
      langTitle: "Languages",
      lang1: "French", lang1level: "Native",
      lang2: "English", lang2level: "Advanced — TOEIC 930/990",
      lang3: "Spanish", lang3level: "Intermediate",
      certTitle: "Certifications",
      cert1: "MOOC Project Management — École Centrale de Lille",
      cert2: "Clean driving licence"
    },
    contact: {
      eyebrow: "Let's talk",
      title: "Get in touch",
      intro: "Want to talk about an internship, a project, or just chat about engineering? Feel free to reach out.",
      location: "Saint-Saulve, France",
      emailBtn: "Send an email",
      linkedinBtn: "Contact me on LinkedIn"
    }
  }
};

function getNested(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.fr;
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = getNested(dict, el.getAttribute('data-i18n'));
    if (value !== null) el.textContent = value;
  });

  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) toggleBtn.textContent = lang === 'fr' ? 'EN' : 'FR';
}

function initLanguage() {
  const saved = localStorage.getItem('lang') || 'fr';
  applyLanguage(saved);

  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = localStorage.getItem('lang') || 'fr';
      const next = current === 'fr' ? 'en' : 'fr';
      localStorage.setItem('lang', next);
      applyLanguage(next);
    });
  }
}

document.addEventListener('DOMContentLoaded', initLanguage);
