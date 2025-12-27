import { useState, useMemo } from 'react'
import type { Event, Cycle, Member, EventType } from '@/../product/sections/lab-management/types'

export interface CalendarViewProps {
  events: Event[]
  cycles: Cycle[]
  members: Member[]
  currentMemberId: string
  onCreateEvent?: () => void
  onViewEvent?: (eventId: string) => void
  onEditEvent?: (eventId: string) => void
  onDeleteEvent?: (eventId: string) => void
}

const eventTypeConfig: Record<
  EventType,
  { label: string; icon: string; color: string; bgColor: string }
> = {
  project_meeting: {
    label: 'Réunion projet',
    icon: '📋',
    color: 'text-blue-700 dark:text-blue-300',
    bgColor: 'bg-blue-100 dark:bg-blue-900/40',
  },
  stakeholder_meeting: {
    label: 'Réunion porteurs',
    icon: '👥',
    color: 'text-violet-700 dark:text-violet-300',
    bgColor: 'bg-violet-100 dark:bg-violet-900/40',
  },
  design_day: {
    label: 'Design Day',
    icon: '🎨',
    color: 'text-[#7a8200] dark:text-[#AFBD00]',
    bgColor: 'bg-[#AFBD00]/20 dark:bg-[#AFBD00]/30',
  },
  guild_meeting: {
    label: 'Réunion guilde',
    icon: '⚙️',
    color: 'text-stone-700 dark:text-stone-300',
    bgColor: 'bg-stone-100 dark:bg-stone-700',
  },
  betting: {
    label: 'Betting Table',
    icon: '🎲',
    color: 'text-amber-700 dark:text-amber-300',
    bgColor: 'bg-amber-100 dark:bg-amber-900/40',
  },
  semisto_day: {
    label: 'Semisto Day',
    icon: '🌳',
    color: 'text-emerald-700 dark:text-emerald-300',
    bgColor: 'bg-emerald-100 dark:bg-emerald-900/40',
  },
  semos_fest: {
    label: 'Semos Fest',
    icon: '🎉',
    color: 'text-pink-700 dark:text-pink-300',
    bgColor: 'bg-pink-100 dark:bg-pink-900/40',
  },
  training: {
    label: 'Formation',
    icon: '📚',
    color: 'text-orange-700 dark:text-orange-300',
    bgColor: 'bg-orange-100 dark:bg-orange-900/40',
  },
}

const DAYS_FR = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
const MONTHS_FR = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre',
]

export function CalendarView({
  events,
  cycles,
  members,
  currentMemberId,
  onCreateEvent,
  onViewEvent,
  onEditEvent,
  onDeleteEvent,
}: CalendarViewProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null)
  const [filterTypes, setFilterTypes] = useState<EventType[]>([])

  // Current member
  const currentMember = members.find((m) => m.id === currentMemberId)

  // Get first and last day of the current month view
  const { firstDay, lastDay, daysInMonth, startOffset } = useMemo(() => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    const first = new Date(year, month, 1)
    const last = new Date(year, month + 1, 0)

    // Monday = 0, Sunday = 6 (adjust from JS where Sunday = 0)
    let offset = first.getDay() - 1
    if (offset < 0) offset = 6

    return {
      firstDay: first,
      lastDay: last,
      daysInMonth: last.getDate(),
      startOffset: offset,
    }
  }, [currentDate])

  // Get cycle phase for a specific date
  const getCyclePhase = (date: Date): 'work' | 'cooldown' | null => {
    for (const cycle of cycles) {
      const startDate = new Date(cycle.startDate)
      const endDate = new Date(cycle.endDate)
      const cooldownStart = new Date(cycle.cooldownStart)
      const cooldownEnd = new Date(cycle.cooldownEnd)

      // Set times to midnight for comparison
      startDate.setHours(0, 0, 0, 0)
      endDate.setHours(23, 59, 59, 999)
      cooldownStart.setHours(0, 0, 0, 0)
      cooldownEnd.setHours(23, 59, 59, 999)

      const checkDate = new Date(date)
      checkDate.setHours(12, 0, 0, 0)

      if (checkDate >= startDate && checkDate <= endDate) {
        return 'work'
      }
      if (checkDate >= cooldownStart && checkDate <= cooldownEnd) {
        return 'cooldown'
      }
    }
    return null
  }

  // Get events for a specific date
  const getEventsForDate = (date: Date): Event[] => {
    const dateStr = date.toISOString().split('T')[0]
    return events.filter((event) => {
      const eventDate = event.startDate.split('T')[0]
      if (filterTypes.length > 0 && !filterTypes.includes(event.type)) {
        return false
      }
      return eventDate === dateStr
    })
  }

  // Navigation
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const goToToday = () => {
    setCurrentDate(new Date())
  }

  // Toggle filter
  const toggleFilter = (type: EventType) => {
    setFilterTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    )
  }

  // Selected event
  const selectedEvent = selectedEventId ? events.find((e) => e.id === selectedEventId) : null

  // Generate calendar days
  const calendarDays = useMemo(() => {
    const days: { date: Date; isCurrentMonth: boolean }[] = []

    // Previous month days
    const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0)
    for (let i = startOffset - 1; i >= 0; i--) {
      days.push({
        date: new Date(prevMonth.getFullYear(), prevMonth.getMonth(), prevMonth.getDate() - i),
        isCurrentMonth: false,
      })
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: new Date(currentDate.getFullYear(), currentDate.getMonth(), i),
        isCurrentMonth: true,
      })
    }

    // Next month days (fill to complete the grid - 6 rows)
    const remaining = 42 - days.length
    for (let i = 1; i <= remaining; i++) {
      days.push({
        date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, i),
        isCurrentMonth: false,
      })
    }

    return days
  }, [currentDate, daysInMonth, startOffset])

  // Check if a date is today
  const isToday = (date: Date) => {
    const today = new Date()
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    )
  }

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-800 dark:text-stone-100">
              Calendrier
            </h1>
            <p className="text-stone-500 dark:text-stone-400 mt-1">
              Cycles, réunions et événements du Lab
            </p>
          </div>

          <button
            onClick={onCreateEvent}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#5B5781] hover:bg-[#4a4670] text-white rounded-lg font-medium transition-colors shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Nouvel événement
          </button>
        </div>

        {/* Calendar navigation */}
        <div className="bg-white dark:bg-stone-800/50 rounded-xl border border-stone-200 dark:border-stone-700 overflow-hidden">
          {/* Month navigation */}
          <div className="flex items-center justify-between p-4 border-b border-stone-200 dark:border-stone-700">
            <div className="flex items-center gap-2">
              <button
                onClick={goToPreviousMonth}
                className="p-2 rounded-lg text-stone-500 hover:text-stone-700 hover:bg-stone-100 dark:text-stone-400 dark:hover:text-stone-200 dark:hover:bg-stone-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNextMonth}
                className="p-2 rounded-lg text-stone-500 hover:text-stone-700 hover:bg-stone-100 dark:text-stone-400 dark:hover:text-stone-200 dark:hover:bg-stone-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <h2 className="text-lg font-semibold text-stone-800 dark:text-stone-100 ml-2">
                {MONTHS_FR[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
            </div>

            <button
              onClick={goToToday}
              className="px-3 py-1.5 text-sm font-medium text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700 rounded-lg transition-colors"
            >
              Aujourd'hui
            </button>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 p-4 border-b border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/30">
            <span className="text-xs text-stone-500 dark:text-stone-400 self-center mr-2">Filtres:</span>
            {Object.entries(eventTypeConfig).map(([type, config]) => {
              const isActive = filterTypes.length === 0 || filterTypes.includes(type as EventType)
              return (
                <button
                  key={type}
                  onClick={() => toggleFilter(type as EventType)}
                  className={`
                    inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all
                    ${
                      isActive
                        ? `${config.bgColor} ${config.color}`
                        : 'bg-stone-200 dark:bg-stone-700 text-stone-400 dark:text-stone-500 opacity-50'
                    }
                  `}
                >
                  <span>{config.icon}</span>
                  <span className="hidden sm:inline">{config.label}</span>
                </button>
              )
            })}
            {filterTypes.length > 0 && (
              <button
                onClick={() => setFilterTypes([])}
                className="text-xs text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 underline ml-2"
              >
                Réinitialiser
              </button>
            )}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 px-4 py-2 border-b border-stone-200 dark:border-stone-700 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-[#c8bfd2]/40 dark:bg-[#5B5781]/30"></span>
              <span className="text-stone-500 dark:text-stone-400">Cycle travail</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-amber-200 dark:bg-amber-900/50"></span>
              <span className="text-stone-500 dark:text-stone-400">Cooldown</span>
            </div>
          </div>

          {/* Calendar grid */}
          <div className="p-4">
            {/* Day headers */}
            <div className="grid grid-cols-7 mb-2">
              {DAYS_FR.map((day) => (
                <div
                  key={day}
                  className="text-center text-xs font-medium text-stone-500 dark:text-stone-400 py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Days grid */}
            <div className="grid grid-cols-7 gap-px bg-stone-200 dark:bg-stone-700 rounded-lg overflow-hidden">
              {calendarDays.map(({ date, isCurrentMonth }, index) => {
                const dayEvents = getEventsForDate(date)
                const cyclePhase = getCyclePhase(date)
                const isTodayDate = isToday(date)

                // Determine background color based on cycle phase (higher priority) or month
                const getBgClass = () => {
                  if (cyclePhase === 'work') {
                    return 'bg-[#c8bfd2]/20 dark:bg-[#5B5781]/15'
                  }
                  if (cyclePhase === 'cooldown') {
                    return 'bg-amber-100 dark:bg-amber-900/30'
                  }
                  if (isCurrentMonth) {
                    return 'bg-white dark:bg-stone-800/50'
                  }
                  return 'bg-stone-50 dark:bg-stone-900/50'
                }

                return (
                  <div
                    key={index}
                    className={`min-h-[100px] p-1.5 transition-colors ${getBgClass()}`}
                  >
                    {/* Day number */}
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className={`
                          w-7 h-7 flex items-center justify-center text-sm rounded-full
                          ${isTodayDate ? 'bg-[#5B5781] text-white font-bold' : ''}
                          ${!isTodayDate && isCurrentMonth ? 'text-stone-700 dark:text-stone-300' : ''}
                          ${!isTodayDate && !isCurrentMonth ? 'text-stone-400 dark:text-stone-600' : ''}
                        `}
                      >
                        {date.getDate()}
                      </span>
                    </div>

                    {/* Events */}
                    <div className="space-y-0.5">
                      {dayEvents.slice(0, 3).map((event) => {
                        const config = eventTypeConfig[event.type]
                        return (
                          <button
                            key={event.id}
                            onClick={() => setSelectedEventId(event.id)}
                            className={`
                              w-full text-left px-1.5 py-0.5 rounded text-[10px] font-medium truncate transition-opacity hover:opacity-80
                              ${config.bgColor} ${config.color}
                            `}
                            title={event.title}
                          >
                            <span className="mr-0.5">{config.icon}</span>
                            <span className="hidden lg:inline">{event.title}</span>
                          </button>
                        )
                      })}
                      {dayEvents.length > 3 && (
                        <p className="text-[10px] text-stone-400 dark:text-stone-500 px-1">
                          +{dayEvents.length - 3} autres
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Event detail modal */}
        {selectedEvent && (
          <EventDetailModal
            event={selectedEvent}
            members={members}
            onClose={() => setSelectedEventId(null)}
            onEdit={() => {
              onEditEvent?.(selectedEvent.id)
              setSelectedEventId(null)
            }}
            onDelete={() => {
              onDeleteEvent?.(selectedEvent.id)
              setSelectedEventId(null)
            }}
          />
        )}
      </div>
    </div>
  )
}

// =============================================================================
// Event Detail Modal
// =============================================================================

interface EventDetailModalProps {
  event: Event
  members: Member[]
  onClose: () => void
  onEdit?: () => void
  onDelete?: () => void
}

function EventDetailModal({ event, members, onClose, onEdit, onDelete }: EventDetailModalProps) {
  const config = eventTypeConfig[event.type]
  const attendees = event.attendeeIds
    .map((id) => members.find((m) => m.id === id))
    .filter(Boolean) as Member[]

  const startDate = new Date(event.startDate)
  const endDate = new Date(event.endDate)

  const formatTime = (date: Date) =>
    date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })

  const formatDate = (date: Date) =>
    date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })

  // Check if multi-day event
  const isMultiDay = startDate.toDateString() !== endDate.toDateString()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white dark:bg-stone-800 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden">
        {/* Header with colored banner */}
        <div className={`px-6 py-4 ${config.bgColor}`}>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{config.icon}</span>
              <div>
                <span className={`text-xs font-medium uppercase tracking-wide ${config.color}`}>
                  {config.label}
                </span>
                <h2 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mt-0.5">
                  {event.title}
                </h2>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-500 hover:text-stone-700 hover:bg-black/10 dark:text-stone-400 dark:hover:text-stone-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Date & Time */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-700 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-stone-500 dark:text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-stone-800 dark:text-stone-100 capitalize">
                {formatDate(startDate)}
              </p>
              <p className="text-sm text-stone-500 dark:text-stone-400">
                {isMultiDay ? (
                  <>
                    {formatTime(startDate)} → {formatDate(endDate)} {formatTime(endDate)}
                  </>
                ) : (
                  <>
                    {formatTime(startDate)} - {formatTime(endDate)}
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-700 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-stone-500 dark:text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-stone-800 dark:text-stone-100">{event.location}</p>
            </div>
          </div>

          {/* Description */}
          {event.description && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-700 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-stone-500 dark:text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              <p className="text-stone-600 dark:text-stone-300 text-sm">{event.description}</p>
            </div>
          )}

          {/* Attendees */}
          {attendees.length > 0 && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-700 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-stone-500 dark:text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-stone-500 dark:text-stone-400 mb-2">
                  {attendees.length} participant{attendees.length > 1 ? 's' : ''}
                </p>
                <div className="flex flex-wrap gap-2">
                  {attendees.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center gap-2 px-2 py-1 bg-stone-100 dark:bg-stone-700 rounded-full"
                    >
                      <img
                        src={member.avatar}
                        alt={`${member.firstName} ${member.lastName}`}
                        className="w-5 h-5 rounded-full bg-stone-200"
                      />
                      <span className="text-xs text-stone-600 dark:text-stone-300">
                        {member.firstName}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="px-6 py-4 bg-stone-50 dark:bg-stone-800/50 border-t border-stone-200 dark:border-stone-700 flex items-center justify-end gap-2">
          {onDelete && (
            <button
              onClick={onDelete}
              className="px-3 py-1.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
            >
              Supprimer
            </button>
          )}
          {onEdit && (
            <button
              onClick={onEdit}
              className="px-4 py-1.5 text-sm bg-[#5B5781] hover:bg-[#4a4670] text-white rounded-lg font-medium transition-colors"
            >
              Modifier
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
