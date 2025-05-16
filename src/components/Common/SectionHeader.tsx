import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  light = false
}) => {
  return (
    <div className={`${centered ? 'text-center' : 'text-left'} max-w-3xl ${centered ? 'mx-auto' : ''} mb-12`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-gray-800'}`}>
        {title}
      </h2>
      <p className={`${light ? 'text-gray-100' : 'text-gray-600'}`}>
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;