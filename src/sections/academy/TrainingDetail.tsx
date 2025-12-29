import data from '@/../product/sections/academy/data.json'
import { TrainingDetail as TrainingDetailComponent } from './components/TrainingDetail'

export default function TrainingDetailPreview() {
  // Utiliser la formation "training-002" (Cursus) comme exemple car elle a beaucoup de données
  const training = data.trainings.find(t => t.id === 'training-002') || data.trainings[0]
  const trainingType = data.trainingTypes.find(tt => tt.id === training.trainingTypeId)!
  
  const sessions = data.trainingSessions.filter(s => s.trainingId === training.id)
  const registrations = data.trainingRegistrations.filter(r => r.trainingId === training.id)
  const attendances = data.trainingAttendances.filter(a => 
    registrations.some(r => r.id === a.registrationId)
  )
  const documents = data.trainingDocuments.filter(d => d.trainingId === training.id)
  const expenses = data.trainingExpenses.filter(e => e.trainingId === training.id)
  
  // Checklist items viennent du template du type de formation
  const checklistItems = trainingType.checklistTemplate || []
  // Simuler quelques items cochés (exemple)
  const checkedItems = [0, 1, 2, 3, 4, 5, 6] // Les 7 premiers items cochés

  return (
    <TrainingDetailComponent
      training={training}
      trainingType={trainingType}
      sessions={sessions}
      registrations={registrations}
      attendances={attendances}
      documents={documents}
      expenses={expenses}
      locations={data.trainingLocations}
      members={data.members}
      checklistItems={checklistItems}
      checkedItems={checkedItems}
      onEdit={() => console.log('Edit training:', training.id)}
      onDelete={() => console.log('Delete training:', training.id)}
      onUpdateStatus={(status) => console.log('Update status:', status)}
      onAddSession={() => console.log('Add session')}
      onEditSession={(sessionId) => console.log('Edit session:', sessionId)}
      onDeleteSession={(sessionId) => console.log('Delete session:', sessionId)}
      onAddRegistration={() => console.log('Add registration')}
      onEditRegistration={(registrationId) => console.log('Edit registration:', registrationId)}
      onDeleteRegistration={(registrationId) => console.log('Delete registration:', registrationId)}
      onUpdatePaymentStatus={(registrationId, status, amountPaid) => 
        console.log('Update payment:', registrationId, status, amountPaid)
      }
      onMarkAttendance={(registrationId, sessionId, isPresent) => 
        console.log('Mark attendance:', registrationId, sessionId, isPresent)
      }
      onUploadDocument={() => console.log('Upload document')}
      onDeleteDocument={(documentId) => console.log('Delete document:', documentId)}
      onToggleChecklistItem={(itemIndex) => console.log('Toggle checklist item:', itemIndex)}
      onAddChecklistItem={(item) => console.log('Add checklist item:', item)}
      onRemoveChecklistItem={(itemIndex) => console.log('Remove checklist item:', itemIndex)}
      onAddExpense={() => console.log('Add expense')}
      onEditExpense={(expenseId) => console.log('Edit expense:', expenseId)}
      onDeleteExpense={(expenseId) => console.log('Delete expense:', expenseId)}
    />
  )
}

