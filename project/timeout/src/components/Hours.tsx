import React from "react"

const HOURS: Array<{ day: string; time: string }> = [
  { day: "Mon", time: "11:00 AM – 12:00 AM" },
  { day: "Tue", time: "11:00 AM – 12:00 AM" },
  { day: "Wed", time: "11:00 AM – 12:00 AM" },
  { day: "Thu", time: "11:00 AM – 12:00 AM" },
  { day: "Fri", time: "11:00 AM – 2:00 AM" },
  { day: "Sat", time: "11:00 AM – 2:00 AM" },
  { day: "Sun", time: "12:00 PM – 12:00 AM" }
]

export default function Hours() {
  return (
    <div className="card overflow-hidden">
      <table className="w-full text-sm">
        <tbody>
          {HOURS.map(({ day, time }) => (
            <tr key={day} className="border-b border-base-border/60 last:border-none">
              <td className="px-4 py-3 w-24 text-base-muted">{day}</td>
              <td className="px-4 py-3">{time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="px-4 pb-4 text-xs text-base-muted">Call to confirm on holidays.</p>
    </div>
  )
}
