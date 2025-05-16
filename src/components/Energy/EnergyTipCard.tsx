import React from 'react';
import { Home, Briefcase, Car } from 'lucide-react';
import { EnergyTip } from '../../types';

interface EnergyTipCardProps {
  tip: EnergyTip;
}

const EnergyTipCard: React.FC<EnergyTipCardProps> = ({ tip }) => {
  // Determine impact color
  const getImpactColor = (impact: 'low' | 'medium' | 'high') => {
    switch (impact) {
      case 'low': return 'bg-blue-100 text-blue-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Determine category icon
  const getCategoryIcon = (category: 'home' | 'work' | 'travel') => {
    switch (category) {
      case 'home': return <Home className="h-4 w-4" />;
      case 'work': return <Briefcase className="h-4 w-4" />;
      case 'travel': return <Car className="h-4 w-4" />;
      default: return <Home className="h-4 w-4" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img 
          src={tip.imageUrl} 
          alt={tip.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-800">{tip.title}</h3>
          <span className={`${getImpactColor(tip.impact)} text-xs font-medium px-2.5 py-0.5 rounded-full`}>
            {tip.impact.charAt(0).toUpperCase() + tip.impact.slice(1)} Impact
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 text-sm">{tip.description}</p>
        
        <div className="flex items-center text-gray-600 text-sm">
          <div className="bg-gray-100 p-1 rounded-full mr-2">
            {getCategoryIcon(tip.category)}
          </div>
          <span className="capitalize">{tip.category}</span>
        </div>
        
        <button className="mt-4 w-full bg-green-100 hover:bg-green-200 text-green-800 font-medium py-2 px-4 rounded transition-colors duration-300 text-sm">
          View Details
        </button>
      </div>
    </div>
  );
};

export default EnergyTipCard;