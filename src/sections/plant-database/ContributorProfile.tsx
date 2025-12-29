import data from '@/../product/sections/plant-database/data.json'
import { ContributorProfile } from './components/ContributorProfile'
import type { ActivityItem } from '@/../product/sections/plant-database/types'

export default function ContributorProfilePreview() {
  // Get the first contributor and their recent activities
  const contributor = data.contributors[0]
  const recentActivities = data.activityFeed
    .filter((activity) => activity.contributorId === contributor.id)
    .slice(0, 10) as ActivityItem[]

  return (
    <ContributorProfile
      contributor={contributor}
      recentActivities={recentActivities}
      onActivitySelect={(targetId, targetType) => {
        console.log('Activity selected:', { targetId, targetType })
      }}
    />
  )
}

