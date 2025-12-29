import data from '@/../product/sections/plant-database/data.json'
import { GenusDetail } from './components/GenusDetail'

export default function GenusDetailPreview() {
  // Select the first genus for preview (Malus)
  const genus = data.genera[0]
  const species = data.species.filter((s) => s.genusId === genus.id)
  const commonNames = data.commonNames.filter((cn) => cn.targetId === genus.id)
  const references = data.references.filter((r) => r.targetId === genus.id)
  const photos = data.photos.filter((p) => p.targetId === genus.id)
  const notes = data.notes.filter((n) => n.targetId === genus.id)

  return (
    <GenusDetail
      genus={genus as any}
      species={species as any}
      commonNames={commonNames as any}
      references={references as any}
      photos={photos as any}
      notes={notes as any}
      contributors={data.contributors as any}
      filterOptions={data.filterOptions as any}
      allGenera={data.genera as any}
      allCommonNames={data.commonNames as any}
      aiSummary={{ status: 'idle', content: null, generatedAt: null, error: null }}
      onGenerateAISummary={() => console.log('Generate AI summary')}
      onAddPhoto={() => console.log('Add photo')}
      onAddNote={(content) => console.log('Add note:', content)}
      onAddReference={(reference) => console.log('Add reference:', reference)}
      onSpeciesSelect={(id) => console.log('Select species:', id)}
      onContributorSelect={(id) => console.log('Select contributor:', id)}
      onGenusSelect={(id) => console.log('Select genus:', id)}
    />
  )
}

