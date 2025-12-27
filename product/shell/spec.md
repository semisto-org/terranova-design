# Application Shell Specification

## Overview

Le shell de Terranova suit un pattern "Pôle Focus" avec un sélecteur contextuel unifié inspiré de Notion/Stripe. L'interface reste minimaliste malgré la complexité multi-pôles en ne montrant que les sous-sections pertinentes au contexte actuel.

## Layout Pattern

```
┌─────────────────────────────────────────────────────────────┐
│ [🌳 Semisto Wallonie ▾]                       🔔   🔍      │
├────────────┬────────────────────────────────────────────────┤
│            │                                                │
│  [Sous-    │                                                │
│   sections │           Zone de contenu                      │
│   du pôle  │                                                │
│   actif]   │                                                │
│            │                                                │
└────────────┴────────────────────────────────────────────────┘
```

## Header

- **Gauche** : Sélecteur contextuel (logo pôle + nom Lab + chevron)
- **Droite** : Icône notifications, icône recherche

Le header est minimaliste — toute la navigation se fait via le sélecteur contextuel et la sidebar.

## Sélecteur Contextuel

Click sur le sélecteur ouvre un menu unifié :

```
┌──────────────────────────────┐
│  👤 Marie Dupont             │
│  marie@semisto.org           │
├──────────────────────────────┤
│  PÔLES                       │
│  ● Design Studio             │
│  ○ Academy                   │
│  ○ Nursery                   │
│  ○ Mise en oeuvre            │
├──────────────────────────────┤
│  🏠 Gestion du Lab           │
│  🌐 Website                  │
├──────────────────────────────┤
│  LABS                        │
│  ✓ Semisto Wallonie          │
│    Semisto Bruxelles         │
├──────────────────────────────┤
│  ⚙ Paramètres                │
│  ↪ Déconnexion               │
└──────────────────────────────┘
```

### Sections du menu

1. **Identité utilisateur** : Avatar, nom, email
2. **Pôles** (4 pôles métier avec indicateur couleur) :
   - Design Studio (#AFBD00)
   - Academy (#B01A19)
   - Nursery (#EF9B0D)
   - Mise en oeuvre (#234766)
3. **Accès spéciaux** :
   - Gestion du Lab (#5B5781) — finance, gouvernance, membres
   - Website — CMS, visible selon rôle
4. **Labs** : Liste des Labs dont l'utilisateur est membre (si multi-Lab)
5. **Actions** : Paramètres, Déconnexion

## Sidebar Contextuelle

Affiche les sous-sections du pôle/espace actif :

### Design Studio
- Projets
- Clients
- Offres
- Plantations

### Academy
- Formations
- Inscriptions
- Contenus
- Participants

### Nursery
- Stocks
- Commandes
- Catalogue

### Mise en oeuvre
- Chantiers
- Heroes
- Événements
- Matériothèque

### Gestion du Lab
- Cycles
- Membres
- Guildes
- Semos
- Finance
- Reporting

### Website
- Pages
- Transformation Map
- Boutique
- Portfolio
- Formations (catalogue public)

## Indicateur Visuel du Pôle

- Le logo/icône dans le sélecteur prend la couleur du pôle actif
- L'item actif dans la sidebar a une bordure gauche de la couleur du pôle
- Transition douce (200ms) lors du changement de pôle

## Couleurs des Pôles

| Pôle | Couleur accent | Couleur fond header |
|------|----------------|---------------------|
| Design Studio | #AFBD00 | #e1e6d8 |
| Academy | #B01A19 | #eac7b8 |
| Nursery | #EF9B0D | #fbe6c3 |
| Mise en oeuvre | #234766 | #c9d1d9 |
| Gestion du Lab | #5B5781 | #c8bfd2 |
| Website | #5B5781 | #FFFFFF |

## Responsive Behavior

- **Desktop (≥1024px)** : Sidebar visible, header complet
- **Tablet (768-1023px)** : Sidebar collapsible, toggle dans le header
- **Mobile (<768px)** : Sidebar en drawer (hamburger menu), header simplifié

## Design Notes

- Le sélecteur contextuel unifie navigation et user menu en un seul point d'entrée
- La sidebar ne montre que les sous-sections du contexte actif, réduisant la charge cognitive
- Website n'apparaît que pour les utilisateurs avec les permissions appropriées
- La section Labs n'apparaît que si l'utilisateur est membre de plusieurs Labs
