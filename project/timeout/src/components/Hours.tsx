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
    <div className="card p-6">
      <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        Hours
      </h2>
      <table className="w-full text-sm">
        <tbody>
          {HOURS.map(({ day, time }) => (
            <tr key={day} className="border-b border-white/10 last:border-none">
              <td className="px-3 py-2 text-white/90 font-medium">{day}</td>
              <td className="px-3 py-2 text-white/70">{time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-3 text-xs text-white/50">Call to confirm on holidays.</p>
    </div>
  )
}
