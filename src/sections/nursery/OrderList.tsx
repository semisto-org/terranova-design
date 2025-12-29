import data from '@/../product/sections/nursery/data.json'
import { OrderList } from './components/OrderList'
import type { Order, Nursery } from '@/../product/sections/nursery/types'

export default function OrderListPreview() {
  return (
    <OrderList
      orders={data.orders as Order[]}
      nurseries={data.nurseries as Nursery[]}
      onView={(id) => console.log('View order:', id)}
      onProcess={(id) => console.log('Process order:', id)}
      onMarkReady={(id) => console.log('Mark ready order:', id)}
      onMarkPickedUp={(id) => console.log('Mark picked up order:', id)}
      onCancel={(id) => console.log('Cancel order:', id)}
      onFilter={(filters) => console.log('Filter orders:', filters)}
    />
  )
}

