import data from '@/../product/sections/lab-management/data.json'
import { MemberList } from './components/MemberList'

export default function MemberListPreview() {
  return (
    <MemberList
      members={data.members}
      guilds={data.guilds}
      wallets={data.wallets}
      currentMemberId="member-001"
      onAddMember={() => console.log('Add member')}
      onViewMember={(id) => console.log('View member:', id)}
      onEditMember={(id) => console.log('Edit member:', id)}
    />
  )
}
