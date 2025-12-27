import { useState, useEffect } from 'react'
import { AppShell } from './AppShell'
import type { Pole, Lab, NavItem } from './AppShell'

interface ShellWrapperProps {
  children: React.ReactNode
}

// Default poles for preview
const defaultPoles: Pole[] = [
  { id: 'design-studio', label: 'Design Studio', color: '#AFBD00', bgColor: '#e1e6d8' },
  { id: 'academy', label: 'Academy', color: '#B01A19', bgColor: '#eac7b8' },
  { id: 'nursery', label: 'Nursery', color: '#EF9B0D', bgColor: '#fbe6c3' },
  { id: 'mise-en-oeuvre', label: 'Mise en oeuvre', color: '#234766', bgColor: '#c9d1d9' },
]

// Default labs for preview
const defaultLabs: Lab[] = [
  { id: 'wallonie', name: 'Semisto Wallonie' },
  { id: 'bruxelles', name: 'Semisto Bruxelles' },
]

// Navigation items by pole
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
    { label: 'Dashboard', href: '/lab/dashboard', isActive: true },
    { label: 'Cycles', href: '/lab/cycles' },
    { label: 'Membres', href: '/lab/members' },
    { label: 'Guildes', href: '/lab/guilds' },
    { label: 'Semos', href: '/lab/semos' },
    { label: 'Timesheets', href: '/lab/timesheets' },
  ],
  'website': [
    { label: 'Pages', href: '/website/pages', isActive: true },
    { label: 'Transformation Map', href: '/website/map' },
    { label: 'Boutique', href: '/website/shop' },
    { label: 'Portfolio', href: '/website/portfolio' },
    { label: 'Formations', href: '/website/courses' },
  ],
}

/**
 * ShellWrapper is a convenience component that wraps AppShell with default props
 * for use in screen design previews. It provides all the required props so that
 * screen designs can be rendered inside the shell without having to specify
 * all the shell configuration.
 */
export default function ShellWrapper({ children }: ShellWrapperProps) {
  const [activePoleId, setActivePoleId] = useState('lab-management')
  const [activeLabId, setActiveLabId] = useState('wallonie')

  const user = {
    name: 'Sophie Dubois',
    email: 'sophie.dubois@semisto.org',
  }

  const navItems = navItemsByPole[activePoleId] || []

  return (
    <AppShell
      poles={defaultPoles}
      activePoleId={activePoleId}
      labs={defaultLabs}
      activeLabId={activeLabId}
      user={user}
      navItems={navItems}
      showLabManagement={true}
      showWebsite={true}
      unreadNotificationsCount={2}
      onPoleChange={setActivePoleId}
      onLabChange={setActiveLabId}
      onNavigate={(href) => console.log('Navigate to:', href)}
      onSearch={() => console.log('Open search')}
      onNotifications={() => console.log('Open notifications')}
      onSettings={() => console.log('Open settings')}
      onLogout={() => console.log('Logout')}
    >
      {children}
    </AppShell>
  )
}
