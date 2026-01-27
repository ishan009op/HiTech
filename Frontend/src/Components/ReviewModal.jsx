import React, { useState } from 'react';
import { X, Star } from 'lucide-react';

const ReviewModal = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    project: '',
    review: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Review submitted:', { ...formData, rating });
    // Handle form submission here
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
              Share Your <span className="text-cyan-500">Experience</span>
            </h2>
            <p className="text-slate-600">
              Help others by sharing your experience with ElevateLifts
            </p>
          </div>

          {/* Rating Section */}
          <div className="mb-8 text-center">
            <label className="block text-slate-700 font-semibold mb-3">
              Rate Your Experience *
            </label>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-10 h-10 ${
                      star <= (hoveredRating || rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-slate-300'
                    }`}
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-sm text-slate-500 mt-2">
                {rating === 5 && "Excellent!"}
                {rating === 4 && "Very Good!"}
                {rating === 3 && "Good"}
                {rating === 2 && "Fair"}
                {rating === 1 && "Needs Improvement"}
              </p>
            )}
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

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Your Role
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="">Select role</option>
                  <option value="Homeowner">Homeowner</option>
                  <option value="Property Manager">Property Manager</option>
                  <option value="Business Owner">Business Owner</option>
                  <option value="Architect">Architect</option>
                  <option value="Contractor">Contractor</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Project Type
                </label>
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="">Select project</option>
                  <option value="Home Elevator">Home Elevator</option>
                  <option value="Commercial Elevator">Commercial Elevator</option>
                  <option value="Wheelchair Lift">Wheelchair Lift</option>
                  <option value="Stair Lift">Stair Lift</option>
                  <option value="Maintenance Service">Maintenance Service</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-2">
                Your Review *
              </label>
              <textarea
                name="review"
                value={formData.review}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Tell us about your experience with ElevateLifts..."
                required
              ></textarea>
              <p className="text-sm text-slate-500 mt-1">
                Minimum 50 characters ({formData.review.length}/50)
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleSubmit}
                disabled={rating === 0 || !formData.name || !formData.email || formData.review.length < 50}
                className="flex-1 bg-cyan-500 text-white px-6 py-4 rounded-lg hover:bg-cyan-600 transition-all shadow-lg hover:shadow-xl font-semibold disabled:bg-slate-300 disabled:cursor-not-allowed"
              >
                Submit Review
              </button>
              <button
                onClick={onClose}
                className="px-6 py-4 border-2 border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-all font-semibold"
              >
                Cancel
              </button>
            </div>

            <p className="text-xs text-slate-500 text-center">
              By submitting this review, you agree to our terms and conditions. Your email will not be publicly displayed.
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
export default ReviewModal