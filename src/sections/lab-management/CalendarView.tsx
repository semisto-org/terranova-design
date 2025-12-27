import data from '@/../product/sections/lab-management/data.json'
import { CalendarView } from './components/CalendarView'

export default function CalendarViewPreview() {
  return (
    <CalendarView
      events={data.events}
      cycles={data.cycles}
      members={data.members}
      currentMemberId="member-001"
      onCreateEvent={() => console.log('Create event')}
      onViewEvent={(id) => console.log('View event:', id)}
      onEditEvent={(id) => console.log('Edit event:', id)}
      onDeleteEvent={(id) => console.log('Delete event:', id)}
    />
  )
}
