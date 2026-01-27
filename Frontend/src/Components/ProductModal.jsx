import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

const ProductModal = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        style={{
          opacity: 0,
          animation: 'modalSlideIn 0.3s ease-out forwards'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition shadow-lg"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center min-h-[400px] rounded-tl-2xl md:rounded-bl-2xl">
            <div className="text-center p-8">
              <div className="w-32 h-32 mx-auto mb-4 bg-slate-400 rounded-full"></div>
              <p className="text-slate-500 text-lg">{product.name}</p>
              <p className="text-slate-400 text-sm">Product Image</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="text-xs font-semibold text-cyan-500 uppercase tracking-wider mb-2">
              {product.category}
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{product.name}</h2>
            <p className="text-lg text-slate-500 italic mb-4">{product.tagline}</p>
            <p className="text-slate-600 mb-6">{product.description}</p>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Key Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specs).map(([key, value], i) => (
                  <div key={i} className="bg-slate-50 p-3 rounded-lg">
                    <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="text-sm font-semibold text-slate-900">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button 
                onClick={() => {
                  onClose();
                  // Navigate to contact - handle this in parent component
                }}
                className="flex-1 bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-all shadow-md hover:shadow-lg font-semibold flex items-center justify-center gap-2"
              >
                Get Quote
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={onClose}
                className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-all font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default ProductModal;