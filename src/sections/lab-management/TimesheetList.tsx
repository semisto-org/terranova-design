import data from '@/../product/sections/lab-management/data.json'
import { TimesheetList } from './components/TimesheetList'

export default function TimesheetListPreview() {
  return (
    <TimesheetList
      timesheets={data.timesheets}
      members={data.members}
      guilds={data.guilds}
      currentMemberId="member-001"
      isAdmin={true}
      onCreateTimesheet={() => console.log('Create timesheet')}
      onEditTimesheet={(id) => console.log('Edit timesheet:', id)}
      onDeleteTimesheet={(id) => console.log('Delete timesheet:', id)}
      onMarkInvoiced={(id) => console.log('Mark invoiced:', id)}
      onViewMember={(id) => console.log('View member:', id)}
      onViewGuild={(id) => console.log('View guild:', id)}
    />
  )
}
