import type { FunctionComponent } from "react"
import { TypeColors } from "../models"

interface TypeBadgeProps {
  /** The pokemon type */
  type: string
}

export const TypeBadge: FunctionComponent<TypeBadgeProps> = ({ type }) => {
  const typeColorClass = TypeColors[type] ?? TypeColors.unknown
  return (
    <span
      className={`${typeColorClass} rounded px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide`}
    >
      {type}
    </span>
  )
}
