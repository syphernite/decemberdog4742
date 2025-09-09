import { motion } from 'framer-motion'
import React from 'react';
import { MapPin } from 'lucide-react';

export const MapEmbed: React.FC = () => {
  return (
    <div className="bg-bone rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
        <MapPin size={24} />
        Service Area
      </h3>
      
      {/* Placeholder for map - would be replaced with actual map integration */}
      <div className="aspect-video bg-charcoal rounded-lg flex items-center justify-center mb-4">
        <div className="text-center text-bone">
          <MapPin size={48} className="mx-auto mb-2" />
          <p className="text-sm">Interactive Service Area Map</p>
          <p className="text-xs">Within 25 miles of Metropolitan Area</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-bone">
        <span>• Downtown</span>
        <span>• Midtown</span>
        <span>• Uptown</span>
        <span>• East Side</span>
        <span>• West End</span>
        <span>• Northgate</span>
        <span>• Southside</span>
        <span>• Riverside</span>
      </div>
      
      <p className="text-xs text-bone mt-3">
        $10 house call fee applies. Travel fee may apply outside service radius.
      </p>
    </div>
  );
};