# Website Specification

## Overview

Site web vitrine de Semisto présentant le mouvement et ses Labs. Architecture multi-sites avec un portail global (semisto.org) et des mini-sites par Lab (sous-domaines comme wallonie.semisto.org). Inclut l'e-commerce mutualisé, la Transformation Map, et l'intégration de la Plant Database. Site multilingue (langues européennes).

## User Flows

- **Découverte globale** — Un visiteur arrive sur semisto.org, découvre le mouvement, les données d'impact, et choisit son Lab local
- **Navigation Lab** — Le visiteur entre dans le mini-site de son Lab et explore les pôles actifs (Design Studio, Academy, Roots, Pépinière)
- **Parcours Design Studio** — Un visiteur intéressé par un projet sélectionne son profil (privé, entreprise, collectif, service public) et accède aux infos adaptées (offres, exemples de projets, arguments, processus)
- **Inscription formation/événement** — Le visiteur consulte le catalogue Academy, sélectionne une formation ou un événement (conférence, visite, atelier), et s'inscrit
- **Achat e-commerce** — Le visiteur parcourt le catalogue produits (plantes, livres, matériel, outillage) filtré par pays, ajoute au panier, passe commande avec paiement en ligne, et récupère en pépinière
- **Don / Soutien** — Le visiteur découvre les projets en attente de financement et fait un don au Lab ou à un projet spécifique
- **Inscription newsletter** — CTA prioritaire présent sur toutes les pages, inscription à la newsletter du Lab actif
- **Rejoindre Semisto Roots** — Le visiteur découvre les Food Forest Heroes et les chantiers participatifs, et s'inscrit pour participer
- **Exploration ressources** — Le visiteur consulte la Plant Database, télécharge les fiches pédagogiques, et lit les articles

## UI Requirements

### Header & Navigation
- Header commun à tout le site avec sélecteur de Lab
- Navigation fluide entre le site global et les mini-sites Labs
- Le visiteur se sent "sur le site de son Lab" dès qu'il quitte l'accueil global
- Sélecteur de langue (toutes langues européennes)

### Page d'accueil globale (semisto.org)
- Présentation du mouvement Semisto
- Carte/liste des Semisto Labs avec accès aux mini-sites
- Formations phares mises en avant
- Projets phares mis en avant
- Données d'impact concret de Semisto
- Articles récents

### Mini-site Lab (sous-domaine)
- Page d'accueil Lab avec présentation et pôles actifs
- Chaque Lab affiche uniquement ses pôles actifs (tous les Labs n'ont pas les 4 pôles)
- Newsletter CTA proéminent sur toutes les pages
- Contact Lab

### Design Studio (par Lab)
- Landing page avec choix de profil : privé, entreprise, collectif, service public
- Pages dédiées par profil avec offres, tarifs, exemples de projets, arguments spécifiques, processus de travail

### Academy (par Lab)
- Catalogue des formations
- Catalogue des événements : conférences, visites, ateliers
- Pages de détail avec inscription

### Semisto Roots (par Lab)
- Présentation des Food Forest Heroes (groupes locaux de planteurs bénévoles)
- Liste des chantiers participatifs
- Inscription pour rejoindre les Roots

### E-commerce (mutualisé)
- Catalogue produits : plantes, livres, matériel pédagogique, petit outillage
- Filtré par pays par défaut (retrait en pépinière locale)
- Panier d'achat
- Process de checkout avec paiement en ligne
- Retrait des commandes en pépinière uniquement
- Suivi des commandes via l'espace privé (autre section)

### Projets / Portfolio (par Lab)
- Portfolio des projets de jardins-forêts réalisés
- Mise en avant des projets en attente de financement
- Boutons de don (au Lab ou au projet spécifique)

### Transformation Map
- Carte interactive des projets européens
- Layers additionnels : zones à potentiel marquées par les contributeurs
- Accessible identiquement depuis tous les Labs

### Ressources (menu global)
- Plant Database intégrée
- Section pédagogique : fiches téléchargeables sur les forêts comestibles, strates, guildes végétales
- Articles rédigés par les membres

### Pages statiques
- Concept des forêts comestibles (intégré aux ressources pédagogiques)
- Semisto dans la presse
- Page de contact générale

### Espace connexion
- Accès à la partie privée de l'application
- Interface privée détaillée dans une autre section

### Gestion de contenu
- Contenus éditables par les membres du Lab : formations, événements, projets Design Studio, articles
- Pages de contenu commun en dur dans le code (pas de CMS)

## Configuration

- shell: false

