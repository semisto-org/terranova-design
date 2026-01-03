import data from '@/../product/sections/nursery/data.json'
import { ContainerList } from './components/ContainerList'

export default function ContainerListPreview() {
  return (
    <ContainerList
      containers={data.containers}
      onCreate={() => console.log('Créer un nouveau contenant')}
      onEdit={(id) => console.log('Modifier le contenant:', id)}
      onDelete={(id) => console.log('Supprimer le contenant:', id)}
      onReorder={(containers) => console.log('Réordonner les contenants:', containers)}
    />
  )
}


