# Prompts pour les Designs de la Section Nursery

Ce document contient tous les prompts nécessaires pour créer les écrans de la section Nursery. Chaque prompt peut être utilisé avec la commande `/design-screen` pour créer le design correspondant.

---

## 1. Tableau de bord (NurseryDashboard)

**Prompt :**
```
Crée le tableau de bord de la section Nursery. Cette vue doit afficher :
- Des widgets d'alertes avec priorité (high/medium/low) pour : stocks bas, commandes en attente, transferts à planifier, validations de plants-mères en attente
- Des compteurs pour chaque type d'alerte
- La liste des créneaux du jour (todaySchedule)
- Les commandes récentes (recentOrders)
- Des actions rapides pour accéder aux différentes sections

Utilise les props NurseryDashboardProps. Les alertes doivent être cliquables et afficher un badge de priorité coloré. Le design doit être responsive et utiliser les couleurs du pôle Nursery (#EF9B0D pour les accents, #fbe6c3 pour les backgrounds).
```

**Fichiers à créer :**
- `src/sections/nursery/components/NurseryDashboard.tsx`
- `src/sections/nursery/NurseryDashboard.tsx` (preview wrapper)

---

## 2. Gestion du stock (StockManagement)

**Prompt :**
```
Crée la vue de gestion du stock pour les pépinières. Cette vue doit inclure :
- Un tableau filtrable par : pépinière, espèce, variété, stade de développement, contenant
- Pour chaque lot (StockBatch) : espèce/variété, contenant, quantités (totale/disponible/réservée), prix euros/Semos, stade de développement
- Des indicateurs visuels pour les stocks bas (availableQuantity faible)
- Des actions : voir détails, créer, modifier, supprimer un lot
- Un formulaire modal pour créer/modifier un lot avec champs optionnels (date de semis, origine, stade) pour faciliter l'usage des débutants

Utilise les props StockManagementProps. Le tableau doit être responsive avec une vue mobile adaptée (cartes au lieu de tableau). Les filtres doivent être persistants et visibles.
```

**Fichiers à créer :**
- `src/sections/nursery/components/StockManagement.tsx`
- `src/sections/nursery/components/StockBatchRow.tsx` (sous-composant pour une ligne)
- `src/sections/nursery/components/StockBatchForm.tsx` (sous-composant formulaire)
- `src/sections/nursery/StockManagement.tsx` (preview wrapper)

---

## 3. Liste des contenants (ContainerList)

**Prompt :**
```
Crée la vue de configuration des contenants. Cette vue doit inclure :
- Une liste des contenants (Container) avec : nom, nom court, volume en litres, description
- Possibilité de réordonner les contenants (drag & drop ou boutons haut/bas)
- Actions : créer, modifier, supprimer un contenant
- Un formulaire pour créer/modifier avec tous les champs

Utilise les props ContainerListProps. La liste doit être triable par sortOrder. Le design doit être simple et fonctionnel, avec une indication visuelle de l'ordre.
```

**Fichiers à créer :**
- `src/sections/nursery/components/ContainerList.tsx`
- `src/sections/nursery/components/ContainerForm.tsx` (sous-composant formulaire)
- `src/sections/nursery/ContainerList.tsx` (preview wrapper)

---

## 4. Liste des pépinières (NurseryList)

**Prompt :**
```
Crée la vue liste des pépinières partenaires. Cette vue doit inclure :
- Une liste des pépinières (Nursery) avec distinction visuelle claire entre :
  - Type : Semisto vs Partenaire (badge coloré)
  - Intégration : Plateforme (stock temps réel) vs Manuel (liste manuelle) - icône ou badge distinctif
- Pour chaque pépinière : nom, ville, contact, spécialités, point de retrait (oui/non)
- Actions : voir détails, créer, modifier, supprimer

Utilise les props NurseryListProps. Le design doit mettre en évidence les pépinières avec plateforme (intégration temps réel) vs celles sans plateforme. Les cartes doivent être claires et informatives.
```

**Fichiers à créer :**
- `src/sections/nursery/components/NurseryList.tsx`
- `src/sections/nursery/components/NurseryCard.tsx` (sous-composant carte)
- `src/sections/nursery/NurseryList.tsx` (preview wrapper)

---

## 5. Détail pépinière (NurseryDetail)

**Prompt :**
```
Crée la vue détail d'une pépinière. Cette vue doit inclure :
- Informations complètes : adresse, coordonnées, contact, site web, description, spécialités
- Indicateur visuel du type (Semisto/Partenaire) et mode d'intégration (Plateforme/Manuel)
- Le catalogue des espèces/variétés disponibles :
  - Si intégration "platform" : afficher les lots de stock (StockBatch) avec quantités temps réel
  - Si intégration "manual" : afficher simplement la liste des espèces/variétés (sans quantités)
- Actions : modifier la pépinière, voir sur carte (coordonnées)

Utilise les props NurseryDetailProps (à créer si nécessaire). Le catalogue doit être clairement différencié selon le mode d'intégration. Pour les pépinières avec plateforme, afficher les stocks comme dans StockManagement mais filtrés à cette pépinière.
```

**Fichiers à créer :**
- `src/sections/nursery/components/NurseryDetail.tsx`
- `src/sections/nursery/components/NurseryCatalog.tsx` (sous-composant catalogue)
- `src/sections/nursery/NurseryDetail.tsx` (preview wrapper)

---

## 6. Liste des plants-mères (MotherPlantList)

**Prompt :**
```
Crée la vue liste des plants-mères. Cette vue doit inclure :
- Un tableau groupé par espèce/variété avec colonnes :
  - Lieu (placeName, placeAddress)
  - Date de plantation
  - Source (Design Studio / Proposition membre) avec badge distinctif
  - Statut (en attente / validé / rejeté) avec badge coloré
  - Quantité disponible
  - Date dernière récolte (si disponible)
- Filtres par : espèce, statut, source
- Actions : voir détails, valider (pour les en attente), rejeter (pour les en attente)
- Mise en évidence visuelle des plants-mères en attente de validation

Utilise les props MotherPlantListProps. Le tableau doit être groupable par espèce/variété. Les plants-mères en attente doivent être mis en avant avec un indicateur visuel clair. Le design doit permettre de valider/rejeter rapidement depuis la liste.
```

**Fichiers à créer :**
- `src/sections/nursery/components/MotherPlantList.tsx`
- `src/sections/nursery/components/MotherPlantRow.tsx` (sous-composant ligne)
- `src/sections/nursery/MotherPlantList.tsx` (preview wrapper)

---

## 7. Liste des commandes (OrderList)

**Prompt :**
```
Crée la vue liste des commandes. Cette vue doit inclure :
- Un tableau des commandes (Order) avec colonnes :
  - Numéro de commande
  - Client (nom, email)
  - Statut (nouvelle, en préparation, prête, retirée, annulée) avec badge coloré
  - Niveau de prix (solidaire/base/soutien) avec badge
  - Point de retrait
  - Montant total (euros et/ou Semos)
  - Date de création
- Filtres par : statut, pépinière de retrait, date (from/to)
- Indicateur visuel pour les commandes multi-pépinières (plusieurs nurseries dans les lignes)
- Actions : voir détails, traiter (nouvelle → processing), marquer prêt (processing → ready), marquer retiré (ready → picked-up), annuler

Utilise les props OrderListProps. Le tableau doit être responsive. Les commandes multi-pépinières doivent avoir un badge ou icône distinctif. Les statuts doivent avoir des couleurs cohérentes (nouvelle = bleu, en préparation = orange, prête = vert, etc.).
```

**Fichiers à créer :**
- `src/sections/nursery/components/OrderList.tsx`
- `src/sections/nursery/components/OrderRow.tsx` (sous-composant ligne)
- `src/sections/nursery/OrderList.tsx` (preview wrapper)

---

## 8. Détail commande (OrderDetail)

**Prompt :**
```
Crée la vue détail d'une commande. Cette vue doit inclure :
- Informations client : nom, email, téléphone, membre (oui/non)
- Statut avec badge coloré et timeline (nouvelle → en préparation → prête → retirée)
- Niveau de prix choisi (solidaire/base/soutien) avec badge
- Point de retrait (pépinière avec adresse)
- Liste des lignes de commande (OrderLine) avec pour chaque ligne :
  - Espèce/variété, contenant, quantité
  - Provenance (pépinière d'origine) avec badge distinctif
  - Prix unitaire et total (euros et/ou Semos)
  - Indicateur si payé en Semos
- Totaux : sous-totaux et totaux euros/Semos
- Indicateur visuel clair si commande multi-pépinières (plusieurs provenances)
- Actions selon statut :
  - Nouvelle : Traiter, Annuler
  - En préparation : Marquer prêt, Créer transfert (si multi-pépinières)
  - Prête : Marquer retiré
- Notes de commande

Utilise les props OrderDetailProps. Le design doit mettre en évidence la provenance multi-pépinières si applicable. Les lignes doivent être groupées par pépinière d'origine pour faciliter la préparation. Un bouton "Créer transfert" doit apparaître si la commande nécessite un transfert.
```

**Fichiers à créer :**
- `src/sections/nursery/components/OrderDetail.tsx`
- `src/sections/nursery/components/OrderLineGroup.tsx` (sous-composant groupe par pépinière)
- `src/sections/nursery/OrderDetail.tsx` (preview wrapper)

---

## 9. Gestion des transferts (TransferManagement)

**Prompt :**
```
Crée la vue gestion des transferts inter-pépinières. Cette vue doit inclure :
- Une liste des transferts (Transfer) avec :
  - Numéro de commande associée
  - Statut (planifié, en cours, terminé, annulé) avec badge coloré
  - Distance totale (km)
  - Durée estimée
  - Date prévue
  - Chauffeur assigné (si défini)
- Pour chaque transfert, afficher l'itinéraire avec les étapes (TransferStop) :
  - Type : ramassage (pickup) ou dépôt (dropoff)
  - Pépinière avec adresse
  - Articles à ramasser/déposer (espèce, variété, quantité)
  - Heure estimée
  - Statut de complétion (si terminé)
- Vue carte optionnelle montrant l'itinéraire optimisé
- Suggestion d'optimisation kilométrique (si plusieurs transferts possibles)
- Actions : voir détails, créer transfert, optimiser itinéraire, démarrer (planned → in-progress), compléter (in-progress → completed), annuler

Utilise les props TransferManagementProps. Le design doit permettre de visualiser facilement l'itinéraire. Les étapes doivent être clairement distinguées (pickup vs dropoff). Si une carte est incluse, elle doit montrer le trajet optimisé entre les pépinières.
```

**Fichiers à créer :**
- `src/sections/nursery/components/TransferManagement.tsx`
- `src/sections/nursery/components/TransferCard.tsx` (sous-composant carte transfert)
- `src/sections/nursery/components/TransferRoute.tsx` (sous-composant itinéraire)
- `src/sections/nursery/TransferManagement.tsx` (preview wrapper)

---

## 10. Planning (Schedule)

**Prompt :**
```
Crée la vue planning hebdomadaire des équipes. Cette vue doit inclure :
- Un calendrier hebdomadaire avec colonnes pour chaque jour de la semaine
- Pour chaque créneau (ScheduleSlot) :
  - Nom de la personne
  - Rôle (manager, employé, stagiaire, bénévole) avec badge coloré
  - Pépinière
  - Heures (début - fin)
  - Activité prévue
- Vue par pépinière ou vue globale
- Navigation semaine précédente/suivante
- Actions : créer créneau, modifier, supprimer
- Formulaire pour créer/modifier un créneau avec : membre, pépinière, date, heures, activité, notes

Utilise les props ScheduleProps. Le calendrier doit être responsive avec une vue mobile adaptée (liste au lieu de grille). Les créneaux doivent être colorés par rôle ou par pépinière. Le design doit permettre de voir facilement qui travaille où et quand.
```

**Fichiers à créer :**
- `src/sections/nursery/components/Schedule.tsx`
- `src/sections/nursery/components/ScheduleSlot.tsx` (sous-composant créneau)
- `src/sections/nursery/components/ScheduleForm.tsx` (sous-composant formulaire)
- `src/sections/nursery/Schedule.tsx` (preview wrapper)

---

## 11. Documentation (Documentation)

**Prompt :**
```
Crée la vue documentation de la micro-pépinière. Cette vue doit inclure :
- Une liste des entrées (DocumentationEntry) avec :
  - Type (journal, fiche technique, tutoriel vidéo) avec badge distinctif
  - Titre
  - Auteur et date de publication
  - Pépinière associée (si applicable)
  - Tags
  - Pour les vidéos : miniature (thumbnailUrl)
- Filtres par : type, pépinière, tag
- Vue détail d'une entrée avec :
  - Contenu complet (markdown pour journal/fiche)
  - Vidéo intégrée (si tutoriel vidéo)
  - Métadonnées complètes
- Actions : voir détails, créer entrée, modifier, supprimer
- Formulaire pour créer/modifier avec tous les champs selon le type

Utilise les props DocumentationProps. Le design doit différencier clairement les trois types d'entrées. Les tutoriels vidéo doivent avoir une miniature visible. Le contenu markdown doit être rendu correctement. Le design doit être inspirant et encourageant la documentation.
```

**Fichiers à créer :**
- `src/sections/nursery/components/Documentation.tsx`
- `src/sections/nursery/components/DocumentationEntry.tsx` (sous-composant entrée)
- `src/sections/nursery/components/DocumentationForm.tsx` (sous-composant formulaire)
- `src/sections/nursery/components/DocumentationDetail.tsx` (sous-composant détail)
- `src/sections/nursery/Documentation.tsx` (preview wrapper)

---

## 12. Timesheets (Timesheet)

**Prompt :**
```
Crée la vue timesheets pour enregistrer le temps de travail. Cette vue doit inclure :
- Un tableau des entrées (TimesheetEntry) avec colonnes :
  - Date
  - Membre (nom, rôle)
  - Pépinière
  - Catégorie d'activité (propagation, rempotage, arrosage, maintenance, récolte, préparation commandes, transfert, documentation, formation, admin, autre) avec badge
  - Heures
  - Description
- Filtres par : membre, pépinière, catégorie, date (from/to)
- Vue résumé avec totaux par membre, par catégorie, par période
- Actions : créer entrée, modifier, supprimer
- Formulaire pour créer/modifier avec tous les champs

Utilise les props TimesheetProps. Le tableau doit être responsive. Les catégories doivent avoir des couleurs distinctives. Un résumé/totaux doit être visible (en haut ou sidebar) pour voir rapidement les heures travaillées. Le design doit faciliter la saisie rapide.
```

**Fichiers à créer :**
- `src/sections/nursery/components/Timesheet.tsx`
- `src/sections/nursery/components/TimesheetRow.tsx` (sous-composant ligne)
- `src/sections/nursery/components/TimesheetForm.tsx` (sous-composant formulaire)
- `src/sections/nursery/components/TimesheetSummary.tsx` (sous-composant résumé)
- `src/sections/nursery/Timesheet.tsx` (preview wrapper)

---

## 13. Catalogue Designers (Catalog)

**Prompt :**
```
Crée la vue catalogue multi-pépinières pour les Designers du Design Studio. Cette vue doit être en lecture seule et inclure :
- Une recherche par espèce/variété
- Filtres par : pépinière, disponibilité (en stock uniquement)
- Pour chaque espèce/variété disponible :
  - Nom complet (espèce + variété si applicable)
  - Liste des pépinières où disponible avec :
    - Nom de la pépinière
    - Contenants disponibles
    - Quantité disponible (si pépinière avec plateforme) ou indication "Disponible" (si pépinière sans plateforme)
    - Prix euros/Semos
  - Distinction visuelle entre pépinières avec plateforme (quantités temps réel) et sans plateforme (liste manuelle)
- Vue en grille ou liste selon préférence
- Actions : sélectionner un lot pour l'ajouter à un projet (callback onSelectBatch)

Utilise les props CatalogProps. Le design doit être clair et permettre aux designers de voir rapidement quelles espèces sont disponibles où. Les pépinières avec plateforme doivent afficher les quantités réelles, les autres simplement "Disponible". Le design doit être optimisé pour la sélection rapide.
```

**Fichiers à créer :**
- `src/sections/nursery/components/Catalog.tsx`
- `src/sections/nursery/components/CatalogItem.tsx` (sous-composant item)
- `src/sections/nursery/Catalog.tsx` (preview wrapper)

---

## Notes générales pour tous les designs

- **Design tokens** : Utiliser les couleurs du pôle Nursery (#EF9B0D pour les accents, #fbe6c3 pour les backgrounds) définies dans `product/design-system/colors.json`
- **Typographie** : Utiliser Sole Serif Small pour les titres, Inter pour le corps, JetBrains Mono pour le code (défini dans `product/design-system/typography.json`)
- **Responsive** : Tous les designs doivent être mobile-first avec breakpoints Tailwind (sm:, md:, lg:)
- **Dark mode** : Tous les designs doivent supporter le mode sombre avec les variants `dark:`
- **Shell** : Tous les écrans s'afficheront dans le shell de l'application (défini dans `src/shell/components/AppShell.tsx`)
- **Props-based** : Tous les composants doivent être props-based, jamais d'import direct de data.json dans les composants exportables
- **Callbacks** : Tous les callbacks doivent être optionnels et utilisés avec optional chaining (`?.`)

## Ordre recommandé de création

1. **NurseryDashboard** - Vue d'entrée principale
2. **StockManagement** - Fonctionnalité centrale
3. **OrderList** et **OrderDetail** - Traitement des commandes
4. **MotherPlantList** - Gestion des plants-mères
5. **NurseryList** et **NurseryDetail** - Gestion du réseau
6. **TransferManagement** - Optimisation logistique
7. **Schedule** - Planning des équipes
8. **Timesheet** - Suivi du temps
9. **Documentation** - Documentation
10. **ContainerList** - Configuration
11. **Catalog** - Vue designers

