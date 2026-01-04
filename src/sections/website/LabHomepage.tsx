import data from '@/../product/sections/website/data.json'
import { LabHomepage } from './components/LabHomepage'
import type { Lab, Course, Event, Project, Article } from '@/../product/sections/website/types'

export default function LabHomepagePreview() {
  // Use Lab Wallonie as the example (has all 4 poles active)
  const lab = data.labs[0] as Lab
  
  // Filter data for this lab
  const upcomingCourses = (data.courses as Course[])
    .filter(c => c.labId === lab.id)
    .slice(0, 4)
  
  const upcomingEvents = (data.events as Event[])
    .filter(e => e.labId === lab.id)
    .slice(0, 4)
  
  const recentProjects = (data.projects as Project[])
    .filter(p => p.labId === lab.id)
    .slice(0, 3)
  
  const recentArticles = (data.articles as Article[])
    .filter(a => a.labId === lab.id)
    .slice(0, 4)

  return (
    <LabHomepage
      lab={lab}
      upcomingCourses={upcomingCourses}
      upcomingEvents={upcomingEvents}
      recentProjects={recentProjects}
      recentArticles={recentArticles}
      onCourseView={(id) => console.log('View course:', id)}
      onEventView={(id) => console.log('View event:', id)}
      onProjectView={(id) => console.log('View project:', id)}
      onArticleView={(id) => console.log('View article:', id)}
      onNewsletterSubscribe={(email) => console.log('Subscribe:', email)}
    />
  )
}

