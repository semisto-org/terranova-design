import data from '@/../product/sections/lab-management/data.json'
import { Dashboard } from './components/Dashboard'

export default function DashboardPreview() {
  return (
    <Dashboard
      members={data.members}
      cycles={data.cycles}
      guilds={data.guilds}
      pitches={data.pitches}
      bets={data.bets}
      scopes={data.scopes}
      events={data.events}
      wallets={data.wallets}
      semosTransactions={data.semosTransactions}
      semosEmissions={data.semosEmissions}
      currentMemberId="member-001"
      onViewPitch={(id) => console.log('View pitch:', id)}
      onViewScope={(id) => console.log('View scope:', id)}
      onViewEvent={(id) => console.log('View event:', id)}
      onViewCycle={(id) => console.log('View cycle:', id)}
      onCreateEvent={() => console.log('Create event')}
      onTransferSemos={() => console.log('Transfer Semos')}
      onViewSemosHistory={() => console.log('View Semos history')}
      onViewMember={(id) => console.log('View member:', id)}
    />
  )
}
