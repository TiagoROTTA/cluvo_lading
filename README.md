# CLUVO Landing Page

Landing page pour CLUVO - Plateforme de validation de demande client pour founders.

## Stack Technique

- **Next.js 14** avec App Router
- **TypeScript**
- **Tailwind CSS** pour le styling
- **Google Fonts** (Inter & IBM Plex Mono) via next/font
- **Material Symbols** pour les icônes

## Installation

1. Installer les dépendances :

```bash
npm install
```

2. Lancer le serveur de développement :

```bash
npm run dev
```

3. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Scripts Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile l'application pour la production
- `npm start` - Lance l'application compilée
- `npm run lint` - Vérifie les erreurs de linting

## Structure du Projet

```
cluvo-landing/
├── app/
│   ├── layout.tsx          # Layout principal avec fonts et metadata
│   ├── page.tsx            # Page d'accueil
│   ├── globals.css         # Styles globaux
│   └── api/
│       └── waitlist/
│           └── route.ts    # API pour la waiting list
├── public/                 # Assets statiques
├── tailwind.config.ts      # Configuration Tailwind
├── next.config.js          # Configuration Next.js
└── package.json
```

## Déploiement sur Vercel

1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Cliquez sur "Deploy"

## Intégration Airtable (À venir)

Pour intégrer Airtable pour la waiting list :

1. Installer le package Airtable :
```bash
npm install airtable
```

2. Ajouter les variables d'environnement dans `.env.local` :
```
AIRTABLE_API_KEY=your_api_key
AIRTABLE_BASE_ID=your_base_id
```

3. Décommenter le code Airtable dans `app/api/waitlist/route.ts`

4. Ajouter les variables d'environnement dans Vercel

## Mode Sombre

Le mode sombre est géré via la classe `dark` de Tailwind CSS. Pour l'activer automatiquement selon les préférences système ou via un toggle, vous pouvez ajouter un composant de gestion du thème.

## License

© 2024 CLUVO Inc. All rights reserved.

