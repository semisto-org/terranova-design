import data from '@/../product/sections/plant-database/data.json'
import { VarietyDetail } from './components/VarietyDetail'

export default function VarietyDetailPreview() {
  // Select the first variety for preview
  const variety = data.varieties[0]
  const species = data.species.find((s) => s.id === variety.speciesId)
  const genus = species?.genusId ? data.genera.find((g) => g.id === species.genusId) || null : null
  
  // Safety check
  if (!species) {
    return <div className="p-8 text-center text-stone-500">Espèce non trouvée pour cette variété</div>
  }
  const commonNames = data.commonNames.filter((cn) => cn.targetId === variety.id)
  const references = data.references.filter((r) => r.targetId === variety.id)
  const photos = data.photos.filter((p) => p.targetId === variety.id)
  const notes = data.notes.filter((n) => n.targetId === variety.id)
  const plantLocations = data.plantLocations.filter((l) => l.targetId === variety.id)
  const nurseryStocks = data.nurseryStocks.filter((s) => s.targetId === variety.id)
  const allVarieties = data.varieties.filter((v) => v.speciesId === species.id)

  return (
    <VarietyDetail
      variety={variety as any}
      species={species as any}
      genus={genus}
      commonNames={commonNames as any}
      references={references as any}
      photos={photos as any}
      notes={notes as any}
      plantLocations={plantLocations as any}
      nurseryStocks={nurseryStocks as any}
      contributors={data.contributors as any}
      filterOptions={data.filterOptions as any}
      varieties={allVarieties as any}
      aiSummary={{ status: 'idle', content: null, generatedAt: null, error: null }}
      onGenerateAISummary={() => console.log('Generate AI summary')}
      onAddPhoto={() => console.log('Add photo')}
      onAddNote={(content) => console.log('Add note:', content)}
      onAddReference={(reference) => console.log('Add reference:', reference)}
      onAddToPalette={(strate) => console.log('Add to palette:', strate)}
      onSpeciesSelect={(id) => console.log('Select species:', id)}
      onContributorSelect={(id) => console.log('Select contributor:', id)}
      onNurserySelect={(id) => console.log('Select nursery:', id)}
      onVarietySelect={(id) => console.log('Select variety:', id)}
    />
  )
}

