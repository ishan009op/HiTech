import React, { useState } from 'react';
import { Star, Quote, ThumbsUp, MessageCircle } from 'lucide-react';
import ReviewModal from './ReviewModal';
const Reviews = () => {
  const [selectedRating, setSelectedRating] = useState('all');
const [isModalOpen, setIsModalOpen] = useState(false)
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      rating: 5,
      date: "December 2024",
      review: "The installation of our home elevator was flawless. The team was professional, punctual, and respectful of our home. The elevator itself is beautiful and operates so smoothly. It's added tremendous value to our property and made life so much easier for my elderly parents.",
      project: "Luxury Home Elevator"
    },
    {
      name: "Michael Chen",
      role: "Property Manager",
      rating: 5,
      date: "November 2024",
      review: "We've worked with ElevateLifts on three commercial properties now. Their expertise in high-rise installations is unmatched. The elevators are reliable, energy-efficient, and our tenants love them. Customer service is outstanding - they always respond quickly to any questions.",
      project: "Office Tower Elevator"
    },
    {
      name: "Emily Rodriguez",
      role: "Business Owner",
      rating: 5,
      date: "October 2024",
      review: "As a retail space owner, I needed an elevator that could handle high traffic and look great. ElevateLifts delivered on both fronts. The glass elevator they installed has become a feature attraction in our shopping center. Highly recommend their services!",
      project: "Retail Space Elevator"
    },
    {
      name: "David Thompson",
      role: "Homeowner",
      rating: 5,
      date: "September 2024",
      review: "After my accident, I needed a wheelchair accessible lift. The team at ElevateLifts was incredibly understanding and helpful throughout the process. They designed a solution that fits perfectly in our home and works flawlessly. Life-changing product and service.",
      project: "Wheelchair Platform Lift"
    },
    {
      name: "Linda Martinez",
      role: "Healthcare Facility Manager",
      rating: 5,
      date: "August 2024",
      review: "We needed reliable freight elevators for our medical facility. ElevateLifts installed heavy-duty lifts that have been operating perfectly for months now. The maintenance plan they offered gives us peace of mind. Professional team from start to finish.",
      project: "Freight Elevator"
    },
    {
      name: "Robert Kim",
      role: "Architect",
      rating: 5,
      date: "July 2024",
      review: "I've specified ElevateLifts products on multiple projects. Their range of customization options allows me to perfectly match each client's aesthetic vision. The technical support team is knowledgeable and always available to answer questions during the design phase.",
      project: "Custom Residential Elevator"
    },
    {
      name: "Jennifer Walsh",
      role: "Senior Living Director",
      rating: 5,
      date: "June 2024",
      review: "Our senior living facility needed multiple accessibility solutions. ElevateLifts provided stair lifts and platform lifts that are safe, easy to use, and aesthetically pleasing. The residents feel more independent, and we feel confident in the safety features.",
      project: "Multiple Accessibility Lifts"
    },
    {
      name: "James Cooper",
      role: "Homeowner",
      rating: 4,
      date: "May 2024",
      review: "Great product and mostly smooth installation. There was a slight delay due to permit issues (not their fault), but the team kept us informed throughout. The compact home lift fits perfectly in our small space and operates quietly. Very satisfied overall.",
      project: "Compact Home Lift"
    },
    {
      name: "Amanda Foster",
      role: "Hotel Manager",
      rating: 5,
      date: "April 2024",
      review: "We modernized all six elevators in our boutique hotel with ElevateLifts. The project was completed on schedule with minimal disruption to our guests. The new elevators are faster, quieter, and look stunning. Guest feedback has been overwhelmingly positive!",
      project: "Hotel Elevator Modernization"
    }
  ];

  const stats = [
    { number: "2500+", label: "Happy Clients" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "1200+", label: "5-Star Reviews" }
  ];

  const filteredReviews = selectedRating === 'all' 
    ? reviews 
    : reviews.filter(r => r.rating === parseInt(selectedRating));

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
              Customer <span className="text-cyan-500">Reviews</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              See what our clients say about their experience with ElevateLifts. Real reviews from real customers.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-500 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedRating('all')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                selectedRating === 'all'
                  ? 'bg-cyan-500 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              All Reviews
            </button>
            <button
              onClick={() => setSelectedRating('5')}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold transition-all ${
                selectedRating === '5'
                  ? 'bg-cyan-500 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              5 Stars <Star className="w-4 h-4 fill-current" />
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-slate-300'}`}
                    />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-cyan-500 opacity-50 mb-4" />
                
                <p className="text-slate-600 mb-6 leading-relaxed">{review.review}</p>
                
                <div className="border-t border-slate-200 pt-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full"></div>
                    <div>
                      <div className="font-bold text-slate-900">{review.name}</div>
                      <div className="text-sm text-slate-500">{review.role}</div>
                    </div>
                  </div>
                  <div className="text-sm text-slate-500">{review.date}</div>
                  <div className="text-sm text-cyan-500 font-semibold mt-2">{review.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              What Clients Love Most
            </h2>
            <p className="text-xl text-slate-600">The most appreciated aspects of our service</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ThumbsUp className="w-10 h-10" />,
                title: "Professional Installation",
                description: "Clients consistently praise our punctual, skilled technicians and clean installation process."
              },
              {
                icon: <MessageCircle className="w-10 h-10" />,
                title: "Excellent Communication",
                description: "We keep clients informed every step of the way, from consultation to final inspection."
              },
              {
                icon: <Star className="w-10 h-10" />,
                title: "Quality Products",
                description: "Our elevators exceed expectations in design, performance, and reliability."
              }
            ].map((highlight, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="inline-block p-4 bg-cyan-50 rounded-full text-cyan-500 mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{highlight.title}</h3>
                <p className="text-slate-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave Review CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Share Your Experience
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Are you a satisfied ElevateLifts customer? We'd love to hear about your experience!
          </p>
          <button onClick={() => setIsModalOpen(true)} className="bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-all shadow-lg hover:shadow-xl text-lg">
            Write a Review
          </button>
        </div>
      </section>
<ReviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
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

export default Reviews;