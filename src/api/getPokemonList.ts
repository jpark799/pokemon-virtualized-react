import type { PokemonListResponse } from "../models/"

export async function getPokemonList(): Promise<PokemonListResponse> {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0",
  )
  return res.json()
}
