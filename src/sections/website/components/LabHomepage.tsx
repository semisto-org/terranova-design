import type { LabHomepageProps } from '@/../product/sections/website/types'
import { LabHero } from './LabHero'
import { PoleCard } from './PoleCard'
import { CourseCard } from './CourseCard'
import { EventCard } from './EventCard'
import { ProjectCard } from './ProjectCard'
import { ArticleCard } from './ArticleCard'
import { NewsletterCta } from './NewsletterCta'

export function LabHomepage({
  lab,
  upcomingCourses,
  upcomingEvents,
  recentProjects,
  recentArticles,
  onCourseView,
  onEventView,
  onProjectView,
  onArticleView,
  onNewsletterSubscribe
}: LabHomepageProps) {
  const featuredArticle = recentArticles.find(a => a.isFeatured)
  const otherArticles = recentArticles.filter(a => a !== featuredArticle).slice(0, 3)

  return (
    <div className="min-h-screen bg-white dark:bg-stone-900">
      {/* Hero Section */}
      <LabHero lab={lab} onNewsletterSubscribe={onNewsletterSubscribe} />
      
      {/* Active Poles Section */}
      <section className="py-20 px-6 bg-white dark:bg-stone-900">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span 
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: '#c8bfd2', color: '#5B5781' }}
            >
              Nos activités
            </span>
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-stone-100 mb-4"
              style={{ fontFamily: '"Sole Serif Small", Georgia, serif' }}
            >
              Découvrez nos pôles
            </h2>
            <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
              {lab.name} propose {lab.activePoles.length} pôles d'activités pour accompagner 
              la création de jardins-forêts dans la région.
            </p>
          </div>
          
          {/* Poles grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lab.activePoles.map((poleId) => (
              <PoleCard 
                key={poleId} 
                poleId={poleId}
                onSelect={() => console.log('Navigate to pole:', poleId)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Courses & Events Section */}
      <section className="py-20 px-6 bg-stone-50 dark:bg-stone-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Courses */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span 
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2"
                    style={{ backgroundColor: '#eac7b8', color: '#B01A19' }}
                  >
                    Academy
                  </span>
                  <h3 
                    className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100"
                    style={{ fontFamily: '"Sole Serif Small", Georgia, serif' }}
                  >
                    Prochaines formations
                  </h3>
                </div>
                <button 
                  className="hidden sm:flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-70"
                  style={{ color: '#B01A19' }}
                >
                  Tout voir
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-6">
                {upcomingCourses.slice(0, 2).map((course) => (
                  <CourseCard 
                    key={course.id} 
                    course={course}
                    onView={() => onCourseView?.(course.id)}
                  />
                ))}
              </div>
            </div>
            
            {/* Events */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span 
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2"
                    style={{ backgroundColor: '#fbe6c3', color: '#EF9B0D' }}
                  >
                    Agenda
                  </span>
                  <h3 
                    className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100"
                    style={{ fontFamily: '"Sole Serif Small", Georgia, serif' }}
                  >
                    Événements à venir
                  </h3>
                </div>
                <button 
                  className="hidden sm:flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-70"
                  style={{ color: '#EF9B0D' }}
                >
                  Tout voir
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                {upcomingEvents.slice(0, 4).map((event) => (
                  <EventCard 
                    key={event.id} 
                    event={event}
                    onView={() => onEventView?.(event.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-20 px-6 bg-white dark:bg-stone-900">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2"
                style={{ backgroundColor: '#e1e6d8', color: '#AFBD00' }}
              >
                Réalisations
              </span>
              <h2 
                className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100"
                style={{ fontFamily: '"Sole Serif Small", Georgia, serif' }}
              >
                Nos projets
              </h2>
            </div>
            <button 
              className="flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-70"
              style={{ color: '#AFBD00' }}
            >
              Voir tous les projets
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
          
          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProjects.slice(0, 3).map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project}
                onView={() => onProjectView?.(project.id)}
                onDonate={() => console.log('Donate to project:', project.id)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter CTA */}
      <NewsletterCta lab={lab} onSubscribe={onNewsletterSubscribe} />
      
      {/* Articles Section */}
      <section className="py-20 px-6 bg-stone-50 dark:bg-stone-950">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2"
                style={{ backgroundColor: '#c8bfd2', color: '#5B5781' }}
              >
                Blog
              </span>
              <h2 
                className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100"
                style={{ fontFamily: '"Sole Serif Small", Georgia, serif' }}
              >
                Derniers articles
              </h2>
            </div>
            <button 
              className="flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-70"
              style={{ color: '#5B5781' }}
            >
              Tous les articles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
          
          {/* Articles layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Featured article */}
            {featuredArticle && (
              <div className="lg:col-span-2">
                <ArticleCard 
                  article={featuredArticle}
                  variant="featured"
                  onView={() => onArticleView?.(featuredArticle.id)}
                />
              </div>
            )}
            
            {/* Other articles */}
            <div className="space-y-4">
              <h4 className="font-semibold text-stone-500 dark:text-stone-400 text-sm uppercase tracking-wider mb-4">
                Plus d'articles
              </h4>
              {otherArticles.map((article) => (
                <ArticleCard 
                  key={article.id}
                  article={article}
                  variant="compact"
                  onView={() => onArticleView?.(article.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer CTA */}
      <section className="py-16 px-6 bg-white dark:bg-stone-900 border-t border-stone-100 dark:border-stone-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-4"
            style={{ fontFamily: '"Sole Serif Small", Georgia, serif' }}
          >
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-8 max-w-xl mx-auto">
            Que vous soyez particulier, entreprise ou collectivité, nous vous accompagnons 
            dans la création de votre jardin-forêt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
              style={{ backgroundColor: '#5B5781' }}
            >
              Découvrir le Design Studio
            </button>
            <button 
              className="px-8 py-4 rounded-full font-semibold border-2 transition-all hover:scale-105"
              style={{ borderColor: '#5B5781', color: '#5B5781' }}
            >
              Nous contacter
            </button>
          </div>
        </div>
      </section>
      
      {/* Social links */}
      <section className="py-8 px-6 bg-stone-100 dark:bg-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-600 dark:text-stone-400 text-sm">
            Suivez <strong>{lab.name}</strong> sur les réseaux
          </p>
          <div className="flex gap-4">
            {lab.socialLinks.facebook && (
              <a 
                href={lab.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white dark:bg-stone-700 flex items-center justify-center text-stone-600 dark:text-stone-300 hover:text-[#5B5781] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            )}
            {lab.socialLinks.instagram && (
              <a 
                href={lab.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white dark:bg-stone-700 flex items-center justify-center text-stone-600 dark:text-stone-300 hover:text-[#5B5781] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            )}
            {lab.socialLinks.youtube && (
              <a 
                href={lab.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white dark:bg-stone-700 flex items-center justify-center text-stone-600 dark:text-stone-300 hover:text-[#5B5781] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

