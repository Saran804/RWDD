import React from 'react';
import { Users, Calendar, MapPin } from 'lucide-react';
import { GardeningProject } from '../../types';

interface GardeningProjectCardProps {
  project: GardeningProject;
}

const GardeningProjectCard: React.FC<GardeningProjectCardProps> = ({ project }) => {
  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Calculate availability percentage
  const availabilityPercentage = (project.participants / project.maxParticipants) * 100;
  const isAlmostFull = availabilityPercentage >= 75;
  const isFull = project.participants >= project.maxParticipants;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {isFull && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            Full
          </div>
        )}
        {!isFull && isAlmostFull && (
          <div className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            Almost Full
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
        
        <div className="flex items-center text-gray-500 mb-2 text-sm">
          <MapPin className="h-4 w-4 mr-2 text-green-600" />
          <span>{project.location}</span>
        </div>
        
        <div className="flex items-center text-gray-500 mb-2 text-sm">
          <Calendar className="h-4 w-4 mr-2 text-green-600" />
          <span>Starts: {formatDate(project.startDate)}</span>
        </div>
        
        <div className="flex items-center text-gray-500 mb-4 text-sm">
          <Users className="h-4 w-4 mr-2 text-green-600" />
          <span>{project.participants} of {project.maxParticipants} participants</span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div 
            className={`h-2 rounded-full ${isFull ? 'bg-red-500' : isAlmostFull ? 'bg-yellow-500' : 'bg-green-500'}`} 
            style={{ width: `${availabilityPercentage}%` }}
          ></div>
        </div>
        
        <button className={`w-full font-medium py-2 px-4 rounded transition-colors duration-300 text-sm
          ${isFull 
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
            : 'bg-green-600 hover:bg-green-500 text-white'}`}
          disabled={isFull}
        >
          {isFull ? 'Project Full' : 'Join Project'}
        </button>
      </div>
    </div>
  );
};

export default GardeningProjectCard;