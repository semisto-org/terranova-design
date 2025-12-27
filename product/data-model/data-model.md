# Data Model

## Entities

### Lab
Collectif local autonome du réseau Semisto (ex: Semisto Wallonie). Chaque Lab gère ses propres membres, cycles, projets, formations et pépinière de manière indépendante tout en partageant des ressources avec le réseau.

### Member
Personne active dans un Lab avec un ou plusieurs rôles (designer, formateur, comptable, etc.). Les membres peuvent être rémunérés ou bénévoles et accumulent des Semos pour leurs contributions.

### Cycle
Période de travail Shape Up (7-8 semaines) suivie d'une période de cooldown (2 semaines). Les cycles donnent le rythme aux projets et activités du Lab.

### Guild
Fonction support transversale au sein d'un Lab (IT, financement, comptabilité, communication, logistique). Les guildes regroupent des membres autour de missions de soutien.

### Genus
Classification botanique des plantes au niveau du genre. Donnée partagée au niveau du réseau Semisto.

### Species
Espèce végétale avec ses caractéristiques détaillées (strate, usages, sol, climat, etc.). Donnée partagée au niveau du réseau, enrichie collaborativement.

### Variety
Cultivar ou variété spécifique d'une espèce. Donnée partagée au niveau du réseau.

### Project
Projet de jardin-forêt pour un client, incluant les informations terrain, budget, statut et avancement. Géré par un Lab.

### ProjectDocument
Document lié à un projet : offre commerciale, plan de design, rapport, page client, etc.

### Planting
Chantier de plantation organisé, lié ou non à un projet client. Comprend la planification, la logistique et la coordination des participants.

### Plant
Plante individuelle plantée, reliée à une espèce (et éventuellement une variété), un lieu, et éventuellement un projet client. Permet le suivi et la traçabilité des plantations.

### Course
Formation proposée par un Lab : catalogue, contenus pédagogiques, syllabus participatifs. Peut être présentielle ou en ligne.

### Registration
Inscription d'un participant à une formation, incluant le statut de paiement et la participation.

### Stock
Quantité disponible d'une espèce (et éventuellement variété) dans la pépinière d'un Lab. Suivi des entrées et sorties.

### Order
Commande de plants, interne (entre Labs ou membres, en Semos ou euros) ou externe (grand public, en euros).

### Contribution
Apport d'un citoyen ou membre au mouvement : temps (participation à un chantier), argent (don, financement), ou matériel.

### Worksite
Chantier participatif ouvert aux bénévoles (Food Forest Heroes). Comprend inscriptions, planning, coordination et validation des participations.

### Event
Événement public (fête de plantation, portes ouvertes, fête des récoltes) ou interne (atelier, réunion, formation).

### Equipment
Matériel mis à disposition par un tiers (particulier ou organisation) via la matériothèque : drones, outils de plantation, véhicules, etc.

### Partner
Institution, entreprise ou collectivité partenaire du mouvement, avec un espace dédié pour visualiser les projets et suivre leurs contributions.

### Funding
Allocation de fonds par un partenaire à un ou plusieurs projets, avec traçabilité de l'impact pour le reporting RSE.

### Wallet
Portefeuille Semos d'un membre ou d'une entité (Lab, Semisto). Comprend un solde, un plancher négatif (évite les blocages) et un plafond (évite l'accumulation).

### SemosTransaction
Mouvement de Semos entre deux portefeuilles : paiement pour un produit/service, échange entre membres, rétribution interne.

### SemosEmission
Création de Semos : cotisation membre, fee prestataire (% du CA), rétribution bénévole (1S/h), fidélisation client/donateur, participation à des activités (GT, PeerReview, chantier).

### SemosRate
Tarif de référence en Semos configurable par Lab : cotisation par type de membre, taux horaire, pourcentage CA pour fidélisation, prix des produits.

### Place
Lieu géolocalisé : site de plantation, lieu de formation, adresse client, espace du Lab, etc.

### Contact
Personne externe au Lab : client, prospect, partenaire, donateur, prescripteur, fournisseur, stagiaire.

### Timesheet
Temps passé par un membre, pouvant être facturé en euros ou valorisé en Semos. Lié à un projet, une formation, une guilde ou une activité support.

## Relationships

### Organisation
- Lab has many Members
- Lab has many Cycles
- Lab has many Guilds
- Member belongs to Lab
- Member has one Wallet
- Member has many Timesheets
- Cycle belongs to Lab

### Végétal
- Genus has many Species
- Species belongs to Genus
- Species has many Varieties
- Variety belongs to Species

### Design
- Project belongs to Lab
- Project has many ProjectDocuments
- Project has many Plants
- Project optionally belongs to Contact (client)
- Plant belongs to Species
- Plant optionally belongs to Variety
- Plant optionally belongs to Place
- Plant optionally belongs to Project
- Planting belongs to Lab
- Planting optionally belongs to Project
- Planting has one Place

### Formation
- Course belongs to Lab
- Registration belongs to Course
- Registration belongs to Contact (participant)

### Pépinière
- Stock belongs to Lab
- Stock belongs to Species
- Stock optionally belongs to Variety
- Order belongs to Lab
- Order has many line items (Species/Variety with quantities)

### Engagement
- Contribution belongs to Contact or Member
- Worksite belongs to Lab
- Worksite has one Place
- Worksite has many participants (Members and Contacts)
- Event belongs to Lab
- Event optionally belongs to Place
- Equipment belongs to Contact (owner)
- Equipment is available to Labs

### Partenaires
- Partner has many Fundings
- Funding belongs to Partner
- Funding optionally linked to Project

### Semos
- Wallet belongs to Member or Lab
- SemosTransaction links two Wallets (from and to)
- SemosEmission credits a Wallet
- SemosRate belongs to Lab

### Transversal
- Place belongs to Lab (or shared across network)
- Contact belongs to Lab
- Timesheet belongs to Member
- Timesheet optionally belongs to Project, Course, or Guild
