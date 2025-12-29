import data from '@/../product/sections/academy/data.json'
import { TrainingCalendar as TrainingCalendarComponent } from './components/TrainingCalendar'

export default function TrainingCalendarPreview() {
  return (
    <TrainingCalendarComponent
      trainings={data.trainings}
      trainingSessions={data.trainingSessions}
      trainingTypes={data.trainingTypes}
      trainingLocations={data.trainingLocations}
      members={data.members}
      onViewTraining={(trainingId) => console.log('View training:', trainingId)}
    />
  )
}

