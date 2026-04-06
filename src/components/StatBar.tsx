import type { FunctionComponent } from "react"
import { StatsLabels } from "../models/StatsLabels"

interface StatBarProps {
  /** The stat that is displayed */
  label: string
  /** The stat's value */
  value: number
}

export const StatBar: FunctionComponent<StatBarProps> = ({ label, value }) => {
  const percent = Math.round((value / 255) * 100)
  const barColor =
    value >= 120
      ? "bg-green-500"
      : value >= 70
        ? "bg-blue-500"
        : value >= 40
          ? "bg-orange-400"
          : "bg-red-500"

  return (
    <div className="flex items-center gap-2 mb-1.5">
      <span className="w-14 text-[11px] font-semibold text-gray-400 uppercase tracking-wide shrink-0">
        {StatsLabels[label] ?? label}
      </span>
      <span className="w-8 text-xs font-semibold text-right shrink-0">
        {value}
      </span>
      <div className="flex-1 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${barColor}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
