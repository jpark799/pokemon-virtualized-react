import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { usePokemonDetail } from "../api"
import { PokemonModal } from "../components/PokemonModal"

vi.mock("../api", () => ({
  usePokemonDetail: vi.fn(),
}))

const mockedUsePokemonDetail = vi.mocked(usePokemonDetail)

describe("PokemonModal", () => {
  it("renders dialog content and focuses the close button", async () => {
    mockedUsePokemonDetail.mockReturnValue({
      data: {
        id: 1,
        name: "bulbasaur",
        sprites: {
          front_default: "bulbasaur.png",
          other: {
            "official-artwork": { front_default: "bulbasaur-art.png" },
          },
        },
        types: [{ slot: 1, type: { name: "grass" } }],
        height: 7,
        weight: 69,
        abilities: [{ ability: { name: "overgrow" }, is_hidden: false }],
        stats: [{ base_stat: 45, stat: { name: "speed" } }],
      },
      isLoading: false,
    } as ReturnType<typeof usePokemonDetail>)

    render(<PokemonModal name="bulbasaur" onClose={vi.fn()} />)

    const dialog = screen.getByRole("dialog")
    const closeButton = screen.getByRole("button", { name: "Close" })

    expect(dialog.getAttribute("aria-modal")).toBe("true")
    expect(screen.getByText("Bulbasaur")).toBeTruthy()
    expect(document.activeElement).toBe(closeButton)
  })

  it("closes when Escape is pressed", async () => {
    const onClose = vi.fn()

    mockedUsePokemonDetail.mockReturnValue({
      data: {
        id: 25,
        name: "pikachu",
        sprites: {
          front_default: "pikachu.png",
          other: {
            "official-artwork": { front_default: "pikachu-art.png" },
          },
        },
        types: [{ slot: 1, type: { name: "electric" } }],
        height: 4,
        weight: 60,
        abilities: [{ ability: { name: "static" }, is_hidden: false }],
        stats: [{ base_stat: 55, stat: { name: "speed" } }],
      },
      isLoading: false,
    } as ReturnType<typeof usePokemonDetail>)

    render(<PokemonModal name="pikachu" onClose={onClose} />)

    fireEvent.keyDown(screen.getByRole("dialog"), { key: "Escape" })

    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
