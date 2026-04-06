import type { FunctionComponent } from "react"
import type { PokemonListItem } from "../models"
import { idFromUrl } from "../utils"
import type { VirtualItem } from "@tanstack/react-virtual"

interface PokemonRowProps {
  /** The pokemon that is shown in the row. */
  pokemon: PokemonListItem
  /** metadata used to position the in the scrolling list. */
  virtualItem: VirtualItem
}

export const PokemonRow: FunctionComponent<PokemonRowProps> = ({
  pokemon,
  virtualItem,
}) => {
  const id = idFromUrl(pokemon.url)

  return (
    <div
      style={{
        height: `${virtualItem.size}px`,
        transform: `translateY(${virtualItem.start}px)`,
      }}
      className="absolute top-0 left-0 w-full flex items-center px-4 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer"
    >
      <span className="w-16 text-xs font-medium text-gray-400">
        #{String(id).padStart(4, "0")}
      </span>
      <span className="flex-1 text-sm font-medium capitalize">
        {pokemon.name.replace(/-/g, " ")}
      </span>
    </div>
  )
}
