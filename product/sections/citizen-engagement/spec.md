# Citizen Engagement Specification

## Overview
Plateforme d'engagement citoyen permettant de cartographier le potentiel de plantations comestibles (Villages Nourriciers), de contribuer aux besoins de Semisto (dons, bénévolat, matériel), et de participer à une communauté active avec gamification. Interface ludique et colorée avec hub central donnant accès aux différents modules.

## User Flows
- Visiteur explore la carte publique et consulte les stats d'impact sans connexion
- Citoyen s'inscrit, se rattache à un village, et commence à cartographier des spots potentiels
- Contributeur parcourt les besoins (campagnes, wishlist) et effectue un don via paiement intégré
- Membre s'inscrit à un chantier participatif et reçoit les informations pratiques
- Parrain adopte un site planté et tient son carnet de bord avec photos annuelles
- Ambassadeur village anime sa communauté locale et suit le classement inter-villages
- Membre gagne des badges et progresse dans les défis saisonniers
- Utilisateur déclare ses surplus (fruits, greffons) dans la marketplace locale
- Jardinier propose ses compétences (greffe, taille) dans l'annuaire de transmission

## UI Requirements
- Hub central engageant : compteurs d'impact animés, besoins urgents mis en avant, activité récente
- Carte interactive (Mapbox/Leaflet) avec points/lignes/polygones, filtres par statut et catégorie
- Système de campagnes avec jauges de progression et objectifs
- Wishlist pour besoins matériels avec bouton "Je finance cet item"
- Profil utilisateur avec badges collectionnés, villages rattachés, contributions
- Classements inter-villages avec badges progressifs (éveil → planteur → nourricier → résilient)
- Calendrier des chantiers et événements avec inscription en ligne
- Carnet de bord des sites avec timeline photos et indicateur de maturité
- Marketplace locale pour échanges (don/troc/vente) de surplus
- Annuaire des compétences avec système de mise en relation
- Notifications et alertes saisonnières pour les parrains
- Progress bars, animations de célébration, badges visibles partout

## Configuration
- shell: true
