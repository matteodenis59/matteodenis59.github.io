# Portfolio — Mattéo Denis

Site statique (HTML/CSS/JS, sans dépendance de build) prêt à être publié sur GitHub Pages.

## Contenu à ajouter avant publication

1. **Photo** : placez votre photo dans `images/photo.jpg`, puis dans `index.html` remplacez
   les deux `<div class="avatar-placeholder">MD</div>` par
   `<img src="images/photo.jpg" alt="Photo de Mattéo Denis">`.
2. **CV en PDF** : placez votre CV dans `assets/CV_Matteo_Denis.pdf` (le bouton "CV" du
   menu et la section Contact y font déjà référence).

## Publier sur GitHub Pages

1. Créez un nouveau dépôt sur GitHub, par exemple `portfolio` (public).
2. Depuis ce dossier, initialisez et poussez le code :
   ```bash
   git init
   git add .
   git commit -m "Portfolio initial"
   git branch -M main
   git remote add origin https://github.com/<votre-pseudo>/portfolio.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages** → dans "Build and deployment", choisissez la source
   **Deploy from a branch**, branche `main`, dossier `/ (root)`, puis **Save**.
4. Après 1-2 minutes, le site sera disponible à :
   `https://<votre-pseudo>.github.io/portfolio/`

Pour l'avoir directement à `https://<votre-pseudo>.github.io/` (sans `/portfolio`),
nommez le dépôt `<votre-pseudo>.github.io`.

## Structure du projet

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── (photo.jpg à ajouter)
└── assets/
    └── (CV_Matteo_Denis.pdf à ajouter)
```

## Personnalisation rapide

- Couleurs : variables CSS en haut de `css/style.css` (`--navy`, `--blue`, etc.).
- Sections : chaque section du site (`À propos`, `Formation`, `Expérience`, `Projets`,
  `Compétences`, `Contact`) est un bloc `<section>` indépendant dans `index.html` —
  facile à réordonner, dupliquer ou éditer.
- Projets : pour ajouter un projet, dupliquez un bloc `.project-card` dans la section
  `#projects`.
# matteodenis59.github.io
# matteodenis59.github.io
