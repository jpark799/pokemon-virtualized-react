import { useQuery } from "@tanstack/react-query"
import { getPokemonList } from "./getPokemonList"

export function useGetPokemonList() {
  return useQuery({
    queryKey: ["pokemon-list"],
    queryFn: getPokemonList,
    staleTime: Infinity,
  })
}
