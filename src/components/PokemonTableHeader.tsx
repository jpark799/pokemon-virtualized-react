import type { FunctionComponent } from "react"

export const PokemonTableHeader: FunctionComponent = () => {
  return (
    <div className="flex items-center px-4 py-2 border-b border-gray-200 bg-gray-50">
      <span className="w-16 text-xs font-semibold text-gray-400 uppercase tracking-wider">
        #
      </span>
      <span className="flex-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
        Name
      </span>
    </div>
  )
}
