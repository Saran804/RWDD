import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { RecyclingProgram } from '../../types';

interface RecyclingCardProps {
  program: RecyclingProgram;
}

const RecyclingCard: React.FC<RecyclingCardProps> = ({ program }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img 
          src={program.imageUrl} 
          alt={program.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{program.title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{program.description}</p>
        
        <div className="flex items-center text-gray-500 mb-2 text-sm">
          <Calendar className="h-4 w-4 mr-2 text-green-600" />
          <span>{program.schedule}</span>
        </div>
        
        <div className="flex items-center text-gray-500 text-sm">
          <MapPin className="h-4 w-4 mr-2 text-green-600" />
          <span>{program.location}</span>
        </div>
        
        <button className="mt-4 w-full bg-green-100 hover:bg-green-200 text-green-800 font-medium py-2 px-4 rounded transition-colors duration-300 text-sm">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default RecyclingCard;