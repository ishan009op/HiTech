import React, { useState } from 'react';
import { Check, ArrowRight, DollarSign, Calendar, Shield } from 'lucide-react';

const Pricing = () => {
  const [billingType, setBillingType] = useState('one-time');

  const pricingPlans = [
    {
      name: "Basic Home Elevator",
      price: "$15,000",
      priceRange: "$15,000 - $20,000",
      description: "Perfect for simple residential installations",
      features: [
        "Standard cabin design",
        "Up to 3 stops",
        "Basic control panel",
        "1-year warranty",
        "Installation included",
        "Safety features included"
      ],
      popular: false
    },
    {
      name: "Premium Home Elevator",
      price: "$25,000",
      priceRange: "$25,000 - $40,000",
      description: "Luxury features and customization options",
      features: [
        "Custom cabin finishes",
        "Up to 5 stops",
        "Digital control panel",
        "3-year warranty",
        "Installation included",
        "Smart home integration",
        "Premium materials",
        "Energy-efficient system"
      ],
      popular: true
    },
    {
      name: "Commercial Elevator",
      price: "$50,000+",
      priceRange: "$50,000 - $150,000",
      description: "High-capacity solutions for businesses",
      features: [
        "Heavy-duty construction",
        "Multiple stops available",
        "Advanced control systems",
        "5-year warranty",
        "Installation included",
        "ADA compliant",
        "Traffic management",
        "Emergency backup",
        "Custom branding options"
      ],
      popular: false
    }
  ];

  const maintenancePlans = [
    {
      name: "Basic Maintenance",
      price: "$150",
      period: "per month",
      description: "Essential maintenance for residential lifts",
      features: [
        "Quarterly inspections",
        "Emergency call service",
        "Basic repairs included",
        "Safety testing",
        "Lubrication service"
      ]
    },
    {
      name: "Premium Maintenance",
      price: "$250",
      period: "per month",
      description: "Comprehensive care for all elevator types",
      features: [
        "Monthly inspections",
        "24/7 emergency service",
        "All repairs included",
        "Priority response",
        "Parts replacement",
        "Annual modernization check",
        "Remote monitoring"
      ]
    }
  ];

  const additionalCosts = [
    {
      item: "Custom Finishes",
      range: "$2,000 - $10,000",
      description: "Premium materials and custom design"
    },
    {
      item: "Additional Stops",
      range: "$3,000 - $5,000",
      description: "Per additional floor/stop"
    },
    {
      item: "Smart Home Integration",
      range: "$1,500 - $3,000",
      description: "Connect to your home automation"
    },
    {
      item: "Extended Warranty",
      range: "$500 - $2,000",
      description: "Per year of extended coverage"
    }
  ];

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
              Transparent <span className="text-cyan-500">Pricing</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Clear, competitive pricing for all our elevator solutions. No hidden fees, just honest quotes.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setBillingType('one-time')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                billingType === 'one-time'
                  ? 'bg-cyan-500 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Installation Pricing
            </button>
            <button
              onClick={() => setBillingType('maintenance')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                billingType === 'maintenance'
                  ? 'bg-cyan-500 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Maintenance Plans
            </button>
          </div>
        </div>
      </section>

      {/* Installation Pricing */}
      {billingType === 'one-time' && (
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Installation Packages
              </h2>
              <p className="text-xl text-slate-600">Choose the perfect elevator for your needs</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, idx) => (
                <div 
                  key={idx}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                    plan.popular ? 'ring-4 ring-cyan-500 transform scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-cyan-500 text-white text-center py-2 font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                    <p className="text-slate-600 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-slate-900 mb-2">
                        {plan.price}
                      </div>
                      <div className="text-sm text-slate-500">Starting from {plan.priceRange}</div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}>
                      Get Quote
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Maintenance Pricing */}
      {billingType === 'maintenance' && (
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Maintenance Plans
              </h2>
              <p className="text-xl text-slate-600">Keep your elevator running smoothly year-round</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {maintenancePlans.map((plan, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-slate-900">
                      {plan.price}
                    </div>
                    <div className="text-sm text-slate-500">{plan.period}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-all flex items-center justify-center gap-2">
                    Subscribe Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Additional Costs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Additional Options
            </h2>
            <p className="text-xl text-slate-600">Customize your elevator with these optional features</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {additionalCosts.map((cost, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 p-6 rounded-lg border border-slate-200"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{cost.item}</h3>
                  <div className="text-lg font-semibold text-cyan-500">{cost.range}</div>
                </div>
                <p className="text-slate-600">{cost.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Financing Available
            </h2>
            <p className="text-xl text-slate-600">Flexible payment options to fit your budget</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <DollarSign className="w-10 h-10" />,
                title: "Competitive Rates",
                description: "Low interest financing options through our partner lenders"
              },
              {
                icon: <Calendar className="w-10 h-10" />,
                title: "Flexible Terms",
                description: "Choose payment plans from 12 to 84 months"
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: "No Hidden Fees",
                description: "Transparent pricing with all costs included in your quote"
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

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Get a personalized quote tailored to your specific needs and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center group text-lg">
              Request Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-cyan-500 text-cyan-500 px-8 py-4 rounded-lg hover:bg-cyan-50 transition-all text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
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

export default Pricing;