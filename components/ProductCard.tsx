import React from 'react';
import { Product } from '../types';
import { Eye, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col h-full"
      onClick={() => onClick(product)}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        {product.isDeal && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            HOT DEAL
          </div>
        )}
        {/* Overlay Button */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button className="bg-white text-dark-900 px-6 py-2 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
               <Eye size={16} /> View Details
            </button>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="text-xs text-tech-600 font-semibold mb-1 uppercase tracking-wide">
          {product.category}
        </div>
        <h3 className="font-bold text-lg text-dark-900 mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-grow">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold text-dark-900">${product.price.toFixed(2)}</span>
          <div className="flex text-yellow-400 text-xs">
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;