import React from 'react';
import { Tag, User } from 'lucide-react';
import { ProductListing } from '../../types';

interface ProductListingCardProps {
  product: ProductListing;
}

const ProductListingCard: React.FC<ProductListingCardProps> = ({ product }) => {
  // Get condition badge color
  const getConditionColor = (condition: 'new' | 'like new' | 'good' | 'fair') => {
    switch (condition) {
      case 'new': return 'bg-green-100 text-green-800';
      case 'like new': return 'bg-blue-100 text-blue-800';
      case 'good': return 'bg-yellow-100 text-yellow-800';
      case 'fair': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
          <span className={`${getConditionColor(product.condition)} text-xs font-medium px-2.5 py-0.5 rounded-full`}>
            {product.condition.charAt(0).toUpperCase() + product.condition.slice(1)}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
        
        <div className="flex items-center text-gray-500 mb-2 text-sm">
          <Tag className="h-4 w-4 mr-2 text-green-600" />
          <span>{product.category}</span>
        </div>
        
        <div className="flex items-center text-gray-500 text-sm">
          <User className="h-4 w-4 mr-2 text-green-600" />
          <span>Listed by {product.owner}</span>
        </div>
        
        <div className="mt-4 flex space-x-2">
          <button className="flex-1 bg-green-600 hover:bg-green-500 text-white font-medium py-2 px-4 rounded transition-colors duration-300 text-sm">
            Contact Owner
          </button>
          <button className="flex-1 bg-green-100 hover:bg-green-200 text-green-800 font-medium py-2 px-4 rounded transition-colors duration-300 text-sm">
            Save Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListingCard;