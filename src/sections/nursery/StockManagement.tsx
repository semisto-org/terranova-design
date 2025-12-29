import data from '@/../product/sections/nursery/data.json'
import { StockManagement } from './components/StockManagement'

export default function StockManagementPreview() {
  return (
    <StockManagement
      batches={data.stockBatches}
      nurseries={data.nurseries}
      containers={data.containers}
      onView={(id) => console.log('View batch:', id)}
      onCreate={() => console.log('Create new batch')}
      onEdit={(id) => console.log('Edit batch:', id)}
      onDelete={(id) => console.log('Delete batch:', id)}
      onFilter={(filters) => console.log('Filter changed:', filters)}
    />
  )
}

