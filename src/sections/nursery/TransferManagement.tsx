import data from '@/../product/sections/nursery/data.json'
import { TransferManagement } from './components/TransferManagement'

export default function TransferManagementPreview() {
  return (
    <TransferManagement
      transfers={data.transfers}
      nurseries={data.nurseries}
      onView={(id) => console.log('Voir transfert:', id)}
      onCreate={() => console.log('Créer un nouveau transfert')}
      onOptimize={(id) => console.log('Optimiser transfert:', id)}
      onStart={(id) => console.log('Démarrer transfert:', id)}
      onComplete={(id) => console.log('Compléter transfert:', id)}
      onCancel={(id) => console.log('Annuler transfert:', id)}
    />
  )
}

