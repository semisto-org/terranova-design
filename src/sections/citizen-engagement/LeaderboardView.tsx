import data from '@/../product/sections/citizen-engagement/data.json'
import { LeaderboardView } from './components/LeaderboardView'

export default function LeaderboardViewPreview() {
  return (
    <LeaderboardView
      villages={data.villages}
      badges={data.badges}
      challenges={data.seasonalChallenges}
      topCitizens={data.citizens}
      onViewVillage={(id) => console.log('View village:', id)}
      onViewChallenge={(id) => console.log('View challenge:', id)}
    />
  )
}
