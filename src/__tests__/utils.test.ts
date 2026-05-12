import { describe, expect, it } from "vitest"
import { capitalizeString } from "../utils/capitalizeString"
import { idFromUrl } from "../utils/idFromUrl"

describe("utils", () => {
  it("capitalizes the first letter and replaces dashes with spaces", async () => {
    expect(capitalizeString("mr-mime")).toBe("Mr mime")
  })

  it("extracts a Pokemon id from a PokeAPI url", async () => {
    expect(idFromUrl("https://pokeapi.co/api/v2/pokemon/25/")).toBe(25)
  })
})
