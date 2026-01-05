import data from '@/../product/sections/citizen-engagement/data.json'
import { SkillsDirectory } from './components/SkillsDirectory'

export default function SkillsDirectoryPreview() {
  // Simulate a logged-in user's village IDs for the "nearby" filter
  const currentVillageIds = ['vil-001', 'vil-002']

  return (
    <SkillsDirectory
      skills={data.skills}
      citizens={data.citizens}
      currentVillageIds={currentVillageIds}
      onContactGardener={(skillId) => console.log('Contact gardener for skill:', skillId)}
      onAddSkill={() => console.log('Add skill clicked')}
    />
  )
}
