import data from '@/../product/sections/lab-management/data.json'
import { ShapeUpWorkboard } from './components/ShapeUpWorkboard'

export default function ShapeUpWorkboardPreview() {
  return (
    <ShapeUpWorkboard
      members={data.members}
      cycles={data.cycles}
      pitches={data.pitches}
      bets={data.bets}
      scopes={data.scopes}
      chowderItems={data.chowderItems}
      ideaLists={data.ideaLists}
      hillChartSnapshots={data.hillChartSnapshots}
      currentMemberId="member-001"
      // Pitch actions
      onCreatePitch={() => console.log('Create pitch')}
      onViewPitch={(id) => console.log('View pitch:', id)}
      onEditPitch={(id) => console.log('Edit pitch:', id)}
      onDeletePitch={(id) => console.log('Delete pitch:', id)}
      // Betting actions
      onPlaceBet={(pitchId, team) => console.log('Place bet:', pitchId, team)}
      onRemoveBet={(id) => console.log('Remove bet:', id)}
      // Building actions
      onUpdateHillPosition={(scopeId, pos) => console.log('Update hill position:', scopeId, pos)}
      onToggleTask={(scopeId, taskId) => console.log('Toggle task:', scopeId, taskId)}
      onAddTask={(scopeId) => console.log('Add task to scope:', scopeId)}
      onCreateScope={(pitchId) => console.log('Create scope for pitch:', pitchId)}
      onAddChowderItem={(pitchId) => console.log('Add chowder item:', pitchId)}
      onMoveChowderToScope={(itemId, scopeId) => console.log('Move chowder to scope:', itemId, scopeId)}
      onDeleteChowderItem={(id) => console.log('Delete chowder item:', id)}
      onViewHistory={(pitchId) => console.log('View history:', pitchId)}
      // Idea list actions
      onAddIdea={(listId, title) => console.log('Add idea:', listId, title)}
      onVoteIdea={(listId, ideaId) => console.log('Vote idea:', listId, ideaId)}
    />
  )
}
