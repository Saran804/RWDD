import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        {children}
      </div>
    </div>
  );
};

export default Card;