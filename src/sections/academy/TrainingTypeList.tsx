import data from '@/../product/sections/academy/data.json'
import labManagementData from '@/../product/sections/lab-management/data.json'
import { TrainingTypeList as TrainingTypeListComponent } from './components/TrainingTypeList'

export default function TrainingTypeListPreview() {
  // Map lab management members to Academy member format
  const members = labManagementData.members.map(m => ({
    id: m.id,
    firstName: m.firstName,
    lastName: m.lastName,
    email: m.email,
    avatar: m.avatar,
  }))

  return (
    <TrainingTypeListComponent
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
      onCreateTrainingType={() => console.log('Create training type')}
      onViewTrainingType={(id) => console.log('View training type:', id)}
      onEditTrainingType={(id) => console.log('Edit training type:', id)}
      onDeleteTrainingType={(id) => console.log('Delete training type:', id)}
    />
  )
}

