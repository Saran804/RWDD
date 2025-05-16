import React from 'react';
import { Recycle, Lightbulb, Flower, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, link, color }) => {
  return (
    <Link 
      to={link}
      className={`${color} p-6 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 group`}
    >
      <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-white/90 mb-4 text-sm">{description}</p>
      <span className="text-white inline-flex items-center text-sm font-medium">
        Learn more
        <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </span>
    </Link>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Recycle className="h-8 w-8 text-green-600" />,
      title: "Recycling Programs",
      description: "Discover local recycling initiatives, schedules, and guidelines to reduce waste in your community.",
      link: "/recycling",
      color: "bg-green-700"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-600" />,
      title: "Energy Conservation",
      description: "Learn practical tips and strategies to reduce energy consumption at home and work.",
      link: "/energy-tips",
      color: "bg-green-600"
    },
    {
      icon: <Flower className="h-8 w-8 text-pink-600" />,
      title: "Community Gardening",
      description: "Join local gardening projects, share tips, and grow together with fellow enthusiasts.",
      link: "/gardening",
      color: "bg-green-800"
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-blue-600" />,
      title: "Eco-Friendly Swaps",
      description: "Exchange sustainable products with community members to promote reuse and reduce waste.",
      link: "/swap",
      color: "bg-green-700"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How We Support Sustainable Living</h2>
          <p className="text-gray-600">
            EcoConnect provides resources and tools to help our community adopt eco-friendly practices in everyday life.
            Explore our four key initiatives below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              link={feature.link}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;