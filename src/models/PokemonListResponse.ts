import type { PokemonListItem } from "./PokemonListItem"

export interface PokemonListResponse {
  count: number
  results: PokemonListItem[]
}
