# Portfolio — Mattéo Denis

Site statique multi-pages (HTML/CSS/JS, sans dépendance de build), bilingue FR/EN, prêt à être
publié sur GitHub Pages.

## Structure du site

```
portfolio/
├── index.html                        (Accueil)
├── about.html                        (À propos)
├── education.html                    (Formation)
├── experience.html                   (Expérience professionnelle)
├── projects.html                     (Liste des projets)
├── project-drag-optimisation.html    (Détail projet 1)
├── project-acoustic-levitation.html  (Détail projet 2)
├── skills.html                       (Compétences)
├── contact.html                      (Contact)
├── css/style.css
├── js/main.js                        (navigation, animations)
├── js/i18n.js                        (traductions FR/EN)
├── images/
│   └── (photo.jpg à ajouter)
└── assets/
    └── (CV_Matteo_Denis.pdf à ajouter)
```

Chaque page a sa propre URL (ex. `education.html`, `projects.html`), avec une navbar et un pied
de page communs. C'est un vrai site multi-pages, pas une simple page à défilement.

## Contenu à ajouter avant publication

1. **Photo** : placez votre photo dans `images/photo.jpg`, puis dans `index.html` et `about.html`
   remplacez `<div class="avatar-placeholder">MD</div>` par
   `<img src="images/photo.jpg" alt="Photo de Mattéo Denis">`.
2. **CV en PDF** : placez votre CV dans `assets/CV_Matteo_Denis.pdf`.

## Liens GitHub des projets

Chaque carte projet et chaque page détail ont un bouton "Voir sur GitHub" qui pointe pour
l'instant vers `https://github.com/matteodenis59` (votre profil). Si un projet a son propre
dépôt, remplacez ce lien par l'URL exacte du repo dans :
- `projects.html` (2 boutons)
- `project-drag-optimisation.html` (1 bouton)
- `project-acoustic-levitation.html` (1 bouton)

## Traduction FR/EN

Le bouton "EN"/"FR" en haut de chaque page bascule tout le texte visible entre français et
anglais, et retient votre choix (localStorage) d'une page à l'autre.

Pour modifier un texte traduit, éditez le dictionnaire dans `js/i18n.js` :
- section `fr: { ... }` pour le texte français
- section `en: { ... }` pour le texte anglais

Chaque élément traduisible a un attribut `data-i18n="clé"` dans le HTML qui correspond à une
entrée du dictionnaire (ex. `data-i18n="about.p1"` → `translations.fr.about.p1` /
`translations.en.about.p1`).

Pour ajouter un nouveau texte traduisible : donnez-lui un attribut `data-i18n="page.monTexte"`
dans le HTML, puis ajoutez `monTexte: "..."` dans les objets `fr` et `en` de `js/i18n.js`, sous
la bonne section (`page`).

## Publier sur GitHub Pages

1. Créez un dépôt GitHub public, par exemple `portfolio` ou `votre-pseudo.github.io`.
2. Depuis ce dossier :
   ```bash
   git init
   git add .
   git commit -m "Portfolio initial"
   git branch -M main
   git remote add origin https://github.com/<votre-pseudo>/<nom-repo>.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages** → Source : **Deploy from a branch** → branche `main`,
   dossier `/ (root)` → **Save**.
4. Le site sera disponible à `https://<votre-pseudo>.github.io/<nom-repo>/`
   (ou directement `https://<votre-pseudo>.github.io/` si le repo s'appelle
   `<votre-pseudo>.github.io`).

## Ajouter un nouveau projet

1. Dupliquez `project-drag-optimisation.html`, renommez-le, et adaptez le contenu et les
   attributs `data-i18n`.
2. Ajoutez une nouvelle carte dans `projects.html` (dupliquez un `.project-card`) pointant vers
   la nouvelle page et le bon lien GitHub.
3. Ajoutez les traductions correspondantes dans `js/i18n.js` (section `fr` et `en`).

## Personnalisation rapide

- Couleurs : variables CSS en haut de `css/style.css` (`--navy`, `--blue`, etc.).
- Navigation : la barre de navigation et le pied de page sont dupliqués sur chaque page HTML
  (pas de système de template, site 100% statique) — pensez à répercuter tout changement de menu
  sur toutes les pages.
