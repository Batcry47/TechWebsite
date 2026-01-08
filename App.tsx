import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ProductCard from './components/ProductCard';
import ProductPage from './components/ProductPage';
import Footer from './components/Footer';
import { PRODUCTS, REPAIR_SERVICES } from './constants';
import { Product, ProductCategory, ViewState } from './types';
import { ArrowRight, Filter } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'ALL'>('ALL');

  // Filter products for the grid
  const displayedProducts = activeCategory === 'ALL' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  // Get deals for hero carousel
  const deals = PRODUCTS.filter(p => p.isDeal);

  // Categories list for tabs
  const categories = ['ALL', ...Object.values(ProductCategory)];

  // Actions
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('PRODUCT_DETAIL');
  };

  const handleBackToCatalog = () => {
    setCurrentView('HOME');
    setSelectedProduct(null);
  };

  const handleNavigate = (view: ViewState) => {
    if (view === 'HOME') {
      handleBackToCatalog();
    }
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Render Logic
  if (currentView === 'PRODUCT_DETAIL' && selectedProduct) {
    // Find related items (same category, excluding current)
    const related = PRODUCTS.filter(p => p.category === selectedProduct.category && p.id !== selectedProduct.id);
    
    return (
      <div className="bg-gray-50 min-h-screen flex flex-col">
        <Navbar onNavigate={handleNavigate} onScrollTo={handleScrollTo} />
        <ProductPage 
          product={selectedProduct} 
          relatedProducts={related}
          onBack={handleBackToCatalog}
          onRelatedClick={handleProductClick}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      <Navbar onNavigate={handleNavigate} onScrollTo={handleScrollTo} />
      
      <main className="flex-grow">
        <Hero deals={deals} onProductClick={handleProductClick} onScrollTo={handleScrollTo} />
        
        <Services services={REPAIR_SERVICES} />
        
        {/* Categories Section */}
        <section id="categories" className="py-16 bg-slate-50 border-t border-b border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-dark-900 mb-8 text-center">Browse by Category</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(cat as any)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === cat 
                      ? 'bg-tech-600 text-white shadow-lg shadow-tech-600/30 scale-105' 
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {cat === 'ALL' ? 'All Products' : cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Grid */}
        <section id="products" className="py-20 container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-sm font-bold tracking-wider text-tech-600 uppercase mb-2">Our Catalog</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-dark-900">Featured Products</h3>
            </div>
            <div className="text-gray-500 flex items-center gap-2">
               <Filter size={18} /> Showing {displayedProducts.length} results
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {displayedProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={handleProductClick} 
              />
            ))}
          </div>

          {displayedProducts.length === 0 && (
             <div className="text-center py-20 text-gray-500">
                No products found in this category.
             </div>
          )}

          <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-2 text-tech-600 font-bold hover:text-tech-800 transition border-b-2 border-tech-600 pb-1">
              View Full Catalog <ArrowRight size={18} />
            </button>
          </div>
        </section>

        {/* Store CTA */}
        <section className="bg-dark-900 py-20 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-tech-600 rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
           <div className="container mx-auto px-4 relative z-10 text-center text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Visit Our Store Today</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                 Need a repair or want to try out our latest gadgets? Come visit our downtown location for personalized service.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <button className="px-8 py-4 bg-white text-dark-900 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg">
                    Get Directions
                 </button>
                 <button className="px-8 py-4 bg-tech-600 text-white rounded-lg font-bold hover:bg-tech-500 transition shadow-lg">
                    Call (555) 123-4567
                 </button>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;