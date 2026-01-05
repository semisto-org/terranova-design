import data from '@/../product/sections/citizen-engagement/data.json'
import { MarketplaceView } from './components/MarketplaceView'
import type { Surplus, Citizen } from '@/../product/sections/citizen-engagement/types'

export default function MarketplaceViewPreview() {
  // Get current user's village IDs for the "nearby" filter
  const currentCitizen = data.citizens[0] as Citizen
  const currentVillageIds = currentCitizen?.villageIds || []

  return (
    <MarketplaceView
      surpluses={data.surpluses as Surplus[]}
      citizens={data.citizens as Citizen[]}
      currentVillageIds={currentVillageIds}
      onContactSeller={(id) => console.log('Contact seller for surplus:', id)}
      onReserveSurplus={(id) => console.log('Reserve surplus:', id)}
      onAddSurplus={() => console.log('Add new surplus')}
    />
  )
}
