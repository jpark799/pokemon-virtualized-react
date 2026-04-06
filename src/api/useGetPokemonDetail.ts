import { useQuery } from "@tanstack/react-query"
import type { PokemonDetail } from "../models"
import { getPokemonDetail } from "./getPokemonDetail"

export function usePokemonDetail(name: string) {
  return useQuery<PokemonDetail>({
    queryKey: ["pokemon-detail", name],
    queryFn: () => getPokemonDetail(name),
    enabled: name !== "",
    staleTime: Infinity,
  })
}
