import data from '@/../product/sections/nursery/data.json'
import { Catalog as CatalogComponent } from './components/Catalog'

export default function CatalogPreview() {
  return (
    <CatalogComponent
      nurseries={data.nurseries}
      batches={data.stockBatches}
      containers={data.containers}
      onSearch={(query) => console.log('Search:', query)}
      onFilter={(filters) => console.log('Filter:', filters)}
      onSelectBatch={(batchId) => console.log('Select batch:', batchId)}
    />
  )
}

