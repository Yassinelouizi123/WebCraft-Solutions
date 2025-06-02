"use client"

import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export type CalendarProps = {
  className?: string
  classNames?: {
    months?: string
    month?: string
    caption?: string
    caption_label?: string
    nav?: string
    nav_button?: string
    nav_button_previous?: string
    nav_button_next?: string
    table?: string
    head_row?: string
    head_cell?: string
    row?: string
    cell?: string
    day?: string
    day_range_end?: string
    day_selected?: string
    day_today?: string
    day_outside?: string
    day_disabled?: string
    day_range_middle?: string
    day_hidden?: string
  }
  showOutsideDays?: boolean
  mode?: "single" | "multiple" | "range"
  selected?: Date | Date[] | { from?: Date; to?: Date }
  onSelect?: (date: Date | undefined) => void
  initialFocus?: boolean
}

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  mode = "single",
  selected,
  onSelect,
  ...props
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(new Date())

  const today = new Date()
  const year = currentMonth.getFullYear()
  const month = currentMonth.getMonth()

  const firstDayOfMonth = new Date(year, month, 1)
  const lastDayOfMonth = new Date(year, month + 1, 0)
  const firstDayOfWeek = firstDayOfMonth.getDay()
  const daysInMonth = lastDayOfMonth.getDate()

  const previousMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1))
  }

  const isSelected = (date: Date) => {
    if (!selected) return false
    if (selected instanceof Date) {
      return date.toDateString() === selected.toDateString()
    }
    return false
  }

  const isToday = (date: Date) => {
    return date.toDateString() === today.toDateString()
  }

  const handleDateClick = (date: Date) => {
    if (onSelect) {
      onSelect(date)
    }
  }

  const days = []

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push(<div key={`empty-${i}`} className="h-9 w-9" />)
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day)
    days.push(
      <Button
        key={day}
        variant="ghost"
        className={cn(
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
          isSelected(date) &&
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
          isToday(date) && "bg-accent text-accent-foreground",
          "hover:bg-accent hover:text-accent-foreground",
        )}
        onClick={() => handleDateClick(date)}
      >
        {day}
      </Button>,
    )
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  return (
    <div className={cn("p-3", className)} {...props}>
      <div className="flex items-center justify-between mb-4">
        <Button variant="outline" size="icon" className="h-7 w-7" onClick={previousMonth}>
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <div className="text-sm font-medium">
          {monthNames[month]} {year}
        </div>
        <Button variant="outline" size="icon" className="h-7 w-7" onClick={nextMonth}>
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <div
            key={day}
            className="h-9 w-9 text-center text-sm font-medium text-muted-foreground flex items-center justify-center"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">{days}</div>
    </div>
  )
}
