import data from '@/../product/sections/plant-database/data.json'
import { ActivityFeed } from './components/ActivityFeed'
import type { ActivityFeedProps } from '@/../product/sections/plant-database/types'

export default function ActivityFeedPreview() {
  return (
    <ActivityFeed
      activities={data.activityFeed}
      contributors={data.contributors}
      onActivitySelect={(targetId, targetType) => {
        console.log('Activity selected:', { targetId, targetType })
      }}
      onContributorSelect={(contributorId) => {
        console.log('Contributor selected:', contributorId)
      }}
      onLoadMore={() => {
        console.log('Load more activities')
      }}
      hasMore={false}
    />
  )
}

