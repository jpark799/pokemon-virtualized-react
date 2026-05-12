import { fireEvent, render, screen } from "@testing-library/react"
import type { VirtualItem } from "@tanstack/react-virtual"
import { describe, expect, it, vi } from "vitest"
import { PokemonRow } from "../components/PokemonRow"

describe("PokemonRow", () => {
  it("renders a semantic button and handles clicks", async () => {
    const onClick = vi.fn()
    const virtualItem = {
      key: "row-0",
      size: 64,
      start: 0,
    } as VirtualItem

    render(
      <PokemonRow
        onClick={onClick}
        pokemon={{
          name: "mr-mime",
          url: "https://pokeapi.co/api/v2/pokemon/122/",
        }}
        virtualItem={virtualItem}
      />,
    )

    const button = screen.getByRole("button", {
      name: "View mr mime details",
    })

    expect(button).toBeTruthy()
    expect(screen.getByText("#0122")).toBeTruthy()
    expect(screen.getByText("mr mime")).toBeTruthy()

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
