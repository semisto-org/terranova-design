import data from '@/../product/sections/plant-database/data.json'
import { PlantPalette } from './components/PlantPalette'

export default function PlantPalettePreview() {
  // Use the first saved palette from sample data
  const palette = data.plantPalettes[0] || null

  return (
    <div className="h-screen max-w-md mx-auto border-x border-stone-200 dark:border-stone-700">
      <PlantPalette
        palette={palette as any}
        species={data.species as any}
        varieties={data.varieties as any}
        onRemoveItem={(id, strate) => console.log('Remove item:', id, 'from strate:', strate)}
        onMoveItem={(id, from, to) => console.log('Move item:', id, 'from:', from, 'to:', to)}
        onSave={(name, description) => console.log('Save palette:', name, description)}
        onExportPDF={() => console.log('Export PDF')}
        onSendToDesignStudio={() => console.log('Send to Design Studio')}
        onClear={() => console.log('Clear palette')}
      />
    </div>
  )
}
