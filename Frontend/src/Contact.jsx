import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+1 (234) 567-890", "+1 (234) 567-891"],
      action: "Call us"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@elevatelifts.com", "support@elevatelifts.com"],
      action: "Email us"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office Location",
      details: ["123 Elevator Street", "Suite 100, City, State 12345"],
      action: "Get directions"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
      action: "24/7 Emergency"
    }
  ];

  const departments = [
    {
      name: "Sales",
      email: "sales@elevatelifts.com",
      phone: "+1 (234) 567-890",
      description: "New installations and product inquiries"
    },
    {
      name: "Support",
      email: "support@elevatelifts.com",
      phone: "+1 (234) 567-891",
      description: "Existing customer service and maintenance"
    },
    {
      name: "Emergency",
      email: "emergency@elevatelifts.com",
      phone: "+1 (234) 567-999",
      description: "24/7 emergency elevator service"
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
              Get In <span className="text-cyan-500">Touch</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Have questions? We're here to help. Reach out to our team and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-all"
              >
                <div className="inline-block p-3 bg-cyan-500 rounded-lg text-white mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-slate-600 mb-1">{detail}</p>
                ))}
                <button className="text-cyan-500 font-semibold text-sm mt-3 hover:underline">
                  {info.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form & Map */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
              <p className="text-slate-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-4">
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
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="+1 (234) 567-890"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="maintenance">Maintenance Service</option>
                    <option value="quote">Request a Quote</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-cyan-500 text-white px-6 py-4 rounded-lg hover:bg-cyan-600 transition-all shadow-lg hover:shadow-xl font-semibold flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl shadow-lg h-96 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-slate-400" />
                  <p className="text-slate-500 text-lg">Map Location</p>
                  <p className="text-slate-400 text-sm">Embed Google Maps here</p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-slate-600 mb-6">
                  For urgent matters or emergency service, call us directly.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-3 text-slate-700 hover:text-cyan-500 transition"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">+1 (234) 567-890</span>
                  </a>
                  <a
                    href="mailto:info@elevatelifts.com"
                    className="flex items-center gap-3 text-slate-700 hover:text-cyan-500 transition"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="font-semibold">info@elevatelifts.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Contact by Department
            </h2>
            <p className="text-xl text-slate-600">Reach the right team for your specific needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {departments.map((dept, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-all"
              >
                <div className="inline-block p-3 bg-cyan-500 rounded-lg mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{dept.name}</h3>
                <p className="text-slate-600 mb-4">{dept.description}</p>
                <div className="space-y-2 text-sm">
                  <p className="text-slate-700">
                    <span className="font-semibold">Email:</span> {dept.email}
                  </p>
                  <p className="text-slate-700">
                    <span className="font-semibold">Phone:</span> {dept.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Before You Contact Us
            </h2>
            <p className="text-xl text-slate-600">Your question might already be answered</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What's your typical response time?",
                a: "We respond to all inquiries within 24 hours during business days. Emergency service requests are handled immediately."
              },
              {
                q: "Do you offer free consultations?",
                a: "Yes! We provide free on-site consultations and quotes for all elevator projects."
              },
              {
                q: "What areas do you serve?",
                a: "We serve the entire tri-state area with full installation and maintenance services. Contact us to confirm service in your area."
              },
              {
                q: "How do I schedule emergency service?",
                a: "Call our emergency hotline at +1 (234) 567-999 for immediate assistance 24/7."
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

export default Contact;