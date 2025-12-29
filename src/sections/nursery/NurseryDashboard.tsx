import data from '@/../product/sections/nursery/data.json'
import { NurseryDashboard } from './components/NurseryDashboard'
import type { ScheduleSlot, Order, DashboardAlert } from '@/../product/sections/nursery/types'

export default function NurseryDashboardPreview() {
  // Filtrer les créneaux du jour (30 décembre 2024)
  const today = '2024-12-30'
  const todaySchedule = data.scheduleSlots.filter((slot) => slot.date === today) as ScheduleSlot[]

  // Trier les commandes par date de création (plus récentes d'abord) et prendre les 5 premières
  const recentOrders = [...data.orders]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5) as Order[]

  // Compter les alertes par type
  const lowStockCount = data.dashboardAlerts.filter((a) => a.type === 'low-stock').length
  const pendingOrdersCount = data.dashboardAlerts.filter((a) => a.type === 'pending-order').length
  const pendingTransfersCount = data.dashboardAlerts.filter((a) => a.type === 'pending-transfer').length
  const pendingValidationsCount = data.dashboardAlerts.filter((a) => a.type === 'pending-validation').length

  return (
    <NurseryDashboard
      alerts={data.dashboardAlerts as DashboardAlert[]}
      lowStockCount={lowStockCount}
      pendingOrdersCount={pendingOrdersCount}
      pendingTransfersCount={pendingTransfersCount}
      pendingValidationsCount={pendingValidationsCount}
      todaySchedule={todaySchedule}
      recentOrders={recentOrders}
      onViewStock={() => console.log('View stock')}
      onViewOrders={() => console.log('View orders')}
      onViewTransfers={() => console.log('View transfers')}
      onViewValidations={() => console.log('View validations')}
      onViewSchedule={() => console.log('View schedule')}
      onAlertClick={(alertId, type) => console.log('Alert clicked:', alertId, type)}
    />
  )
}

