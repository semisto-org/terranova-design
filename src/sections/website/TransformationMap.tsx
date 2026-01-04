import data from '@/../product/sections/website/data.json'
import type { MapProject, PotentialZone } from '@/../product/sections/website/types'
import { TransformationMap } from './components/TransformationMap'

export default function TransformationMapPreview() {
  // Cast data
  const mapProjects = data.mapProjects as MapProject[]
  const potentialZones = data.potentialZones as PotentialZone[]

  return (
    <TransformationMap
      projects={mapProjects}
      potentialZones={potentialZones}
      onProjectClick={(id) => console.log('Project clicked:', id)}
      onZoneClick={(id) => console.log('Zone clicked:', id)}
      onAddZone={() => console.log('Add zone clicked')}
    />
  )
}
