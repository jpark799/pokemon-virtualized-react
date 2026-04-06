import type { PokemonDetail } from "../models"

export async function getPokemonDetail(name: string): Promise<PokemonDetail> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  return res.json()
}
