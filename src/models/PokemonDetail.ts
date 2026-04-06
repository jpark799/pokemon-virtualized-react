export interface PokemonDetail {
  id: number
  name: string
  sprites: {
    front_default: string | null
    other: {
      "official-artwork": { front_default: string | null }
    }
  }
  types: { slot: number; type: { name: string } }[]
  height: number
  weight: number
  abilities: { ability: { name: string }; is_hidden: boolean }[]
  stats: { base_stat: number; stat: { name: string } }[]
}
