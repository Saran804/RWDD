import React, { useState } from 'react';
import PageHeader from '../components/Common/PageHeader';
import EnergyTipCard from '../components/Energy/EnergyTipCard';
import { energyTips } from '../data/mockData';
import { Home, Briefcase, Car } from 'lucide-react';

const EnergyTips = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'home' | 'work' | 'travel'>('all');

  const filteredTips = activeFilter === 'all' 
    ? energyTips 
    : energyTips.filter(tip => tip.category === activeFilter);

  return (
    <div>
      <PageHeader 
        title="Energy Conservation Tips"
        subtitle="Discover practical ways to reduce energy consumption at home and work, helping both the environment and your wallet."
        backgroundImage="https://images.pexels.com/photos/3943719/pexels-photo-3943719.jpeg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Save Energy, Save Money</h2>
            <p className="text-gray-600">
              Energy conservation doesn't have to be complicated. Small changes in your daily habits can lead to significant energy savings over time.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  activeFilter === 'all'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border border-gray-200`}
              >
                All Tips
              </button>
              <button
                onClick={() => setActiveFilter('home')}
                className={`px-4 py-2 text-sm font-medium flex items-center ${
                  activeFilter === 'home'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border-t border-b border-r border-gray-200`}
              >
                <Home className="h-4 w-4 mr-1" /> Home
              </button>
              <button
                onClick={() => setActiveFilter('work')}
                className={`px-4 py-2 text-sm font-medium flex items-center ${
                  activeFilter === 'work'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border-t border-b border-r border-gray-200`}
              >
                <Briefcase className="h-4 w-4 mr-1" /> Work
              </button>
              <button
                onClick={() => setActiveFilter('travel')}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg flex items-center ${
                  activeFilter === 'travel'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border-t border-b border-r border-gray-200`}
              >
                <Car className="h-4 w-4 mr-1" /> Travel
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTips.map((tip) => (
              <EnergyTipCard key={tip.id} tip={tip} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Calculate Your Energy Savings</h2>
            <p className="text-gray-600">
              Use our simple calculator to estimate how much energy and money you could save by implementing these tips.
            </p>
          </div>

          <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Monthly Energy Bill ($)
                </label>
                <input 
                  type="number" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  placeholder="e.g. 120"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Energy-Saving Measures
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="led" 
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="led" className="ml-2 block text-sm text-gray-700">
                      Replace light bulbs with LEDs (saves ~10%)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="thermostat" 
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="thermostat" className="ml-2 block text-sm text-gray-700">
                      Install programmable thermostat (saves ~15%)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="appliances" 
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="appliances" className="ml-2 block text-sm text-gray-700">
                      Use energy-efficient appliances (saves ~20%)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="unplug" 
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="unplug" className="ml-2 block text-sm text-gray-700">
                      Unplug devices when not in use (saves ~5%)
                    </label>
                  </div>
                </div>
              </div>

              <button 
                type="button" 
                className="w-full bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded transition-colors duration-300 font-medium"
              >
                Calculate Savings
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-center">
                <p className="text-gray-700 mb-2">Estimated Monthly Savings:</p>
                <p className="text-3xl font-bold text-green-600">$0.00</p>
                <p className="text-gray-600 text-sm mt-1">Select options above to calculate potential savings</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnergyTips;