import data from '@/../product/sections/academy/data.json'
import labManagementData from '@/../product/sections/lab-management/data.json'
import { TrainingLocationList as TrainingLocationListComponent } from './components/TrainingLocationList'

export default function TrainingLocationListPreview() {
  // Map lab management members to Academy member format
  const members = labManagementData.members.map(m => ({
    id: m.id,
    firstName: m.firstName,
    lastName: m.lastName,
    email: m.email,
    avatar: m.avatar,
  }))

  return (
    <TrainingLocationListComponent
      trainingTypes={data.trainingTypes}
      trainings={data.trainings}
      trainingSessions={data.trainingSessions}
      trainingLocations={data.trainingLocations}
      trainingRegistrations={data.trainingRegistrations}
      trainingAttendances={data.trainingAttendances}
      trainingDocuments={data.trainingDocuments}
      trainingExpenses={data.trainingExpenses}
      ideaNotes={data.ideaNotes}
      members={members}
      currentMemberId="member-001"
      onCreateLocation={() => console.log('Create location')}
      onViewLocation={(id) => console.log('View location:', id)}
      onEditLocation={(id) => console.log('Edit location:', id)}
      onDeleteLocation={(id) => console.log('Delete location:', id)}
    />
  )
}

