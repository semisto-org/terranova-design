import data from '@/../product/sections/nursery/data.json'
import { MotherPlantList } from './components/MotherPlantList'

export default function MotherPlantListPreview() {
  return (
    <MotherPlantList
      motherPlants={data.motherPlants}
      onView={(id) => console.log('View mother plant:', id)}
      onValidate={(id) => console.log('Validate mother plant:', id)}
      onReject={(id) => console.log('Reject mother plant:', id)}
      onFilter={(filters) => console.log('Filter mother plants:', filters)}
    />
  )
}

