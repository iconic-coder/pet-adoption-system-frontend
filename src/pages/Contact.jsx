import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold gradient-text mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about adoption, volunteering, or our services? We'd love to hear from you!
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">123 Pet Adoption Street<br />Nairobi, Kenya 00100</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+254 700 123 456</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <span className="text-2xl">✉️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">info@pawadoption.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <span className="text-2xl">🕰️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Facebook
                </button>
                <button className="bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition-colors">
                  Instagram
                </button>
                <button className="bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-500 transition-colors">
                  Twitter
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="adoption">Adoption Inquiry</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="donation">Donations</option>
                    <option value="general">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">How long does the adoption process take?</h3>
                <p className="text-gray-600">The adoption process typically takes 3-7 days, including application review, meet and greet, and home visit.</p>
              </div>
            </div>
            <div className="card">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">What are the adoption fees?</h3>
                <p className="text-gray-600">Adoption fees vary by pet type and age, ranging from $50-$200. This covers vaccinations, spaying/neutering, and microchipping.</p>
              </div>
            </div>
            <div className="card">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Can I volunteer at the shelter?</h3>
                <p className="text-gray-600">Yes! We welcome volunteers. Contact us to learn about opportunities including dog walking, cat socialization, and administrative help.</p>
              </div>
            </div>
            <div className="card">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Do you accept donations?</h3>
                <p className="text-gray-600">We gratefully accept monetary donations, pet supplies, and food. Contact us for a list of current needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;