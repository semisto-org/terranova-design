import { useState, useEffect } from 'react'
import { AppShell } from './components/AppShell'
import { SearchDialog } from './components/SearchDialog'
import { NotificationsDrawer } from './components/NotificationsDrawer'
import type { Pole, Lab, NavItem } from './components/AppShell'
import type { Notification } from './components/NotificationsDrawer'

const poles: Pole[] = [
  { id: 'design-studio', label: 'Design Studio', color: '#AFBD00', bgColor: '#e1e6d8' },
  { id: 'academy', label: 'Academy', color: '#B01A19', bgColor: '#eac7b8' },
  { id: 'nursery', label: 'Nursery', color: '#EF9B0D', bgColor: '#fbe6c3' },
  { id: 'mise-en-oeuvre', label: 'Mise en oeuvre', color: '#234766', bgColor: '#c9d1d9' },
]

const labs: Lab[] = [
  { id: 'wallonie', name: 'Semisto Wallonie' },
  { id: 'bruxelles', name: 'Semisto Bruxelles' },
]

// Sample notifications for demo
const sampleNotifications: Notification[] = [
  {
    id: '1',
    type: 'project',
    title: 'Nouveau projet assigné',
    description: 'Vous avez été assigné au projet "Jardin-forêt Liège Centre" par Sophie Martin.',
    timestamp: new Date(Date.now() - 15 * 60000), // 15 min ago
    read: false,
  },
  {
    id: '2',
    type: 'formation',
    title: 'Inscription confirmée',
    description: '3 nouvelles inscriptions pour la formation "Introduction à la permaculture" du 15 janvier.',
    timestamp: new Date(Date.now() - 2 * 3600000), // 2 hours ago
    read: false,
  },
  {
    id: '3',
    type: 'order',
    title: 'Commande expédiée',
    description: 'La commande #2024-0342 a été expédiée. Livraison prévue le 28 décembre.',
    timestamp: new Date(Date.now() - 24 * 3600000), // Yesterday
    read: true,
  },
  {
    id: '4',
    type: 'member',
    title: 'Nouveau membre',
    description: 'Jean Dubois a rejoint la guilde Design Studio.',
    timestamp: new Date(Date.now() - 2 * 24 * 3600000), // 2 days ago
    read: true,
  },
  {
    id: '5',
    type: 'system',
    title: 'Cycle terminé',
    description: 'Le cycle "Automne 2024" est maintenant clôturé. Consultez le rapport.',
    timestamp: new Date(Date.now() - 5 * 24 * 3600000), // 5 days ago
    read: true,
  },
]

const navItemsByPole: Record<string, NavItem[]> = {
  'design-studio': [
    { label: 'Projets', href: '/design-studio/projects', isActive: true },
    { label: 'Clients', href: '/design-studio/clients' },
    { label: 'Offres', href: '/design-studio/offers' },
    { label: 'Plantations', href: '/design-studio/plantings' },
  ],
  'academy': [
    { label: 'Formations', href: '/academy/courses', isActive: true },
    { label: 'Inscriptions', href: '/academy/registrations' },
    { label: 'Contenus', href: '/academy/content' },
    { label: 'Participants', href: '/academy/participants' },
  ],
  'nursery': [
    { label: 'Stocks', href: '/nursery/stocks', isActive: true },
    { label: 'Commandes', href: '/nursery/orders' },
    { label: 'Catalogue', href: '/nursery/catalog' },
  ],
  'mise-en-oeuvre': [
    { label: 'Chantiers', href: '/implementation/worksites', isActive: true },
    { label: 'Heroes', href: '/implementation/heroes' },
    { label: 'Événements', href: '/implementation/events' },
    { label: 'Matériothèque', href: '/implementation/equipment' },
  ],
  'lab-management': [
    { label: 'Cycles', href: '/lab/cycles', isActive: true },
    { label: 'Membres', href: '/lab/members' },
    { label: 'Guildes', href: '/lab/guilds' },
    { label: 'Semos', href: '/lab/semos' },
    { label: 'Finance', href: '/lab/finance' },
    { label: 'Reporting', href: '/lab/reporting' },
  ],
  'website': [
    { label: 'Pages', href: '/website/pages', isActive: true },
    { label: 'Transformation Map', href: '/website/map' },
    { label: 'Boutique', href: '/website/shop' },
    { label: 'Portfolio', href: '/website/portfolio' },
    { label: 'Formations', href: '/website/courses' },
  ],
}

export default function ShellPreview() {
  const [activePoleId, setActivePoleId] = useState('design-studio')
  const [activeLabId, setActiveLabId] = useState('wallonie')
  const [searchOpen, setSearchOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [notifications, setNotifications] = useState(sampleNotifications)

  // Cmd+K / Ctrl+K to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const user = {
    name: 'Marie Dupont',
    email: 'marie@semisto.org',
  }

  const navItems = navItemsByPole[activePoleId] || []
  const activePole = poles.find(p => p.id === activePoleId)
  const poleColor = activePoleId === 'lab-management'
    ? '#5B5781'
    : activePole?.color || '#5B5781'

  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <>
    <AppShell
      poles={poles}
      activePoleId={activePoleId}
      labs={labs}
      activeLabId={activeLabId}
      user={user}
      navItems={navItems}
      showLabManagement={true}
      showWebsite={true}
      unreadNotificationsCount={unreadCount}
      onPoleChange={setActivePoleId}
      onLabChange={setActiveLabId}
      onNavigate={(href) => console.log('Navigate to:', href)}
      onSearch={() => setSearchOpen(true)}
      onNotifications={() => setNotificationsOpen(true)}
      onSettings={() => console.log('Open settings')}
      onLogout={() => console.log('Logout')}
    >
      <div className="max-w-4xl">
        <h1
          className="text-2xl font-bold mb-2 text-stone-900 dark:text-stone-100"
          style={{ fontFamily: "'Sole Serif Small', serif" }}
        >
          {activePoleId === 'lab-management'
            ? 'Gestion du Lab'
            : activePoleId === 'website'
            ? 'Website'
            : activePole?.label}
        </h1>
        <p className="text-stone-600 dark:text-stone-400 mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
          Contenu de la section {navItems[0]?.label.toLowerCase() || ''} dans{' '}
          <span style={{ color: poleColor, fontWeight: 500 }}>
            {activePoleId === 'lab-management'
              ? 'Gestion du Lab'
              : activePoleId === 'website'
              ? 'Website'
              : activePole?.label}
          </span>
        </p>

        {/* Placeholder content */}
        <div className="grid gap-4">
          {[1, 2, 3].map(i => (
            <div
              key={i}
              className="p-6 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800"
            >
              <div className="h-4 w-48 bg-stone-200 dark:bg-stone-700 rounded mb-3" />
              <div className="h-3 w-full bg-stone-100 dark:bg-stone-800 rounded mb-2" />
              <div className="h-3 w-3/4 bg-stone-100 dark:bg-stone-800 rounded" />
            </div>
          ))}
        </div>
      </div>
    </AppShell>

    <SearchDialog
      isOpen={searchOpen}
      onClose={() => setSearchOpen(false)}
      onSearch={(query) => console.log('Search:', query)}
    />

    <NotificationsDrawer
      isOpen={notificationsOpen}
      onClose={() => setNotificationsOpen(false)}
      notifications={notifications}
      onMarkAsRead={(id) => {
        setNotifications(prev =>
          prev.map(n => n.id === id ? { ...n, read: true } : n)
        )
      }}
      onMarkAllAsRead={() => {
        setNotifications(prev => prev.map(n => ({ ...n, read: true })))
      }}
      onNotificationClick={(notification) => {
        console.log('Clicked notification:', notification)
        setNotificationsOpen(false)
      }}
    />
    </>
  )
}
