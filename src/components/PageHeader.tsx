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
      <h1 className="text-2xl font-semibold tracking-tight mb-1">
        Pokédex Virtualized
      </h1>
      <div className="flex justify-between">
        <p className="text-xs text-gray-400">
          {totalPokemonCount ?? 0} Pokémon
        </p>
        <p className="text-xs text-gray-400">
          made with ❤️ by
          <a
            href="https://www.linkedin.com/in/jpark799/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline"
          >
            Jason Park
          </a>
        </p>
      </div>
    </div>
  )
}
