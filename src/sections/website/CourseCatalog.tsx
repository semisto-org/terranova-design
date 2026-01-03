import data from '@/../product/sections/website/data.json'
import { CourseCatalog } from './components/CourseCatalog'

export default function CourseCatalogPreview() {
  return (
    <CourseCatalog
      courses={data.courses}
      onCourseView={(id) => console.log('View course:', id)}
      onCourseRegister={(id) => console.log('Register for course:', id)}
      onFilter={(filters) => console.log('Filter courses:', filters)}
    />
  )
}
