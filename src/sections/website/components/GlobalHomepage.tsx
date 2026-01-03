import type { HomepageProps, ImpactStats } from '@/../product/sections/website/types'
import { LabCard } from './LabCard'
import { CourseCard } from './CourseCard'
import { ProjectCard } from './ProjectCard'
import { ArticleCard } from './ArticleCard'

export function GlobalHomepage({
  labs,
  featuredCourses,
  featuredProjects,
  featuredArticles,
  impactStats,
  onLabSelect,
  onCourseView,
  onProjectView,
  onArticleView
}: HomepageProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-stone-900 font-sans text-stone-900 dark:text-stone-100">
      {/* Hero Section */}
      <section className="relative bg-[#5B5781] text-white overflow-hidden">
        {/* Abstract organic shapes background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold mb-6 text-[#AFBD00]">
                Le mouvement des forêts comestibles
              </span>
              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{ fontFamily: '"Sole Serif Small", Georgia, serif' }}
              >
                Cultivons l'abondance, <br/>
                <span className="text-[#AFBD00]">ensemble.</span>
              </h1>
              <p className="text-lg sm:text-xl text-stone-200 mb-8 max-w-xl leading-relaxed">
                Semisto connecte les humains et la nature à travers des jardins-forêts productifs. 
                Rejoignez un réseau européen de lieux vivants, nourriciers et résilients.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('labs-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 rounded-full bg-[#AFBD00] text-stone-900 font-bold hover:bg-[#c2d100] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform"
                >
                  Trouver un Lab près de chez moi
                </button>
                <button className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 transition-colors">
                  Découvrir le concept
                </button>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
               {/* Impact Stats Visualization */}
               <div className="grid grid-cols-2 gap-4">
                 <StatCard 
                   value={impactStats.treesPlanted.toLocaleString()} 
                   label="Arbres plantés" 
                   icon="tree"
                 />
                 <StatCard 
                   value={impactStats.hectaresTransformed + ' ha'} 
                   label="Transformés en forêt" 
                   icon="landscape"
                   delay="100ms"
                 />
                 <StatCard 
                   value={impactStats.volunteersActive.toLocaleString()} 
                   label="Bénévoles actifs" 
                   icon="users"
                   delay="200ms"
                 />
                 <StatCard 
                   value={impactStats.activeLabs.toString()} 
                   label="Semisto Labs" 
                   icon="lab"
                   delay="300ms"
                   highlight
                 />
               </div>
            </div>
          </div>
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 text-stone-50 dark:text-stone-950">
          <svg viewBox="0 0 1440 120" fill="currentColor" className="w-full h-12 sm:h-24">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Mobile Stats (visible only on small screens) */}
      <section className="lg:hidden py-12 px-6 bg-stone-50 dark:bg-stone-950">
        <div className="grid grid-cols-2 gap-4">
          <StatCard value={impactStats.treesPlanted.toLocaleString()} label="Arbres plantés" icon="tree" dark />
          <StatCard value={impactStats.hectaresTransformed + ' ha'} label="Transformés" icon="landscape" dark />
        </div>
      </section>

      {/* Labs Section */}
      <section id="labs-section" className="py-20 px-6 bg-stone-50 dark:bg-stone-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#5B5781] font-semibold tracking-wider uppercase text-sm">Notre Réseau</span>
            <h2 
              className="text-3xl sm:text-4xl font-bold mt-2 mb-4"
              style={{ fontFamily: '"Sole Serif Small", Georgia, serif' }}
            >
              Les Semisto Labs
            </h2>
            <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
              Chaque Lab est un ancrage local autonome qui développe des jardins-forêts, forme des citoyens et produit des plants adaptés à son climat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {labs.map(lab => (
              <LabCard 
                key={lab.id} 
                lab={lab} 
                onSelect={onLabSelect}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 bg-white dark:bg-stone-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[#AFBD00] font-semibold tracking-wider uppercase text-sm">Réalisations</span>
              <h2 
                className="text-3xl sm:text-4xl font-bold mt-2"
                style={{ fontFamily: '"Sole Serif Small", Georgia, serif' }}
              >
                Projets à l'honneur
              </h2>
            </div>
            <button className="hidden sm:flex items-center text-[#5B5781] font-semibold hover:opacity-80 transition-opacity">
              Voir tous les projets <span className="ml-2">→</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.slice(0, 3).map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onView={onProjectView}
              />
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <button className="text-[#5B5781] font-semibold">Voir tous les projets →</button>
          </div>
        </div>
      </section>

      {/* Education / Academy Highlight */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#5B5781] text-white">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#AFBD00] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-[#c8bfd2] rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#AFBD00] text-stone-900 text-xs font-bold mb-4 uppercase tracking-wider">
                Semisto Academy
              </span>
              <h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
                style={{ fontFamily: '"Sole Serif Small", Georgia, serif' }}
              >
                Apprenez à concevoir l'abondance
              </h2>
              <p className="text-lg text-stone-200 mb-8 leading-relaxed">
                De l'initiation en ligne aux formations certifiantes sur le terrain, 
                nos experts vous transmettent les savoir-faire essentiels pour créer 
                des écosystèmes nourriciers.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-[#AFBD00]">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Design de Jardins-Forêts</h4>
                    <p className="text-stone-300 text-sm">Maîtrisez les strates, les guildes et la succession écologique.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-[#AFBD00]">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Pépinière & Multiplication</h4>
                    <p className="text-stone-300 text-sm">Apprenez à greffer, bouturer et semer vos propres arbres.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-[#AFBD00]">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Sols Vivants</h4>
                    <p className="text-stone-300 text-sm">Comprendre et régénérer la vie du sol pour une fertilité durable.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
               {featuredCourses.slice(0, 2).map(course => (
                 <CourseCard 
                   key={course.id} 
                   course={course}
                   onView={onCourseView}
                 />
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 px-6 bg-stone-50 dark:bg-stone-950">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
            style={{ fontFamily: '"Sole Serif Small", Georgia, serif' }}
          >
            Ressources & Actualités
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.slice(0, 3).map(article => (
              <ArticleCard 
                key={article.id} 
                article={article} 
                onView={onArticleView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Newsletter */}
      <section className="py-20 px-6 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: '"Sole Serif Small", Georgia, serif' }}
          >
            Restez connecté au mouvement
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-8">
            Recevez nos conseils de saison, les dates de formations et les actualités du réseau Semisto.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="votre@email.com" 
              className="px-6 py-4 rounded-full border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-[#5B5781] flex-grow"
            />
            <button 
              type="submit"
              className="px-8 py-4 rounded-full bg-[#5B5781] text-white font-bold hover:bg-[#4a4669] transition-colors whitespace-nowrap"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

// Internal Helper for Stats
function StatCard({ 
  value, 
  label, 
  icon, 
  delay = '0ms', 
  highlight = false,
  dark = false
}: { 
  value: string, 
  label: string, 
  icon: 'tree' | 'landscape' | 'users' | 'lab', 
  delay?: string,
  highlight?: boolean,
  dark?: boolean
}) {
  const bgColor = highlight ? 'bg-[#AFBD00]' : (dark ? 'bg-white dark:bg-stone-800' : 'bg-white/10 backdrop-blur-md border border-white/20');
  const textColor = highlight ? 'text-stone-900' : (dark ? 'text-stone-900 dark:text-stone-100' : 'text-white');
  const subTextColor = highlight ? 'text-stone-800' : (dark ? 'text-stone-500 dark:text-stone-400' : 'text-stone-200');

  return (
    <div 
      className={`${bgColor} p-6 rounded-2xl transition-all duration-700 hover:transform hover:-translate-y-1`}
      style={{ animationDelay: delay }}
    >
      <div className={`text-3xl font-bold ${textColor} mb-1 font-mono`}>{value}</div>
      <div className={`text-sm font-medium ${subTextColor} uppercase tracking-wide`}>{label}</div>
    </div>
  )
}
