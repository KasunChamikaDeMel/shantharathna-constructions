import React, { useEffect, useState, lazy } from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from 'lucide-react';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };
  return <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1542744173-8659b8e39c0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1802&q=80" alt="Office building" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our team to discuss your construction needs or
              request a quote.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-amber-100 p-4 rounded-full mb-4">
                <MapPinIcon className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Our Location
              </h3>
              <p className="text-gray-600">
                123 Construction Ave
                <br />
                Building City, State 12345
                <br />
                United States
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-amber-100 p-4 rounded-full mb-4">
                <PhoneIcon className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Phone Numbers
              </h3>
              <p className="text-gray-600">
                Main Office: +1 (234) 567-890
                <br />
                Customer Service: +1 (234) 567-891
                <br />
                Emergency: +1 (234) 567-892
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-amber-100 p-4 rounded-full mb-4">
                <ClockIcon className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Business Hours
              </h3>
              <p className="text-gray-600">
                Monday - Friday: 8:00 AM - 5:00 PM
                <br />
                Saturday: 9:00 AM - 1:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Send Us a Message
                </h2>
                {formSubmitted ? <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md mb-6">
                    <p>
                      Thank you for your message! We'll get back to you shortly.
                    </p>
                  </div> : null}
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email Address
                      </label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Phone Number
                      </label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" required />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Your Message
                    </label>
                    <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" required></textarea>
                  </div>
                  <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium transition-colors w-full">
                    Send Message
                  </button>
                </form>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Our Location
                </h2>
                {/* Google Map Embed - Replace with actual embed code in production */}
                <div className="w-full h-[400px] bg-gray-200 rounded-md mb-6">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986548248684!3d40.697149419326654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1627309371664!5m2!1sen!2sca" width="100%" height="100%" style={{
                  border: 0
                }} allowFullScreen="" loading="lazy" title="Google Maps" className="rounded-md"></iframe>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPinIcon className="h-5 w-5 text-amber-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Address</h4>
                      <p className="text-gray-600">
                        123 Construction Ave, Building City, State 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MailIcon className="h-5 w-5 text-amber-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">info@shantharathna.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <PhoneIcon className="h-5 w-5 text-amber-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">+1 (234) 567-890</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Find answers to common questions about our services and
                processes.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  How do I request a quote for my project?
                </h3>
                <p className="text-gray-600">
                  You can request a quote by filling out our online quote form,
                  calling our office directly, or sending us an email with
                  details about your project. We'll get back to you within 24-48
                  hours to discuss your requirements.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  What areas do you serve?
                </h3>
                <p className="text-gray-600">
                  We primarily serve the Building City metropolitan area and
                  surrounding suburbs within a 50-mile radius. For larger
                  projects, we're open to discussing opportunities in other
                  regions as well.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Are you licensed and insured?
                </h3>
                <p className="text-gray-600">
                  Yes, Shantharathna Constructions is fully licensed, bonded,
                  and insured. We maintain comprehensive insurance coverage,
                  including general liability and workers' compensation, to
                  protect our clients and employees.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  How long does a typical construction project take?
                </h3>
                <p className="text-gray-600">
                  Project timelines vary significantly based on size,
                  complexity, and scope. A small renovation might take a few
                  weeks, while a large commercial building could take many
                  months. During our initial consultation, we'll provide a
                  detailed timeline specific to your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-amber-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Construction Project?
            </h2>
            <p className="text-amber-100 text-lg mb-8">
              Contact us today to discuss how we can bring your vision to life.
            </p>
            <a href="/quote" className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-md text-lg font-medium transition-colors inline-block">
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>
    </>;
};
export default Contact;