import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

const QuickQuoteModal = ({ isOpen, onClose, preselectedProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productType: preselectedProduct || '',
    floors: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote requested:', formData);
    // Handle form submission
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        style={{
          opacity: 0,
          animation: 'modalSlideIn 0.3s ease-out forwards'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Content */}
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-2">
              Get a Free <span className="text-cyan-500">Quote</span>
            </h2>
            <p className="text-slate-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="John Smith"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="+1 (234) 567-890"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Product Type *
                </label>
                <select
                  name="productType"
                  value={formData.productType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                >
                  <option value="">Select product type</option>
                  <option value="Basic Home Elevator">Basic Home Elevator</option>
                  <option value="Premium Home Elevator">Premium Home Elevator</option>
                  <option value="Compact Home Lift">Compact Home Lift</option>
                  <option value="Commercial Elevator">Commercial Elevator</option>
                  <option value="Freight Elevator">Freight Elevator</option>
                  <option value="Wheelchair Platform Lift">Wheelchair Platform Lift</option>
                  <option value="Stair Lift">Stair Lift</option>
                  <option value="Not Sure">Not Sure - Need Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Number of Floors/Stops
                </label>
                <select
                  name="floors"
                  value={formData.floors}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="">Select floors</option>
                  <option value="2">2 Floors</option>
                  <option value="3">3 Floors</option>
                  <option value="4">4 Floors</option>
                  <option value="5">5 Floors</option>
                  <option value="6+">6+ Floors</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-2">
                Additional Details
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Tell us about your project, timeline, budget, or any specific requirements..."
              ></textarea>
            </div>

            {/* Info Box */}
            <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
              <p className="text-sm text-slate-700">
                <strong>What happens next?</strong>
                <br />
                Our team will review your request and contact you within 24 hours to schedule a free consultation and provide a detailed quote.
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleSubmit}
                disabled={!formData.name || !formData.email || !formData.phone || !formData.productType}
                className="flex-1 bg-cyan-500 text-white px-6 py-4 rounded-lg hover:bg-cyan-600 transition-all shadow-lg hover:shadow-xl font-semibold disabled:bg-slate-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                Request Quote
                <Send className="w-5 h-5" />
              </button>
              <button
                onClick={onClose}
                className="px-6 py-4 border-2 border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-all font-semibold"
              >
                Cancel
              </button>
            </div>

            <p className="text-xs text-slate-500 text-center">
              By submitting this form, you agree to be contacted by ElevateLifts regarding your quote request.
            </p>
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

export default QuickQuoteModal;