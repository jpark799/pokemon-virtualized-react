import type { FunctionComponent } from "react"
import { usePokemonDetail } from "../api"

interface PokemonModalProps {
  /** The callback that closes the modal */
  onClose: () => void
  /** The name of the Pokemon.*/
  name: string
}

export const PokemonModal: FunctionComponent<PokemonModalProps> = ({
  onClose,
  name,
}) => {
  const { data, isLoading } = usePokemonDetail(name)

  const artwork =
    data?.sprites.other["official-artwork"].front_default ??
    data?.sprites.front_default ??
    null

  return (
    <div
      className="fixed inset-0 bg-black/55 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 w-full max-w-sm p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold capitalize">
            {name.replace(/-/g, " ")}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer bg-transparent border-none text-xl leading-none"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {isLoading ? (
          <p className="text-sm text-gray-400">Loading...</p>
        ) : (
          <div className="flex flex-col items-center gap-3">
            {artwork && (
              <img
                src={artwork}
                alt={name}
                className="w-36 h-36 object-contain"
              />
            )}
            <div className="flex gap-1.5">
              {data?.types.map((type) => (
                <span
                  key={type.slot}
                  className="px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wide bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                >
                  {type.type.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
