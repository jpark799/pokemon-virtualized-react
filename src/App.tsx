import { useGetPokemonList } from "./api/useGetPokemonList"

export default function App() {
  const { data, isLoading, isError } = useGetPokemonList()

  if (isLoading) return <p className="p-4">Loading...</p>
  if (isError) return <p className="p-4 text-red-400">Something went wrong.</p>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-3">Pokédex</h1>
      <ul>
        {data?.results.map((p) => (
          <li key={p.name} className="py-1 text-sm capitalize">
            {p.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
