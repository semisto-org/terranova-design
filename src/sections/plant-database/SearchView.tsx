import { useState, useMemo } from 'react'
import data from '@/../product/sections/plant-database/data.json'
import type { SearchFilters, SearchResult, StrateKey, FilterOptions } from '@/../product/sections/plant-database/types'
import { SearchView } from './components/SearchView'

export default function SearchViewPreview() {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    types: [],
    exposures: [],
    hardinessZones: [],
    edibleParts: [],
    interests: [],
    nativeCountries: [],
    soilTypes: [],
    soilMoisture: [],
    wateringNeed: [],
  })

  // Track items added to palette
  const [paletteItemIds, setPaletteItemIds] = useState<string[]>([])

  // Build search results from data
  const results = useMemo<SearchResult[]>(() => {
    const allResults: SearchResult[] = []
    const query = filters.query.toLowerCase()

    // Helper to get common name
    const getCommonName = (targetId: string, targetType: 'genus' | 'species' | 'variety'): string | null => {
      const commonName = data.commonNames.find(
        (cn) => cn.targetId === targetId && cn.targetType === targetType && cn.language === 'fr'
      )
      return commonName?.name ?? null
    }

    // Add genera
    for (const genus of data.genera) {
      const commonName = getCommonName(genus.id, 'genus')
      const matchesQuery =
        !query ||
        genus.latinName.toLowerCase().includes(query) ||
        (commonName?.toLowerCase().includes(query) ?? false)

      if (matchesQuery && filters.types.length === 0) {
        allResults.push({
          id: genus.id,
          type: 'genus',
          latinName: genus.latinName,
          commonName,
        })
      }
    }

    // Add species
    for (const species of data.species) {
      const commonName = getCommonName(species.id, 'species')
      const matchesQuery =
        !query ||
        species.latinName.toLowerCase().includes(query) ||
        (commonName?.toLowerCase().includes(query) ?? false)

      // Check type filter
      const matchesType = filters.types.length === 0 || filters.types.includes(species.type)

      // Check exposure filter
      const matchesExposure =
        filters.exposures.length === 0 ||
        species.exposures.some((e) => filters.exposures.includes(e))

      // Check edible parts filter
      const matchesEdibleParts =
        filters.edibleParts.length === 0 ||
        species.edibleParts.some((p) => filters.edibleParts.includes(p))

      // Check interests filter
      const matchesInterests =
        filters.interests.length === 0 ||
        species.interests.some((i) => filters.interests.includes(i))

      // Check native countries filter
      const matchesNativeCountries =
        filters.nativeCountries.length === 0 ||
        species.nativeCountries.some((c) => filters.nativeCountries.includes(c))

      // Check soil types filter
      const matchesSoilTypes =
        filters.soilTypes.length === 0 ||
        species.soilTypes.some((s) => filters.soilTypes.includes(s))

      // Check soil moisture filter
      const matchesSoilMoisture =
        filters.soilMoisture.length === 0 ||
        filters.soilMoisture.includes(species.soilMoisture)

      // Check watering need filter
      const matchesWateringNeed =
        filters.wateringNeed.length === 0 ||
        filters.wateringNeed.includes(species.wateringNeed)

      if (
        matchesQuery &&
        matchesType &&
        matchesExposure &&
        matchesEdibleParts &&
        matchesInterests &&
        matchesNativeCountries &&
        matchesSoilTypes &&
        matchesSoilMoisture &&
        matchesWateringNeed
      ) {
        allResults.push({
          id: species.id,
          type: 'species',
          latinName: species.latinName,
          commonName,
        })
      }
    }

    // Add varieties
    for (const variety of data.varieties) {
      const commonName = getCommonName(variety.id, 'variety')
      const parentSpecies = data.species.find((s) => s.id === variety.speciesId)

      const matchesQuery =
        !query ||
        variety.latinName.toLowerCase().includes(query) ||
        (commonName?.toLowerCase().includes(query) ?? false)

      // Check filters based on parent species
      const matchesType =
        filters.types.length === 0 ||
        (parentSpecies && filters.types.includes(parentSpecies.type))

      const matchesExposure =
        filters.exposures.length === 0 ||
        (parentSpecies && parentSpecies.exposures.some((e) => filters.exposures.includes(e)))

      const matchesEdibleParts =
        filters.edibleParts.length === 0 ||
        (parentSpecies && parentSpecies.edibleParts.some((p) => filters.edibleParts.includes(p)))

      const matchesInterests =
        filters.interests.length === 0 ||
        (parentSpecies && parentSpecies.interests.some((i) => filters.interests.includes(i)))

      const matchesNativeCountries =
        filters.nativeCountries.length === 0 ||
        (parentSpecies && parentSpecies.nativeCountries.some((c) => filters.nativeCountries.includes(c)))

      const matchesSoilTypes =
        filters.soilTypes.length === 0 ||
        (parentSpecies && parentSpecies.soilTypes.some((s) => filters.soilTypes.includes(s)))

      const matchesSoilMoisture =
        filters.soilMoisture.length === 0 ||
        (parentSpecies && filters.soilMoisture.includes(parentSpecies.soilMoisture))

      const matchesWateringNeed =
        filters.wateringNeed.length === 0 ||
        (parentSpecies && filters.wateringNeed.includes(parentSpecies.wateringNeed))

      if (
        matchesQuery &&
        matchesType &&
        matchesExposure &&
        matchesEdibleParts &&
        matchesInterests &&
        matchesNativeCountries &&
        matchesSoilTypes &&
        matchesSoilMoisture &&
        matchesWateringNeed
      ) {
        allResults.push({
          id: variety.id,
          type: 'variety',
          latinName: variety.latinName,
          commonName,
        })
      }
    }

    return allResults
  }, [filters])

  const handleSearchChange = (query: string) => {
    setFilters((prev) => ({ ...prev, query }))
  }

  const handleFiltersChange = (newFilters: SearchFilters) => {
    setFilters(newFilters)
  }

  const handleResultSelect = (id: string, type: 'genus' | 'species' | 'variety') => {
    console.log('Selected:', { id, type })
  }

  const handleAddToPalette = (id: string, type: 'species' | 'variety', strate: StrateKey) => {
    console.log('Add to palette:', { id, type, strate })
    // Add to palette if not already there
    if (!paletteItemIds.includes(id)) {
      setPaletteItemIds((prev) => [...prev, id])
    }
  }

  return (
    <SearchView
      filterOptions={data.filterOptions as FilterOptions}
      results={results}
      filters={filters}
      paletteItemIds={paletteItemIds}
      onSearchChange={handleSearchChange}
      onFiltersChange={handleFiltersChange}
      onResultSelect={handleResultSelect}
      onAddToPalette={handleAddToPalette}
    />
  )
}
