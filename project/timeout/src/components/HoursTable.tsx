import React from 'react'
import { Clock } from 'lucide-react'
import { businessConfig } from '../config/business'

export default function HoursTable() {
  return (
    <div className="card p-6">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-brand-primary" />
        <h2 className="text-xl font-semibold text-white">Hours</h2>
      </div>
      <table className="w-full text-sm">
        <tbody>
          {Object.entries(businessConfig.hours).map(([day, hours]) => (
            <tr key={day} className="border-b border-white/10 last:border-none">
              <td className="py-2 pr-4 text-white/90 font-medium">{day}</td>
              <td className="py-2 text-white/70">{hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-3 text-xs text-white/50">Call to confirm on holidays.</p>
    </div>
  )
}
