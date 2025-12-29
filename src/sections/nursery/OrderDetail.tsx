import data from '@/../product/sections/nursery/data.json'
import { OrderDetail } from './components/OrderDetail'
import type { Order } from '@/../product/sections/nursery/types'

export default function OrderDetailPreview() {
  // Prendre la première commande pour la preview
  const order = data.orders[0] as Order

  return (
    <OrderDetail
      order={order}
      onProcess={() => console.log('Process order')}
      onMarkReady={() => console.log('Mark ready')}
      onMarkPickedUp={() => console.log('Mark picked up')}
      onCancel={() => console.log('Cancel order')}
      onCreateTransfer={() => console.log('Create transfer')}
      onBack={() => console.log('Back to list')}
    />
  )
}

