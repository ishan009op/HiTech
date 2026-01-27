import React from "react";
import { ArrowRight, Zap, Shield, Wrench, Users, Clock } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: "Fast Installation",
      description: "Professional installation within 2-3 days for minimal disruption.",
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: "Safety Certified",
      description: "All elevators meet international safety standards with warranty.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-cyan-400" />,
      title: "Expert Maintenance",
      description: "24/7 support with regular maintenance to ensure smooth operation.",
    },
  ];

  const products = [
    {
      title: "Residential Elevators",
      description: "Luxury home elevators designed for comfort and style.",
      img: "/home.jpg",
    },
    {
      title: "Commercial Lifts",
      description: "High-capacity solutions for office buildings and retail spaces.",
      img: "/8146.jpg",
    },
    {
      title: "Accessibility Lifts",
      description: "Wheelchair lifts and platform solutions for enhanced mobility.",
      img: "/accessibility.jpg",
    },
  ];

  const work = [
    { img: "/8146.jpg" },
    { img: "/home.jpg" },
    { img: "/installation.jpg" },
    { img: "/accessibility.jpg" },
  ];

  return (
    <div className=" bg-slate-100 font-sans">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/8146.jpg"
          alt="Elevator Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Elevate Your <span className="text-cyan-400">Space</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Premium elevator solutions for residential, commercial, and
            accessibility projects. Cutting-edge technology and timeless design.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-cyan-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 transition flex items-center gap-2">
              Explore Solutions <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-950 hover:text-white transition font-semibold">
              Watch Demo
            </button>
          </div>

          {/* Hero Stats */}
          <div className="mt-16 flex justify-center gap-12 flex-wrap">
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 min-w-[120px]">
              <div className="text-3xl font-bold text-cyan-400">15+</div>
              <div className="text-sm text-slate-300">Years Experience</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 min-w-[120px]">
              <div className="text-3xl font-bold text-cyan-400">2500+</div>
              <div className="text-sm text-slate-300">Installations</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 min-w-[120px]">
              <div className="text-3xl font-bold text-cyan-400">98%</div>
              <div className="text-sm text-slate-300">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 ">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold  mb-8">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-slate-300 bg-opacity-40 backdrop-blur-md p-8 rounded-xl hover:scale-105 transition-all"
              >
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
                <p className="text-slate-600">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 ">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold  mb-8">Our Products</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {products.map((p, i) => (
              <div
                key={i}
                className="bg-slate-800  backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-slate-300 mb-4">{p.description}</p>
                  <button className="text-cyan-400 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold  mb-8">Our Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {work.map((w, i) => (
              <img
                key={i}
                src={w.img}
                alt="Project"
                className="w-full h-64 object-cover rounded-xl hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Elevate Your Space?
          </h2>
          <p className="text-lg mb-8">
            Contact our experts today for a free consultation and quote.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2">
              Get Free Quote <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition font-semibold">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
