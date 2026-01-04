import data from '@/../product/sections/citizen-engagement/data.json'
import { CitizenEngagementHub } from './components/CitizenEngagementHub'

export default function CitizenEngagementHubPreview() {
  // Use the first citizen as the current user for preview
  const currentCitizen = data.citizens[0]

  return (
    <CitizenEngagementHub
      impactStats={data.impactStats}
      recentActivity={data.recentActivity}
      campaigns={data.campaigns}
      worksites={data.worksites}
      events={data.events}
      currentCitizen={currentCitizen}
      onNavigateToMap={() => console.log('Navigate to map')}
      onNavigateToContribute={() => console.log('Navigate to contribute')}
      onViewCampaign={(id) => console.log('View campaign:', id)}
      onJoinWorksite={(id) => console.log('Join worksite:', id)}
      onViewEvent={(id) => console.log('View event:', id)}
    />
  )
}
