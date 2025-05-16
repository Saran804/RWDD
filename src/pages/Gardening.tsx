import React from 'react';
import PageHeader from '../components/Common/PageHeader';
import GardeningProjectCard from '../components/Gardening/GardeningProjectCard';
import { gardeningProjects } from '../data/mockData';
import SectionHeader from '../components/Common/SectionHeader';
import { Leaf, Droplets, Sun, ThermometerSun } from 'lucide-react';

const Gardening = () => {
  return (
    <div>
      <PageHeader 
        title="Community Gardening"
        subtitle="Join local gardening projects, share your expertise, and grow together with fellow community members."
        backgroundImage="https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Join a Gardening Project"
            subtitle="Connect with fellow gardeners and contribute to community gardens across the area. Projects range from vegetable gardens to butterfly sanctuaries."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gardeningProjects.map((project) => (
              <GardeningProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Gardening Tips & Advice"
            subtitle="Whether you're a beginner or experienced gardener, these sustainable gardening practices will help your garden thrive while minimizing environmental impact."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Composting Basics</h3>
                  <p className="text-gray-600 text-sm">
                    Composting enriches soil, reduces the need for chemical fertilizers, and diverts waste from landfills. 
                    Start with a mix of green materials (food scraps, grass clippings) and brown materials (dead leaves, branches).
                    Turn your compost pile regularly to aerate it and speed up decomposition.
                  </p>
                </div>
              </div>
              <a href="#" className="text-green-600 hover:text-green-500 text-sm font-medium flex items-center">
                Learn more about composting
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Droplets className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Water Conservation</h3>
                  <p className="text-gray-600 text-sm">
                    Use drip irrigation or soaker hoses to minimize water waste. Water early in the morning to reduce evaporation.
                    Collect rainwater in barrels for use during dry periods. Apply mulch around plants to retain soil moisture
                    and suppress weeds.
                  </p>
                </div>
              </div>
              <a href="#" className="text-green-600 hover:text-green-500 text-sm font-medium flex items-center">
                Explore water-saving techniques
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <Sun className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Plant Selection</h3>
                  <p className="text-gray-600 text-sm">
                    Choose native plants that are adapted to local conditions and require less maintenance.
                    Group plants with similar water and sun requirements together for efficient resource use.
                    Include pollinator-friendly plants to support local bee and butterfly populations.
                  </p>
                </div>
              </div>
              <a href="#" className="text-green-600 hover:text-green-500 text-sm font-medium flex items-center">
                Find native plant guides
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <ThermometerSun className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Seasonal Planning</h3>
                  <p className="text-gray-600 text-sm">
                    Plan your garden according to seasonal changes. Start cool-season crops in early spring or fall,
                    and warm-season crops after the last frost date. Rotate crops each season to prevent soil depletion
                    and reduce pest problems.
                  </p>
                </div>
              </div>
              <a href="#" className="text-green-600 hover:text-green-500 text-sm font-medium flex items-center">
                Download our planting calendar
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gardening;