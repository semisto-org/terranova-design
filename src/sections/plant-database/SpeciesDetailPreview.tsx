import data from '@/../product/sections/plant-database/data.json'
import { SpeciesDetail } from './components/SpeciesDetail'

export default function SpeciesDetailPreview() {
  // Select the first species for preview (Malus domestica)
  const species = data.species[0]
  const genus = data.genera.find(g => g.id === species.genusId) || null

  // Get sibling species (other species in the same genus)
  const siblingSpecies = data.species.filter(
    s => s.genusId === species.genusId && s.id !== species.id
  )

  const varieties = data.varieties.filter(v => v.speciesId === species.id)
  const commonNames = data.commonNames.filter(cn => cn.targetId === species.id)
  const references = data.references.filter(r => r.targetId === species.id)
  const photos = data.photos.filter(p => p.targetId === species.id)
  const notes = data.notes.filter(n => n.targetId === species.id)
  const plantLocations = data.plantLocations.filter(l => l.targetId === species.id)
  const nurseryStocks = data.nurseryStocks.filter(s => s.targetId === species.id)

  return (
    <SpeciesDetail
      species={species as any}
      genus={genus}
      siblingSpecies={siblingSpecies as any}
      varieties={varieties as any}
      commonNames={commonNames as any}
      references={references as any}
      photos={photos as any}
      notes={notes as any}
      plantLocations={plantLocations as any}
      nurseryStocks={nurseryStocks as any}
      contributors={data.contributors as any}
      filterOptions={data.filterOptions as any}
      aiSummary={{ status: 'idle', content: null, generatedAt: null, error: null }}
      onGenerateAISummary={() => console.log('Generate AI summary')}
      onAddPhoto={() => console.log('Add photo')}
      onAddNote={(content) => console.log('Add note:', content)}
      onAddToPalette={(strate) => console.log('Add to palette:', strate)}
      onVarietySelect={(id) => console.log('Select variety:', id)}
      onGenusSelect={(id) => console.log('Select genus:', id)}
      onContributorSelect={(id) => console.log('Select contributor:', id)}
      onNurserySelect={(id) => console.log('Select nursery:', id)}
      onSpeciesSelect={(id) => console.log('Select species:', id)}
    />
  )
}
