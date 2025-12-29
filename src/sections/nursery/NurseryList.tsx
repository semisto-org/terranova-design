import data from '@/../product/sections/nursery/data.json'
import type { Nursery } from '@/../product/sections/nursery/types'
import { NurseryList } from './components/NurseryList'

export default function NurseryListPreview() {
  return (
    <NurseryList
      nurseries={data.nurseries as Nursery[]}
      onView={(id) => console.log('View nursery:', id)}
      onCreate={() => console.log('Create new nursery')}
      onEdit={(id) => console.log('Edit nursery:', id)}
      onDelete={(id) => console.log('Delete nursery:', id)}
    />
  )
}

