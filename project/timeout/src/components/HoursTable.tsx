import React from 'react';
import { Clock } from 'lucide-react';
import { businessConfig } from '../config/business';

export default function HoursTable() {
  return (
    <div className="bg-slate-850 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center mb-4">
        <Clock className="w-6 h-6 text-amber-500 mr-2" />
        <h3 className="text-xl font-bold text-white">Hours</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <tbody className="space-y-1">
            {Object.entries(businessConfig.hours).map(([day, hours]) => (
              <tr key={day} className="border-b border-gray-700 last:border-b-0">
                <td className="py-2 pr-4 text-white font-medium">{day}</td>
                <td className="py-2 text-gray-300">{hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <p className="text-gray-400 text-sm mt-4">
        * Call to confirm on holidays
      </p>
    </div>
  );
}