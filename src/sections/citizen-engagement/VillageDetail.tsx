import data from '@/../product/sections/citizen-engagement/data.json'
import { VillageDetail } from './components/VillageDetail'

// Select a village to preview - using Modave as it has good data
const previewVillage = data.villages[0] // Modave - Village Nourricier

// Filter spots for this village
const villageSpots = data.spots.filter(spot => spot.villageId === previewVillage.id)

// Filter citizens for this village
const villageCitizens = data.citizens.filter(citizen =>
  citizen.villageIds.includes(previewVillage.id)
)

// Filter worksites for this village
const villageWorksites = data.worksites.filter(worksite =>
  worksite.villageId === previewVillage.id
)

// Filter events for this village
const villageEvents = data.events.filter(event =>
  event.villageId === previewVillage.id || event.villageId === null
)

// Current citizen (for testing membership)
const currentCitizen = null // Set to a citizen to test member view

export default function VillageDetailPreview() {
  return (
    <VillageDetail
      village={previewVillage}
      spots={villageSpots}
      citizens={villageCitizens}
      worksites={villageWorksites}
      events={villageEvents}
      currentCitizen={currentCitizen}
      onJoinVillage={() => console.log('Join village:', previewVillage.id)}
      onViewSpot={(id) => console.log('View spot:', id)}
      onViewCitizen={(id) => console.log('View citizen:', id)}
    />
  )
}
