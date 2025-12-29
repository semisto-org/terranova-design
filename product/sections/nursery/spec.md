# Nursery Specification

## Overview

Section dédiée à la gestion des pépinières Semisto et du réseau de pépinières partenaires labellisées. Elle permet la gestion des stocks, le suivi des plants-mères, le traitement des commandes, l'optimisation des transferts inter-pépinières, la planification des équipes et la documentation du modèle de micro-pépinière.

## User Flows

- Consulter le tableau de bord : vue d'ensemble des actions à effectuer (suivi des plants, stocks manquants, commandes à traiter, transferts à organiser)
- Gérer le stock : ajouter/modifier des lots (date de semis, origine, stade de développement, contenant) avec champs optionnels pour les débutants
- Gérer les pépinières partenaires : ajouter une pépinière au réseau, distinguer celles qui utilisent la plateforme (stock temps réel) de celles sans plateforme (liste manuelle des espèces/variétés)
- Consulter les plants-mères : visualiser par espèce/variété un tableau des plants-mères disponibles (lieu, date de plantation, source Design Studio ou proposition membre)
- Valider une proposition de plant-mère : un membre propose ses plantations, les pépiniéristes valident
- Traiter une commande : voir les commandes entrantes, préparer les plants, marquer comme prêt
- Organiser les transferts : planifier les transferts inter-pépinières pour rassembler les articles d'une commande, optimiser les kilomètres parcourus
- Gérer le planning : planifier les créneaux des employés, stagiaires et bénévoles
- Documenter : publier des entrées de journal, fiches techniques, tutoriels vidéo
- Enregistrer les timesheets : saisir le temps de travail pour toutes les personnes travaillant dans les pépinières
- Consulter le catalogue multi-pépinières : vue pour les Designers du Design Studio avec disponibilités temps réel (pépinières avec plateforme) ou liste des espèces (pépinières sans plateforme)

## UI Requirements

- Tableau de bord : widgets avec alertes et actions prioritaires (stocks bas, commandes en attente, transferts à planifier)
- Gestion du stock : vue en tableau filtrable par pépinière, espèce, variété, stade, contenant ; formulaire de lot avec champs optionnels
- Liste des contenants : configuration globale des types de contenants disponibles
- Pépinières partenaires : liste avec distinction visuelle plateforme/sans plateforme ; fiche pépinière avec catalogue
- Plants-mères : tableau par espèce/variété avec colonnes lieu, date de plantation, statut (Design Studio / membre validé / en attente)
- Commandes : liste avec statut (nouvelle, en préparation, prête, retirée) ; détail avec provenance multi-pépinières visible, point de retrait, niveau de prix choisi (solidaire/base/soutien), paiement mixte euros/Semos
- Transferts : vue carte ou liste des transferts à organiser avec suggestion d'optimisation kilométrique
- Planning : calendrier hebdomadaire avec créneaux par personne (employé, stagiaire, bénévole)
- Documentation : liste des entrées (journal, fiches, vidéos) avec éditeur de contenu
- Timesheets : saisie et visualisation du temps par personne et par activité
- Catalogue Designers : vue lecture seule avec recherche/filtres, indication de disponibilité par pépinière

## Configuration

- shell: true

