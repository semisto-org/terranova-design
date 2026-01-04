import data from '@/../product/sections/website/data.json'
import { SemistoRoots } from './components/SemistoRoots'

export default function SemistoRootsPreview() {
  // Use the first lab that has 'roots' as an active pole
  const lab = data.labs.find((l) => l.activePoles.includes('roots')) || data.labs[0]

  // Get worksites for this lab
  const labWorksites = data.worksites.filter((w) => w.labId === lab.id)

  // Pick relevant impact stats
  const impactStats = {
    volunteersActive: data.impactStats.volunteersActive,
    treesPlanted: data.impactStats.treesPlanted
  }

  return (
    <SemistoRoots
      lab={lab}
      upcomingWorksites={labWorksites}
      impactStats={impactStats}
      onWorksiteView={(id) => console.log('View worksite:', id)}
      onWorksiteRegister={(id) => console.log('Register for worksite:', id)}
      onJoinHeroes={() => console.log('Join Heroes clicked')}
    />
  )
}
