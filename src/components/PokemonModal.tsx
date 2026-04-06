import type { FunctionComponent } from "react"

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
        <p className="text-sm text-gray-400">Details coming soon...</p>
      </div>
    </div>
  )
}
