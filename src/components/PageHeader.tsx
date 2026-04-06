import type { FunctionComponent } from "react"

interface PageHeaderProps {
  /** The total number of pokemon listed. */
  totalPokemonCount?: string
}

export const PageHeader: FunctionComponent<PageHeaderProps> = ({
  totalPokemonCount,
}) => {
  return (
    <div className="px-4 pt-4 pb-3 border-b border-gray-100">
      <h1 className="text-2xl font-semibold tracking-tight mb-1">Pokédex</h1>
      <p className="text-xs text-gray-400">{totalPokemonCount ?? 0} Pokémon</p>
    </div>
  )
}
