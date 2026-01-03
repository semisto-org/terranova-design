import data from '@/../product/sections/website/data.json'
import { DesignStudioLanding } from './components/DesignStudioLanding'

export default function DesignStudioLandingPreview() {
  // Use the first lab as the context for this design studio
  const lab = data.labs[0]

  return (
    <DesignStudioLanding
      lab={lab}
      profiles={data.designProfiles}
      onProfileSelect={(slug) => console.log('Selected profile:', slug)}
    />
  )
}
