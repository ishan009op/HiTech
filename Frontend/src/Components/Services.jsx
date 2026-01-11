import React from 'react';
import { Check, ArrowRight, Wrench, Shield, Clock, Star } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      title: "Residential Elevators",
      description: "Transform your home with luxurious elevator solutions designed for comfort, safety, and elegance.",
      features: [
        "Custom design to match your home aesthetic",
        "Space-efficient installations",
        "Quiet operation technology",
        "Energy-efficient systems",
        "Smart home integration"
      ],
      img:"/home.jpg"
    },
    {
      title: "Commercial Lifts",
      description: "High-performance elevator systems for office buildings, hotels, and retail spaces.",
      features: [
        "High-speed passenger elevators",
        "Heavy-duty freight lifts",
        "ADA compliant designs",
        "Advanced security features",
        "Traffic management systems"
      ],
      img:"/8146.jpg"
    },
    {
      title: "Accessibility Solutions",
      description: "Enhancing mobility and independence with specialized lift solutions.",
      features: [
        "Wheelchair platform lifts",
        "Vertical platform lifts",
        "Stair lifts and chair lifts",
        "Pool lifts",
        "Custom accessibility solutions"
      ],
      img:"/accessibility.jpg"
    }
  ];

  const additionalServices = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Installation",
      description: "Professional installation by certified technicians with minimal disruption to your property."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Maintenance",
      description: "Regular preventive maintenance to ensure safety, reliability, and optimal performance."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Modernization",
      description: "Upgrade existing elevators with latest technology, improving efficiency and aesthetics."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Emergency Repairs",
      description: "24/7 emergency service with rapid response times to minimize downtime."
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
              Our <span className="text-cyan-500">Services</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Comprehensive elevator solutions tailored to your needs. From installation to maintenance, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, idx) => (
              <div 
                key={idx}
                className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Image Placeholder */}
                <div className={`${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                 <img src={service.img} alt="" />
                </div>

                {/* Content */}
                <div className={`${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-xl text-slate-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition flex items-center gap-2 group">
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Additional Services</h2>
            <p className="text-xl text-slate-600">Comprehensive support throughout the entire lifecycle</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all group"
              >
                <div className="text-cyan-500 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">How We Work</h2>
            <p className="text-xl text-slate-600">Our streamlined process ensures quality results</p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Initial assessment and needs analysis" },
              { step: "02", title: "Planning", desc: "Detailed design and project planning" },
              { step: "03", title: "Approval", desc: "Review and finalize all specifications" },
              { step: "04", title: "Installation", desc: "Expert installation by certified team" },
              { step: "05", title: "Support", desc: "Ongoing maintenance and support" }
            ].map((item, idx) => (
              <div key={idx} className="text-center relative">
                <div className="  bg-cyan-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
                {idx < 4 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-slate-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div>
              <img src="/inspection.jpg" alt="" />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Why Choose Our Services
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                We're committed to delivering exceptional quality and service at every step.
              </p>
              <div className="space-y-4">
                {[
                  "15+ years of industry experience",
                  "Certified and insured technicians",
                  "Competitive pricing with transparent quotes",
                  "Premium quality materials and components",
                  "Comprehensive warranty coverage",
                  "24/7 emergency support available"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-slate-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
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
            Contact us today to discuss your elevator needs and get a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center group text-lg">
              Request Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-cyan-500 text-cyan-500 px-8 py-4 rounded-lg hover:bg-cyan-50 transition-all text-lg">
              Call Us Now
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

export default Services;