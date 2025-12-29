# Academy Specification

## Overview

Academy est l'interface de gestion des formations Semisto sur les jardins-forêts et forêts comestibles. Elle permet aux coordinateurs d'organiser, suivre et analyser leurs formations de manière fluide et efficace, depuis l'idée initiale jusqu'au reporting final.

## User Flows

- **Consulter le tableau Kanban** des formations organisées par statut (Brouillon → Planifiée → Inscriptions ouvertes → En cours → Terminée, + Annulée)
- **Créer une formation** basée sur un type de formation, avec dates, lieux, formateurs/assistants, tarif, places et option hébergement
- **Gérer les types de formation** : créer/modifier des types avec template de checklist et galerie photos réutilisables
- **Gérer les lieux de formation** : descriptif WYSIWYG, galerie photos, types de formation compatibles
- **Gérer les inscriptions** : ajouter un participant, montant payé, statut de paiement, note interne
- **Suivre les présences** des participants pour chaque session
- **Suivre la checklist** d'actions (héritée du type, personnalisable par formation)
- **Uploader des documents** destinés aux participants (accès privé via le site)
- **Ajouter des dépenses** et voir le calcul automatique des recettes et de la rentabilité
- **Consulter le calendrier** des formations (vue mensuelle et annuelle)
- **Gérer le carnet d'idées** : notes générales sur sujets, formateurs potentiels, lieux judicieux
- **Analyser le reporting** : KPIs, rentabilité, statistiques des formations

## UI Requirements

- **Vue Kanban** comme écran principal avec colonnes par statut
- **Fiche formation** détaillée avec onglets : Infos, Sessions, Inscriptions, Présences, Documents, Checklist, Finances
- **Gestion des types de formation** : liste avec template checklist et galerie photos
- **Gestion des lieux** : fiche avec éditeur WYSIWYG, galerie photos, types compatibles
- **Calendrier** mensuel et annuel pour visualiser les dates
- **Carnet d'idées** : interface de notes rapides pour capturer des idées
- **Reporting** : tableaux et graphiques pour KPIs et rentabilité
- **Indicateurs visuels** de progression des checklists et du remplissage des places
- **Interface agréable et pratique** pour usage quotidien

## Configuration

- shell: true

