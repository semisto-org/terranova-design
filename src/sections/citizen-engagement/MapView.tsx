import data from '@/../product/sections/citizen-engagement/data.json'
import { MapView } from './components/MapView'

export default function MapViewPreview() {
  return (
    <MapView
      villages={data.villages}
      spots={data.spots}
      selectedVillageId={null}
      currentCitizen={data.citizens[0]} // Marie Dupont as logged-in user
      onSelectVillage={(id) => console.log('Navigate to village:', id)}
      onSelectSpot={(id) => console.log('Navigate to spot:', id)}
      onReportSpot={(geometry) => console.log('Report new spot:', geometry)}
      onValidateSpot={(id) => console.log('Validate spot:', id)}
      onReportIssue={(id, issue) => console.log('Report issue on spot:', id, issue)}
    />
  )
}
