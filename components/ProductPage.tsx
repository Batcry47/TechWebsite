import React, { useState } from 'react';
import { Product } from '../types';
import { ArrowLeft, Check, Shield, Package, Store, MapPin, Phone } from 'lucide-react';

interface ProductPageProps {
  product: Product;
  relatedProducts: Product[];
  onBack: () => void;
  onRelatedClick: (p: Product) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ product, relatedProducts, onBack, onRelatedClick }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Scroll to top when mounted (handled by parent usually, but good practice here too)
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [product.id]);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50 animate-fade-in">
      {/* Breadcrumb / Back */}
      <div className="container mx-auto px-4 mb-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-tech-600 transition-colors font-medium"
        >
          <ArrowLeft size={18} /> Back to Catalog
        </button>
      </div>

      <div className="container mx-auto px-4">
        
        {/* Main Product Layout */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* LEFT: Gallery (60%) */}
            <div className="lg:col-span-7 p-6 md:p-10 bg-white border-b lg:border-b-0 lg:border-r border-gray-100">
              {/* Main Image */}
              <div 
                className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 mb-6 cursor-zoom-in"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
              >
                <img 
                  src={product.images[activeImageIndex]} 
                  alt={product.name}
                  className={`w-full h-full object-contain mix-blend-multiply transition-transform duration-500 ease-out origin-center ${isZoomed ? 'scale-150' : 'scale-100'}`}
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide justify-center">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx ? 'border-tech-600 ring-2 ring-tech-100' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT: Info (40%) */}
            <div className="lg:col-span-5 p-8 md:p-12 flex flex-col h-full bg-white">
              <div className="mb-auto">
                <div className="flex items-center gap-2 text-sm font-bold text-tech-600 tracking-wide uppercase mb-2">
                   <Shield size={16} /> Authorized Retailer
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4 leading-tight">{product.name}</h1>
                <div className="text-4xl font-bold text-dark-900 mb-6">${product.price.toFixed(2)}</div>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {product.fullDescription}
                </p>

                <div className="space-y-3 mb-8">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="bg-green-100 text-green-600 p-1 rounded-full mt-1">
                        <Check size={12} />
                      </div>
                      <span className="font-medium text-dark-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <button className="w-full bg-tech-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-tech-700 transition shadow-lg shadow-tech-200 mb-4 flex items-center justify-center gap-2">
                   <Store size={20} /> Visit Store for Availability
                </button>
                <div className="bg-gray-50 rounded-xl p-4 flex flex-col md:flex-row gap-4 justify-between items-center text-sm text-gray-500">
                   <div className="flex items-center gap-2">
                      <Phone size={16} className="text-tech-600" /> (555) 123-4567
                   </div>
                   <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-tech-600" /> 123 Tech Ave, NY
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Below Fold Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Specs */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-dark-900 mb-6">Technical Specifications</h3>
            <div className="space-y-0 divide-y divide-gray-100">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between py-3">
                  <span className="text-gray-500">{key}</span>
                  <span className="font-medium text-dark-900 text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* In The Box */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-fit">
            <h3 className="text-xl font-bold text-dark-900 mb-6 flex items-center gap-2">
               <Package size={20} className="text-tech-600"/> What's in the Box
            </h3>
            <ul className="space-y-3">
               {product.inBox.map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                    {item}
                 </li>
               ))}
            </ul>
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-dark-900 mb-8">You Might Also Like</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
             {relatedProducts.slice(0, 4).map(rp => (
               <div 
                  key={rp.id}
                  onClick={() => onRelatedClick(rp)}
                  className="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-lg transition cursor-pointer"
               >
                  <img src={rp.images[0]} alt={rp.name} className="w-full aspect-square object-cover rounded-lg mb-4 bg-gray-100" />
                  <h4 className="font-bold text-dark-900 truncate">{rp.name}</h4>
                  <div className="text-tech-600 font-bold mt-1">${rp.price.toFixed(2)}</div>
               </div>
             ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductPage;