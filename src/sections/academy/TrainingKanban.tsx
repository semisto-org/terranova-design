import data from '@/../product/sections/academy/data.json'
import { TrainingKanban as TrainingKanbanComponent } from './components/TrainingKanban'

export default function TrainingKanbanPreview() {
  return (
    <TrainingKanbanComponent
      trainingTypes={data.trainingTypes}
      trainings={data.trainings}
      trainingSessions={data.trainingSessions}
      trainingLocations={data.trainingLocations}
      trainingRegistrations={data.trainingRegistrations}
      trainingAttendances={data.trainingAttendances}
      trainingDocuments={data.trainingDocuments}
      trainingExpenses={data.trainingExpenses}
      ideaNotes={data.ideaNotes}
      currentMemberId="member-001"
      onCreateTraining={() => console.log('Create training')}
      onViewTraining={(id) => console.log('View training:', id)}
      onEditTraining={(id) => console.log('Edit training:', id)}
      onDeleteTraining={(id) => console.log('Delete training:', id)}
      onUpdateTrainingStatus={(id, status) => console.log('Update status:', id, status)}
      onViewCalendar={(view) => console.log('View calendar:', view)}
      onViewReporting={() => console.log('View reporting')}
    />
  )
}

