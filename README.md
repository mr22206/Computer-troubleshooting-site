# 🛠 Dépannage Informatique 06

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-18.3.1-61dafb)
![Licence](https://img.shields.io/badge/license-MIT-green)

Application web professionnelle de services de dépannage informatique dans les Alpes-Maritimes (06), offrant des solutions à distance et à domicile.

## 📚 Table des Matières

- [Démo](#-démo)
- [Fonctionnalités](#-fonctionnalités)
- [Technologies](#-technologies)
- [Installation](#-installation)
- [Structure du Projet](#-structure-du-projet)
- [Déploiement](#-déploiement)
- [Maintenance](#-maintenance)
- [Tests](#-tests)
- [Contact](#-contact)

## 🚀 Démo

- [Site en Production](https://mr22206.github.io/Computer-troubleshooting-site)
- [Repository GitHub](https://github.com/mr22206/Computer-troubleshooting-site)

## ✨ Fonctionnalités

### Services Principaux
- 🖥 **Dépannage à Distance**
  - Connexion via TeamViewer
  - Support en temps réel
  - Diagnostic rapide

- 🏠 **Intervention à Domicile**
  - Couverture des Alpes-Maritimes
  - Service personnalisé
  - Diagnostic sur place

- 💰 **Tarification**
  - Intervention ponctuelle : 45€/heure
  - Maintenance mensuelle : 60€/mois
  - Forfait annuel : 500€/an

### Caractéristiques Techniques
- Design responsive
- Navigation fluide (HashRouter)
- Thème sombre moderne
- Animations CSS
- Composants réutilisables

## 🛠 Technologies

- **Frontend**
  - React.js 18.3.1
  - React Router DOM 6.27.0
  - CSS Modules
  - React Icons 5.3.0

- **Déploiement**
  - GitHub Pages
  - GitHub Actions

## ⚙️ Installation

1. **Prérequis**
```bash
node -v  # v18 ou supérieur recommandé
npm -v   # v8 ou supérieur recommandé
```

2. **Installation**
```bash
# Cloner le repository
git clone https://github.com/mr22206/Computer-troubleshooting-site.git

# Installer les dépendances
cd Computer-troubleshooting-site
npm install

# Lancer en développement
npm start
```

## 📁 Structure du Projet

```
src/
├── components/
│   ├── Home/
│   │   ├── Welcome.js
│   │   └── Services.js
│   └── Layout/
│       ├── Header/
│       └── Footer/
├── pages/
│   ├── Home.js
│   ├── Distance.js
│   ├── Domicile.js
│   ├── Tarifs.js
│   └── Support.js
├── styles/
│   ├── components/
│   └── pages/
└── App.js
```

## 📦 Déploiement

1. **Configuration**
```json
{
  "homepage": ".",
  "scripts": {
    "predeploy": "npm run build:github",
    "deploy": "gh-pages -d build",
    "build:github": "env-cmd -f .env.github react-scripts build"
  }
}
```

2. **Variables d'Environnement**
```env
PUBLIC_URL=/Computer-troubleshooting-site
```

3. **Déployer**
```bash
npm run deploy
```

## 🔧 Maintenance

### Scripts Disponibles
```bash
npm start        # Lance le serveur de développement
npm test         # Execute les tests
npm run build    # Build pour la production
npm run deploy   # Déploie sur GitHub Pages
```

### Mise à jour des dépendances
```bash
# Vérifier les mises à jour disponibles
npm outdated

# Mettre à jour les packages
npm update
```

## 🧪 Tests

```bash
# Lancer tous les tests
npm test

# Lancer les tests avec couverture
npm test -- --coverage
```

## 📱 Responsive Design

Le site est optimisé pour :
- 📱 Mobile (< 768px)
- 💻 Tablette (768px - 1024px)
- 🖥 Desktop (> 1024px)

## 🎯 Roadmap

### Version 1.1 (Q2 2024)
- [ ] Amélioration de l'interface utilisateur
  - [ ] Mode clair/sombre
  - [ ] Animations de transition améliorées
  - [ ] Optimisation mobile
- [ ] Formulaire de contact amélioré
  - [ ] Validation en temps réel
  - [ ] Auto-complétion des champs
  - [ ] Confirmation par email

### Version 1.2 (Q3 2024)
- [ ] Système de prise de rendez-vous
  - [ ] Calendrier interactif
  - [ ] Choix des créneaux disponibles
  - [ ] Rappels par email/SMS
- [ ] Zone client simple
  - [ ] Historique des interventions
  - [ ] Suivi des demandes
  - [ ] Documents et factures

### Version 1.3 (Q4 2024)
- [ ] Blog technique
  - [ ] Articles de dépannage
  - [ ] Conseils maintenance
  - [ ] Tutoriels simples
- [ ] FAQ interactive
  - [ ] Recherche intelligente
  - [ ] Solutions rapides
  - [ ] Base de connaissances

### Version 1.4 (Q1 2025)
- [ ] Témoignages clients
  - [ ] Système d'avis vérifié
  - [ ] Photos des interventions
  - [ ] Retours d'expérience
- [ ] Statistiques et rapports
  - [ ] Temps de réponse
  - [ ] Types d'interventions
  - [ ] Zones géographiques

### Améliorations Continues
- [ ] SEO et performances
- [ ] Sécurité et protection des données
- [ ] Compatibilité navigateurs
- [ ] Accessibilité (WCAG)

## 📞 Contact

- **Téléphone** : [06 61 38 83 74](tel:0661388374)
- **Email** : [techinfotuto@gmail.com](mailto:techinfotuto@gmail.com)
- **Discord** : [Serveur Communautaire](https://discord.gg/zaeGWv74hB)
- **Disponibilité** : 7j/7

## 📜 Changelog

### [1.0.0] - 2024-03-XX
- Interface initiale
- Système de routing
- Pages principales
- Déploiement GitHub Pages

### [0.9.0] - 2024-02-XX
- Beta version
- Tests d'intégration
- Optimisations performances

## 📄 Licence

© 2024 Dépannage Informatique 06 - Tous droits réservés

---

Made with ❤️ by [Mohammad Rezki](https://github.com/mr22206)