# Plant Database Specification

## Overview
Base de données végétale publique 100% compatible mobile, permettant aux concepteurs de forêts comestibles de rechercher et comparer genres, espèces et variétés selon des critères détaillés. Interface standalone avec recherche avancée, fiches complètes incluant galerie photos, notes collaboratives, carte des implantations, disponibilité en pépinières et résumé généré par IA. Système de contribution modérée par des contributeurs validés, avec flux d'activité communautaire, profils contributeurs et récompenses en Semos.

## User Flows
- **Recherche et filtrage** : L'utilisateur arrive sur une barre de recherche prominente, peut filtrer par type/exposition/rusticité (filtres principaux) ou accéder à des filtres avancés. Les résultats s'affichent en liste simple (nom latin + nom commun) pour un scan rapide.
- **Consultation d'une fiche** : L'utilisateur accède à une fiche détaillée (genre/espèce/variété) avec toutes les propriétés, galerie photos, noms communs multilingues, références (liens + PDFs), notes des contributeurs, carte des implantations, disponibilité en pépinières et résumé IA optionnel.
- **Résumé IA** : L'utilisateur clique sur un bouton dans un callout explicatif pour demander un résumé généré par IA. Le résumé synthétise les notes des contributeurs (toutes langues) et les propriétés de l'élément. La requête est traitée de manière asynchrone et le résultat s'affiche une fois disponible.
- **Élaboration de palette végétale** : Le paysagiste constitue une palette en ajoutant des espèces/variétés par drag & drop dans un panier organisé par strates (aquatique, couvre-sols, herbacées, grimpantes, arbustes, arbres). Il peut comparer les éléments sélectionnés, exporter en PDF ou envoyer la palette vers le Design Studio pour un projet.
- **Contribution** : Les contributeurs validés peuvent créer/modifier des fiches, ajouter des photos, des notes et des références. Chaque contribution rapporte des Semos selon des règles définies.
- **Carte des implantations** : Visualisation des emplacements où la plante est implantée, avec distinction des plants-mères disponibles (markers colorés différemment).
- **Flux d'activité** : L'utilisateur consulte les dernières contributions de la communauté (nouvelles fiches, modifications, photos ajoutées, notes) dans un flux chronologique style Basecamp.
- **Profil contributeur** : Chaque contributeur a un profil public affichant ses statistiques de contribution, son historique d'activité et ses Semos gagnés, à la façon des profils GitHub.

## UI Requirements
- Interface standalone (pas de shell), responsive et 100% compatible mobile
- Barre de recherche prominente en page d'accueil avec autocomplétion par nom latin ou commun
- Filtres principaux visibles : Type, Exposition, Rusticité ; autres filtres dans "Plus de filtres"
- Liste de résultats simple et rapide à scanner (nom latin + nom commun)
- Fiche détaillée scrollable avec sections collapsibles pour les nombreuses propriétés
- Galerie photos swipeable
- Section notes avec auteur visible (lien vers profil) et photos intégrées
- Carte interactive avec markers bicolores (plant-mère disponible ou non)
- **Résumé IA** : Callout explicatif avec bouton "Générer un résumé IA". État de chargement pendant le traitement, puis affichage du résumé généré dans la même zone.
- **Disponibilité pépinières** : Section sur la fiche affichant les pépinières-écoles qui ont cette espèce/variété en stock, avec quantité disponible et lien vers la pépinière
- **Panier palette végétale** : Panel latéral (desktop) ou bottom sheet (mobile) toujours accessible, divisé en 6 strates visuellement distinctes (aquatique, couvre-sols, herbacées, grimpantes, arbustes, arbres). Drag & drop depuis les résultats ou les fiches vers la strate souhaitée. Sur mobile, geste de swipe ou bouton d'ajout rapide avec sélection de strate.
- Vue comparaison : Tableau des éléments de la palette avec propriétés clés côte à côte
- Actions palette : Exporter PDF, envoyer vers Design Studio, sauvegarder la palette
- **Flux d'activité** : Timeline verticale groupée par date, affichant avatar, nom du contributeur, action réalisée et lien vers l'élément concerné
- **Profil contributeur** : Photo, nom, date d'inscription, statistiques (fiches créées, photos ajoutées, notes rédigées), total Semos gagnés, graphique d'activité style GitHub, liste des contributions récentes

## Propriétés des espèces
Toutes avec widgets adaptés (checkboxes, multi-select, etc.) :
- Type
- Parties comestibles
- Intérêts
- Besoins écosystémiques
- Modes de multiplication
- Origine
- Couleurs des fleurs
- Période de plantation
- Période de récolte
- Exposition
- Rusticité
- Mise à fruit
- Floraison
- Feuillage
- Indigène (par pays)
- Fertilité
- Système racinaire
- Croissance
- Zone jardin-forêt
- Pollinisation
- Type de sol
- Humidité du sol
- Richesse du sol
- Besoins en arrosage
- Éléments toxiques
- Invasive
- Propriétés thérapeutiques
- Cycle de vie
- Couleur du feuillage
- Floraison parfumée
- Transformations possibles
- Qualités fourragères

## Propriétés additionnelles des variétés
- Productivité estimée
- Calibre des fruits
- Qualité gustative (note 1-5)
- Durée de conservation
- Précocité
- Résistance aux maladies

## Configuration
- shell: false
