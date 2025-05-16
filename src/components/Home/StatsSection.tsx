import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:translate-y-[-5px]">
      <div className="text-3xl md:text-4xl font-bold text-green-700 mb-2">{value}</div>
      <div className="text-lg font-semibold text-gray-800 mb-3">{label}</div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Impact</h2>
          <p className="text-gray-600">
            Through community collaboration and dedicated initiatives, 
            we're making measurable progress toward a more sustainable future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            value="2,500+" 
            label="Community Members" 
            description="Engaged citizens working together to create positive environmental change"
          />
          <StatCard 
            value="12 tons" 
            label="Waste Diverted" 
            description="Materials kept out of landfills through our recycling initiatives"
          />
          <StatCard 
            value="15%" 
            label="Energy Reduction" 
            description="Average household energy savings reported by community members"
          />
          <StatCard 
            value="850+" 
            label="Items Exchanged" 
            description="Products given new life through our community swap program"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;