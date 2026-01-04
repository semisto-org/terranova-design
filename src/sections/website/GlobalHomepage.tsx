import data from '@/../product/sections/website/data.json'
import type { Lab, Course, Project, Article, ImpactStats } from '@/../product/sections/website/types'
import { GlobalHomepage } from './components/GlobalHomepage'

export default function GlobalHomepagePreview() {
  // Cast data to ensure types match
  const labs = data.labs as unknown as Lab[]
  const courses = data.courses as unknown as Course[]
  const projects = data.projects as unknown as Project[]
  const articles = data.articles as unknown as Article[]
  const impactStats = data.impactStats as ImpactStats

  return (
    <GlobalHomepage
      labs={labs}
      featuredCourses={courses.filter(c => c.isFeatured)}
      featuredProjects={projects.slice(0, 3)} // Just take first 3 as featured for now
      featuredArticles={articles.filter(a => a.isFeatured)}
      impactStats={impactStats}
      onLabSelect={(id) => console.log('Select Lab:', id)}
      onCourseView={(id) => console.log('View Course:', id)}
      onProjectView={(id) => console.log('View Project:', id)}
      onArticleView={(id) => console.log('View Article:', id)}
    />
  )
}
