import { useCallback, useRef, useState } from "react"
import { useGetPokemonList } from "./api/useGetPokemonList"
import { useVirtualizer } from "@tanstack/react-virtual"
import {
  PageHeader,
  PokemonModal,
  PokemonRow,
  PokemonTableHeader,
} from "./components"

export default function App() {
  const { data, isLoading, isError } = useGetPokemonList()
  const parentRef = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState<string | null>(null)

  const virtualizer = useVirtualizer({
    count: data?.results.length ?? 0,
    getScrollElement: () => parentRef.current,
    estimateSize: useCallback(() => 64, []),
    overscan: 10,
  })

  if (isLoading) return <p className="p-4">Loading...</p>
  if (isError) return <p className="p-4 text-red-400">Something went wrong.</p>

  return (
    <div className="flex flex-col h-screen max-w-sm mx-auto">
      <PageHeader totalPokemonCount={data?.count.toLocaleString()} />

      <PokemonTableHeader />

      <div ref={parentRef} className="flex-1 overflow-y-auto relative">
        <div
          style={{ height: virtualizer.getTotalSize() }}
          className="w-full relative"
        >
          {virtualizer.getVirtualItems().map((virtualItem) => {
            const item = data?.results[virtualItem.index]
            return item ? (
              <PokemonRow
                key={virtualItem.key}
                onClick={() => setSelected(item.name)}
                pokemon={item}
                virtualItem={virtualItem}
              />
            ) : null
          })}
        </div>
      </div>
      {selected && (
        <PokemonModal name={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  )
}
