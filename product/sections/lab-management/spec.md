# Lab Management Specification

## Overview
Lab Management est le centre opérationnel du Lab Semisto. Il implémente la méthodologie Shape Up avec ses trois modules (Shaping, Betting, Building), gère les membres et leurs rôles, administre le système financier Semos, et permet le suivi des prestations via timesheets. Un calendrier centralise la visualisation des cycles, réunions et événements collectifs.

## User Flows

**Shape Up - Shaping Track :**
- Créer un Pitch avec les 5 ingrédients (Problem, Appetite, Solution, Rabbit Holes, No-Gos)
- Utiliser les outils Breadboarding pour mapper les flux fonctionnels
- Utiliser les Fat Marker Sketches pour esquisser des solutions low-fidelity
- Collaborer dans l'espace privé de cadrage (Product Strategy)

**Shape Up - Betting Table :**
- Consulter les pitches pendant la période de cool-down (2 semaines)
- Placer des paris sur les projets pour le cycle de 6 semaines
- Gérer les listes décentralisées (Requests, Bugs, Ideas) indépendamment du betting

**Shape Up - Building Track :**
- Organiser les tâches en Scopes (tranches intégrées du projet)
- Mettre à jour le Hill Chart en déplaçant les scopes (uphill/downhill)
- Consulter l'historique du Hill Chart pour identifier les blocages
- Marquer les tâches avec tilde (~) pour distinguer must-haves et nice-to-haves
- Gérer la Chowder List pour les tâches non assignées

**Cycles et Calendrier :**
- Visualiser les cycles (6 semaines travail + 2 semaines cool-down) sur le calendrier
- Créer et consulter les événements : réunions de projet, réunions porteurs, Design Days
- Voir les événements collectifs : Semisto Days, Semos Fest
- Tout membre peut créer des événements

**Gestion des Membres :**
- Ajouter des membres (admin uniquement)
- Définir les rôles, profils et paramètres de chaque membre
- Consulter l'annuaire des membres du Lab

**Système Semos :**
- Consulter son solde et l'historique des transactions
- Transférer des Semos entre membres
- Administrer le système : émission, conversion, règles (admin)

**Timesheets :**
- Saisir une prestation via formulaire (date, heures, type, catégorie, descriptif)
- Lier une prestation à une formation, projet design, ou guilde
- Indiquer les KM aller/retour
- Cocher quand la prestation a été facturée
- Consulter l'historique de ses prestations

## UI Requirements

**Shape Up :**
- Template de Pitch structuré avec les 5 sections obligatoires
- Canvas Breadboarding avec Places, Affordances et Connections
- Canvas Fat Marker avec brush large uniquement (pas de détails fins)
- Espace privé de cadrage accessible aux seniors/leaders
- Interface Betting Table avec visualisation des pitches et système de paris
- Vue Scopes avec regroupement des tâches
- Hill Chart interactif avec drag & drop et historique
- Indicateur visuel tilde (~) pour les nice-to-haves
- Liste Chowder séparée des scopes
- Circuit Breaker : alerte et annulation automatique si deadline dépassée

**Calendrier :**
- Vue mensuelle avec cycles colorés (travail vs cool-down)
- Filtrage par type d'événement
- Création rapide d'événements par tout membre
- Distinction visuelle entre événements de pôle et événements collectifs

**Membres :**
- Liste des membres avec rôles et statut
- Fiche profil détaillée
- Formulaire d'ajout (admin only)

**Semos :**
- Dashboard avec solde actuel
- Historique des transactions avec filtres
- Formulaire de transfert entre membres
- Interface admin pour émission et règles

**Timesheets :**
- Formulaire de saisie avec tous les champs requis
- Sélecteurs pour lier à formation/projet/guilde
- Liste des prestations avec filtres et recherche
- Indicateur visuel pour prestations facturées vs non facturées

## Configuration
- shell: true
