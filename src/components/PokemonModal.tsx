import type { FunctionComponent } from "react"
import { usePokemonDetail } from "../api"
import { capitalizeString } from "../utils/capitalizeString"
import { StatBar } from "./StatBar"
import { TypeBadge } from "./TypeBadge"
import { TypeBackgroundColorHex } from "../models"

interface PokemonModalProps {
  /** The name of the Pokemon.*/
  name: string
  /** The callback that closes the modal */
  onClose: () => void
}

export const PokemonModal: FunctionComponent<PokemonModalProps> = ({
  name,
  onClose,
}) => {
  const { data, isLoading } = usePokemonDetail(name)

  const artwork =
    data?.sprites.other["official-artwork"].front_default ??
    data?.sprites.front_default ??
    null

  const primaryType = data?.types[0]?.type.name ?? "normal"
  const headerHex =
    TypeBackgroundColorHex[primaryType] ?? TypeBackgroundColorHex.normal

  return (
    <div
      className="fixed inset-0 bg-black/55 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 w-full max-w-sm max-h-[90vh] overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="rounded-t-2xl border-b border-gray-200 dark:border-gray-700 px-6 pt-6 pb-4 flex flex-col items-center relative"
          style={{ backgroundColor: headerHex + "22" }}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-xl leading-none p-1 cursor-pointer bg-transparent border-none"
            aria-label="Close"
          >
            ✕
          </button>

          {isLoading ? (
            <div className="w-32 h-32 rounded-full bg-gray-100 dark:bg-gray-800 mb-3 flex items-center justify-center text-sm text-gray-400">
              ...
            </div>
          ) : artwork ? (
            <img
              src={artwork}
              alt={name}
              className="w-36 h-36 object-contain mb-2"
            />
          ) : null}

          {data && (
            <>
              <span className="text-xs font-medium text-gray-400 tracking-widest mb-0.5">
                #{String(data.id).padStart(4, "0")}
              </span>
              <h2 className="text-2xl font-semibold mb-2 capitalize tracking-tight">
                {capitalizeString(data.name)}
              </h2>
              <div className="flex gap-1.5">
                {data.types.map((t) => (
                  <TypeBadge key={t.slot} type={t.type.name} />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Body */}
        {isLoading ? (
          <div className="flex-1 flex items-center justify-center text-sm text-gray-400 py-10">
            Loading...
          </div>
        ) : data ? (
          <div className="px-6 py-5">
            {/* Quick facts */}
            <div className="grid grid-cols-3 gap-2.5 mb-5">
              {[
                {
                  label: "Height",
                  value: `${(data.height / 10).toFixed(1)} m`,
                },
                {
                  label: "Weight",
                  value: `${(data.weight / 10).toFixed(1)} kg`,
                },
                {
                  label: "Ability",
                  value: capitalizeString(
                    data.abilities.find((a) => !a.is_hidden)?.ability.name ??
                      "—",
                  ),
                },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl px-3 py-2.5 flex flex-col gap-0.5"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                    {label}
                  </span>
                  <span className="text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2.5">
              Base stats
            </p>
            {data.stats.map((s) => (
              <StatBar
                key={s.stat.name}
                label={s.stat.name}
                value={s.base_stat}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}
