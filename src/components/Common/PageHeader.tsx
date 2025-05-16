import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;