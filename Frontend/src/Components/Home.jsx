import React from 'react';
import { ArrowRight, Zap, Shield, Wrench, Award, Users, Clock } from 'lucide-react';

const Home = () => {

const work=[
  {
    img:"/8146.jpg"
  },
  {
    img:"/home.jpg"
  },
  {
    img:"/installation.jpg"
  },
  {
    img:"/accessibility.jpg"
  }
]



  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Installation",
      description: "Professional installation completed within 2-3 days with minimal disruption."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety Certified",
      description: "All lifts meet international safety standards with comprehensive warranty."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Expert Maintenance",
      description: "24/7 support and regular maintenance to keep your lift running smoothly."
    }
  ];

  const products = [
    {
      title: "Residential Elevators",
      description: "Luxury home elevators designed for comfort and style",
     img:"/home.jpg"
    },
    {
      title: "Commercial Lifts",
      description: "High-capacity solutions for office buildings and retail spaces",
       img:"/8146.jpg"
    },
    {
      title: "Accessibility Lifts",
      description: "Wheelchair lifts and platform solutions for enhanced mobility",
      img:"accessibility.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-100 to-cyan-50 min-h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div 
              className="space-y-6"
              style={{
                opacity: 0,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                Elevate Your <span className="text-cyan-500">Space</span>
              </h1>
              
              <p 
                className="text-xl text-slate-600"
                style={{
                  opacity: 0,
                  animation: 'fadeInUp 0.8s ease-out 0.2s forwards'
                }}
              >
                Premium lift solutions for residential and commercial properties. Experience seamless vertical transportation with cutting-edge technology and timeless design.
              </p>
              
              <div 
                className="flex flex-col sm:flex-row gap-4"
                style={{
                  opacity: 0,
                  animation: 'fadeInUp 0.8s ease-out 0.4s forwards'
                }}
              >
                <button className="bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition flex items-center justify-center group">
                  Explore Solutions
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:border-cyan-500 hover:text-cyan-500 transition">
                  Watch Demo
                </button>
              </div>

              {/* Stats Mini Cards */}
              <div 
                className="flex gap-6 pt-6"
                style={{
                  opacity: 0,
                  animation: 'fadeInUp 0.8s ease-out 0.6s forwards'
                }}
              >
                <div>
                  <div className="text-3xl font-bold text-cyan-500">15+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-500">2500+</div>
                  <div className="text-sm text-slate-600">Installations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-500">98%</div>
                  <div className="text-sm text-slate-600">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div 
              className="relative"
              style={{
                opacity: 0,
                animation: 'fadeInRight 0.8s ease-out 0.3s forwards'
              }}
            >
              <img src="/hero.jpg" className='m-5' alt="" />
              {/* Floating Badge */}
              <div 
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg"
                style={{
                  opacity: 0,
                  animation: 'slideUp 0.8s ease-out 0.8s forwards'
                }}
              >
                <div className="text-3xl font-bold text-cyan-500">15+</div>
                <div className="text-slate-600">Years Experience</div>
              </div>

              {/* Decorative Elements */}
          
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full opacity-5 blur-3xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We combine innovation, reliability, and exceptional service to deliver lift solutions that exceed expectations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-all group"
              >
                <div className="text-cyan-500 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Products</h2>
            <p className="text-xl text-slate-600">Tailored solutions for every need</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
              >
                {/* Image Placeholder */}
               <img src={product.img} className='w-96 h-96' alt="" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{product.title}</h3>
                  <p className="text-slate-600 mb-4">{product.description}</p>
                  <button className="text-cyan-500 font-semibold flex items-center group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 mr-2" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2500+</div>
              <div className="text-cyan-100">Happy Clients</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Award className="w-8 h-8 mr-2" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-cyan-100">Satisfaction Rate</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-8 h-8 mr-2" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-cyan-100">Support Available</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Shield className="w-8 h-8 mr-2" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-cyan-100">Years in Business</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Process</h2>
            <p className="text-xl text-slate-600">Simple steps to get your lift installed</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Free assessment of your space and needs" },
              { step: "02", title: "Design", desc: "Custom design tailored to your requirements" },
              { step: "03", title: "Installation", desc: "Professional installation in 2-3 days" },
              { step: "04", title: "Support", desc: "Ongoing maintenance and 24/7 support" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className=" bg-cyan-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-slate-600">Don't just take our word for it</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Homeowner",
                quote: "The installation was seamless and the lift has transformed our home. Highly recommend!"
              },
              {
                name: "Michael Chen",
                role: "Property Manager",
                quote: "Professional service from start to finish. Our residents love the new elevators."
              },
              {
                name: "Emily Rodriguez",
                role: "Business Owner",
                quote: "Excellent quality and customer service. The team went above and beyond."
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full"></div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Work</h2>
            <p className="text-xl text-slate-600">Recent installations showcase</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {work.map((item) => (
              
               <img key={item} src={item.img} className='w-64 h-64' alt="" />
              
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Everything you need to know</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "How long does installation take?",
                a: "Typical residential lift installation takes 2-3 days, while commercial projects vary based on building size and complexity."
              },
              {
                q: "What maintenance is required?",
                a: "We recommend quarterly inspections and annual comprehensive maintenance to ensure optimal performance and safety compliance."
              },
              {
                q: "Do you offer financing options?",
                a: "Yes, we partner with leading financial institutions to provide flexible payment plans tailored to your budget."
              },
              {
                q: "What warranty do you provide?",
                a: "All our lifts come with a comprehensive 5-year warranty covering parts and labor, with extended warranty options available."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-slate-900 text-lg mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Elevate Your Space?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Get in touch with our experts today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center group text-lg">
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-cyan-500 text-cyan-500 px-8 py-4 rounded-lg hover:bg-cyan-50 transition-all text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideUp {
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

export default Home;