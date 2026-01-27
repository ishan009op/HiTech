import React, { useState } from 'react';
import { Check, ArrowRight, Home, Building2, Accessibility, Zap, Shield, Volume2 } from 'lucide-react';
import ProductModal from './ProductModal';
const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
const [selectedProduct, setSelectedProduct] = useState(null);
  const categories = [
    { id: 'all', name: 'All Products', icon: <Zap className="w-5 h-5" /> },
    { id: 'residential', name: 'Residential', icon: <Home className="w-5 h-5" /> },
    { id: 'commercial', name: 'Commercial', icon: <Building2 className="w-5 h-5" /> },
    { id: 'accessibility', name: 'Accessibility', icon: <Accessibility className="w-5 h-5" /> }
  ];

  const products = [
    {
      category: 'residential',
      name: 'Home Elevator Classic',
      tagline: 'Timeless elegance for your home',
      description: 'Traditional design meets modern technology. Perfect for adding value and convenience to your home.',
      features: [
        'Capacity: 450-500 lbs',
        'Speeds up to 30 ft/min',
        'Multiple finish options',
        'Quiet operation',
        'Energy efficient LED lighting'
      ],
      specs: {
        capacity: '450-500 lbs',
        speed: '30 ft/min',
        floors: 'Up to 5 stops',
        power: '220V single phase'
      }
    },
    {
      category: 'residential',
      name: 'Luxury Home Elevator',
      tagline: 'Ultimate comfort and style',
      description: 'Premium elevator solution with customizable finishes, smart home integration, and whisper-quiet operation.',
      features: [
        'Capacity: 750-1000 lbs',
        'Speeds up to 40 ft/min',
        'Premium materials',
        'Smart home compatible',
        'Custom design options'
      ],
      specs: {
        capacity: '750-1000 lbs',
        speed: '40 ft/min',
        floors: 'Up to 6 stops',
        power: '220V single phase'
      }
    },
    {
      category: 'residential',
      name: 'Compact Home Lift',
      tagline: 'Space-saving solutions',
      description: 'Designed for homes with limited space. Minimal footprint without compromising on safety or style.',
      features: [
        'Capacity: 350-400 lbs',
        'Compact design',
        'Easy installation',
        'Low maintenance',
        'Multiple color options'
      ],
      specs: {
        capacity: '350-400 lbs',
        speed: '25 ft/min',
        floors: 'Up to 4 stops',
        power: '110V'
      }
    },
    {
      category: 'commercial',
      name: 'Office Tower Elevator',
      tagline: 'High-speed performance',
      description: 'Engineered for high-rise buildings with heavy traffic. Reliable, efficient, and built to last.',
      features: [
        'Capacity: 2500-3500 lbs',
        'High-speed operation',
        'Advanced traffic management',
        'Energy regenerative drive',
        'Modern control systems'
      ],
      specs: {
        capacity: '2500-3500 lbs',
        speed: '400-700 ft/min',
        floors: 'Up to 50+ stops',
        power: '480V three phase'
      }
    },
    {
      category: 'commercial',
      name: 'Retail Space Elevator',
      tagline: 'Style meets functionality',
      description: 'Perfect for shopping centers and retail environments. Designed to handle high passenger volume.',
      features: [
        'Capacity: 2000-2500 lbs',
        'Glass cabin options',
        'Durable finishes',
        'ADA compliant',
        'Custom branding available'
      ],
      specs: {
        capacity: '2000-2500 lbs',
        speed: '200-350 ft/min',
        floors: 'Up to 20 stops',
        power: '480V three phase'
      }
    },
    {
      category: 'commercial',
      name: 'Freight Elevator',
      tagline: 'Heavy-duty performance',
      description: 'Industrial-grade elevator for moving goods and heavy loads. Robust construction for demanding environments.',
      features: [
        'Capacity: 4000-10000 lbs',
        'Heavy-duty construction',
        'Reinforced cabin',
        'Multiple door options',
        'Rugged finishes'
      ],
      specs: {
        capacity: '4000-10000 lbs',
        speed: '100-150 ft/min',
        floors: 'Up to 15 stops',
        power: '480V three phase'
      }
    },
    {
      category: 'accessibility',
      name: 'Wheelchair Platform Lift',
      tagline: 'Independence and mobility',
      description: 'ADA-compliant platform lift designed for wheelchair users. Safe, reliable vertical transportation.',
      features: [
        'Capacity: 750 lbs',
        'ADA compliant design',
        'Safety gates included',
        'Weather-resistant options',
        'Easy to operate'
      ],
      specs: {
        capacity: '750 lbs',
        travel: 'Up to 14 feet',
        platform: '36" x 48"',
        power: '110V/220V'
      }
    },
    {
      category: 'accessibility',
      name: 'Stair Lift',
      tagline: 'Navigate stairs with ease',
      description: 'Curved and straight stair lift solutions. Safe, comfortable, and easy to use for any staircase.',
      features: [
        'Capacity: 300-400 lbs',
        'Smooth operation',
        'Foldable design',
        'Battery backup',
        'Safety sensors'
      ],
      specs: {
        capacity: '300-400 lbs',
        speed: '20 ft/min',
        travel: 'Straight or curved',
        power: '110V with battery'
      }
    },
    {
      category: 'accessibility',
      name: 'Vertical Platform Lift',
      tagline: 'Barrier-free access',
      description: 'Enclosed platform lift for both indoor and outdoor use. Perfect for commercial and residential applications.',
      features: [
        'Capacity: 750-1000 lbs',
        'Enclosed cabin',
        'Indoor/outdoor models',
        'Multiple finish options',
        'Key-operated controls'
      ],
      specs: {
        capacity: '750-1000 lbs',
        travel: 'Up to 14 feet',
        platform: '42" x 54"',
        power: '220V single phase'
      }
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-slate-100 to-cyan-50 py-20 md:py-32"
        style={{
          opacity: 0,
          animation: 'fadeIn 0.8s ease-out forwards'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Our <span className="text-cyan-500">Products</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Discover our complete range of elevator solutions. From residential to commercial, we have the perfect lift for every need.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden group"
              >
                {/* Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-6">
                    <div className="w-20 h-20 mx-auto mb-3 bg-slate-400 rounded-full"></div>
                    <p className="text-slate-500 text-sm">{product.name}</p>
                    <p className="text-slate-400 text-xs">Product Image</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs font-semibold text-cyan-500 uppercase tracking-wider mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-slate-500 italic mb-3">{product.tagline}</p>
                  <p className="text-slate-600 mb-4">{product.description}</p>
                  
                  <button onClick={()=> setSelectedProduct(product)} className="text-cyan-500 font-semibold flex items-center group-hover:gap-2 transition-all">
                    View Details
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              What Makes Our Products Stand Out
            </h2>
            <p className="text-xl text-slate-600">Quality, innovation, and reliability in every lift</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-10 h-10" />,
                title: "Safety First",
                description: "All products meet or exceed international safety standards with comprehensive testing."
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: "Energy Efficient",
                description: "Advanced technology reduces energy consumption without compromising performance."
              },
              {
                icon: <Volume2 className="w-10 h-10" />,
                title: "Quiet Operation",
                description: "Whisper-quiet motors and smooth operation for maximum comfort."
              }
            ].map((feature, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="inline-block p-4 bg-cyan-50 rounded-full text-cyan-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Customize Your Elevator
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Every elevator can be tailored to match your specific needs, style preferences, and space requirements.
              </p>
              <ul className="space-y-4">
                {[
                  "Choose from premium finishes and materials",
                  "Custom cabin sizes to fit your space",
                  "Multiple door configurations available",
                  "Advanced control panel options",
                  "Smart home integration capabilities",
                  "Personalized lighting and flooring"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition flex items-center gap-2 group">
                Start Customizing
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Image Placeholder */}
            <div>
              <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl shadow-xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 bg-slate-400 rounded-full"></div>
                  <p className="text-slate-500 text-lg">Customization Options</p>
                  <p className="text-slate-400 text-sm">Feature Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Find Your Perfect Elevator
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Not sure which product is right for you? Our experts are here to help you choose the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center group text-lg">
              Get Product Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-cyan-500 text-cyan-500 px-8 py-4 rounded-lg hover:bg-cyan-50 transition-all text-lg">
              Download Catalog
            </button>
          </div>
        </div>

<ProductModal 
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
      />

      </section>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Products;