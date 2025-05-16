import React, { useState } from 'react';
import PageHeader from '../components/Common/PageHeader';
import ProductListingCard from '../components/Swap/ProductListingCard';
import { productListings } from '../data/mockData';
import { Search, Filter, Plus } from 'lucide-react';

const ProductSwap = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const categories = ['all', 'Kitchen', 'Garden', 'Electronics', 'Clothing', 'Home Goods'];

  const filteredListings = productListings.filter(product => {
    // Apply category filter
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    
    // Apply search filter
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <PageHeader 
        title="Eco-Friendly Product Swap"
        subtitle="Exchange sustainable products with community members to reduce waste and give items a new life."
        backgroundImage="https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-4">
            <div className="lg:max-w-xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Available Items</h2>
              <p className="text-gray-600">
                Browse eco-friendly products offered by community members or list your own items for exchange.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <button className="bg-green-600 hover:bg-green-500 text-white flex items-center justify-center px-4 py-2 rounded-lg transition-colors duration-300">
                <Plus className="h-5 w-5 mr-2" />
                <span>List New Item</span>
              </button>
              
              <div className="relative flex-1 sm:w-72">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex overflow-x-auto space-x-2 mb-6 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setCategoryFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  categoryFilter === category
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>

          {filteredListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredListings.map((product) => (
                <ProductListingCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-gray-100 inline-flex rounded-full p-4 mb-4">
                <Filter className="h-6 w-6 text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No items found</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                We couldn't find any items matching your criteria. Try adjusting your filters or check back later.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How Product Swap Works</h2>
            <p className="text-gray-600">
              Our community swap program makes it easy to give items a new life while reducing waste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">List Your Item</h3>
              <p className="text-gray-600 text-sm">
                Take a photo of your eco-friendly item, add a description, and post it to our platform. 
                Be sure to note the condition and any relevant details.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Connect & Arrange</h3>
              <p className="text-gray-600 text-sm">
                Interested community members will contact you through our messaging system. 
                Agree on exchange details and arrange a meeting in a safe location.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Complete the Swap</h3>
              <p className="text-gray-600 text-sm">
                Meet up to exchange the item. After the swap, both parties can leave feedback to 
                help build a trusted community of eco-conscious swappers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductSwap;