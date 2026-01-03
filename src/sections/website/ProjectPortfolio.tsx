import data from '@/../product/sections/website/data.json'
import { ProjectPortfolio } from './components/ProjectPortfolio'

export default function ProjectPortfolioPreview() {
  return (
    <ProjectPortfolio
      projects={data.projects}
      onProjectView={(id) => console.log('View project:', id)}
      onDonate={(id) => console.log('Donate to project:', id)}
      onFilter={(filters) => console.log('Filter:', filters)}
    />
  )
}
