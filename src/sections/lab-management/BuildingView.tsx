import data from '@/../product/sections/lab-management/data.json'
import { BuildingView } from './components/BuildingView'

export default function BuildingViewPreview() {
  return (
    <BuildingView
      pitches={data.pitches}
      bets={data.bets}
      scopes={data.scopes}
      chowderItems={data.chowderItems}
      members={data.members}
      cycles={data.cycles}
      hillChartSnapshots={data.hillChartSnapshots}
      onUpdateHillPosition={(scopeId, position) =>
        console.log('Update hill position:', scopeId, position)
      }
      onToggleTask={(scopeId, taskId) =>
        console.log('Toggle task:', scopeId, taskId)
      }
      onAddTask={(scopeId) => console.log('Add task to scope:', scopeId)}
      onCreateScope={(pitchId) => console.log('Create scope for pitch:', pitchId)}
      onAddChowderItem={(pitchId) => console.log('Add chowder item:', pitchId)}
      onMoveChowderToScope={(itemId, scopeId) =>
        console.log('Move chowder to scope:', itemId, scopeId)
      }
      onDeleteChowderItem={(itemId) => console.log('Delete chowder item:', itemId)}
      onViewHistory={(pitchId) => console.log('View history:', pitchId)}
    />
  )
}
