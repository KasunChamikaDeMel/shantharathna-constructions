import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const RequestQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    location: '',
    budget: '',
    timeline: '',
    description: '',
    hearAbout: '',
    files: null
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
  const handleFileChange = e => {
    setFormData(prev => ({
      ...prev,
      files: e.target.files
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log('Quote request submitted:', formData);
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      location: '',
      budget: '',
      timeline: '',
      description: '',
      hearAbout: '',
      files: null
    });
  };
  return <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Construction plans" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Request a Quote
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Fill out the form below to get a free, no-obligation quote for
              your construction project.
            </p>
          </div>
        </div>
      </section>
      {/* Quote Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {formSubmitted ? <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Thank You for Your Quote Request!
                  </h2>
                  <p className="text-gray-600 mb-8">
                    We've received your project details and will review them
                    promptly. One of our team members will contact you within
                    24-48 hours to discuss your project in more detail and
                    provide you with a comprehensive quote.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                      Return to Home
                    </Link>
                    <Link to="/projects" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-md font-medium transition-colors">
                      View Our Projects
                    </Link>
                  </div>
                </div>
              </div> : <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Project Details
                </h2>
                <p className="text-gray-600 mb-8">
                  Please provide as much detail as possible about your project
                  to help us prepare an accurate quote.
                </p>
                <form onSubmit={handleSubmit}>
                  {/* Personal Information */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                          Full Name
                        </label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" required />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                          Company Name (if applicable)
                        </label>
                        <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
                      </div>
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
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" required />
                      </div>
                    </div>
                  </div>
                  {/* Project Information */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Project Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="projectType" className="block text-gray-700 font-medium mb-2">
                          Project Type
                        </label>
                        <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" required>
                          <option value="">Select a project type</option>
                          <option value="Commercial Construction">
                            Commercial Construction
                          </option>
                          <option value="Residential Construction">
                            Residential Construction
                          </option>
                          <option value="Renovation">
                            Renovation & Remodeling
                          </option>
                          <option value="Infrastructure">
                            Road & Bridge Construction
                          </option>
                          <option value="Electrical & Plumbing">
                            Electrical & Plumbing
                          </option>
                          <option value="Interior Finishing">
                            Interior Finishing
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
                          Project Location
                        </label>
                        <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" required />
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-gray-700 font-medium mb-2">
                          Estimated Budget
                        </label>
                        <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                          <option value="">Select budget range</option>
                          <option value="Under $50,000">Under $50,000</option>
                          <option value="$50,000 - $100,000">
                            $50,000 - $100,000
                          </option>
                          <option value="$100,000 - $250,000">
                            $100,000 - $250,000
                          </option>
                          <option value="$250,000 - $500,000">
                            $250,000 - $500,000
                          </option>
                          <option value="$500,000 - $1,000,000">
                            $500,000 - $1,000,000
                          </option>
                          <option value="Over $1,000,000">
                            Over $1,000,000
                          </option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-gray-700 font-medium mb-2">
                          Desired Timeline
                        </label>
                        <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                          <option value="">Select timeline</option>
                          <option value="As soon as possible">
                            As soon as possible
                          </option>
                          <option value="Within 1-3 months">
                            Within 1-3 months
                          </option>
                          <option value="Within 3-6 months">
                            Within 3-6 months
                          </option>
                          <option value="Within 6-12 months">
                            Within 6-12 months
                          </option>
                          <option value="More than 12 months">
                            More than 12 months
                          </option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                        Project Description
                      </label>
                      <textarea id="description" name="description" rows="5" value={formData.description} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Please provide details about your project, including size, scope, special requirements, etc." required></textarea>
                    </div>
                  </div>
                  {/* Additional Information */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Additional Information
                    </h3>
                    <div className="mb-6">
                      <label htmlFor="files" className="block text-gray-700 font-medium mb-2">
                        Upload Plans or Documents (optional)
                      </label>
                      <input type="file" id="files" name="files" onChange={handleFileChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" multiple />
                      <p className="text-sm text-gray-500 mt-1">
                        You can upload multiple files (max 10MB each) - PDF,
                        JPG, PNG formats accepted
                      </p>
                    </div>
                    <div>
                      <label htmlFor="hearAbout" className="block text-gray-700 font-medium mb-2">
                        How did you hear about us?
                      </label>
                      <select id="hearAbout" name="hearAbout" value={formData.hearAbout} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                        <option value="">Please select</option>
                        <option value="Search Engine">
                          Search Engine (Google, Bing, etc.)
                        </option>
                        <option value="Social Media">Social Media</option>
                        <option value="Referral">
                          Referral from Friend/Colleague
                        </option>
                        <option value="Previous Client">Previous Client</option>
                        <option value="Advertisement">Advertisement</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-start">
                      <input type="checkbox" id="terms" name="terms" className="mt-1 h-4 w-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500" required />
                      <label htmlFor="terms" className="ml-2 block text-gray-700">
                        I agree to the{' '}
                        <a href="#" className="text-amber-600 hover:underline">
                          Terms & Conditions
                        </a>{' '}
                        and understand that my information will be processed in
                        accordance with the{' '}
                        <a href="#" className="text-amber-600 hover:underline">
                          Privacy Policy
                        </a>
                        .
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-medium transition-colors w-full">
                    Submit Quote Request
                  </button>
                </form>
              </div>}
            <div className="mt-12 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                What Happens Next?
              </h3>
              <ol className="space-y-4">
                <li className="flex">
                  <div className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <span className="text-sm font-medium">1</span>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-800">Review:</span>{' '}
                    Our team will review your project details within 24-48
                    hours.
                  </p>
                </li>
                <li className="flex">
                  <div className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <span className="text-sm font-medium">2</span>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-800">
                      Consultation:
                    </span>{' '}
                    We'll contact you to discuss your project in more detail and
                    address any questions.
                  </p>
                </li>
                <li className="flex">
                  <div className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <span className="text-sm font-medium">3</span>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-800">
                      Quote Preparation:
                    </span>{' '}
                    Based on your requirements, we'll prepare a detailed quote
                    for your project.
                  </p>
                </li>
                <li className="flex">
                  <div className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <span className="text-sm font-medium">4</span>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-800">
                      Presentation:
                    </span>{' '}
                    We'll present the quote to you and explain all aspects of
                    the proposed work.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      {/* Additional Information */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Choose Shantharathna Constructions
            </h2>
            <p className="text-gray-600">
              When you partner with us, you're choosing quality, reliability,
              and excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Quality Guarantee
              </h3>
              <p className="text-gray-600">
                We stand behind our work with comprehensive guarantees and use
                only the finest materials.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                On-Time Delivery
              </h3>
              <p className="text-gray-600">
                We understand the importance of deadlines and are committed to
                completing projects on schedule.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Transparent Pricing
              </h3>
              <p className="text-gray-600">
                Our quotes are detailed and transparent, with no hidden costs or
                unexpected surprises.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-gray-600">
              Don't just take our word for it. Here's what some of our satisfied
              clients have to say.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Robert Johnson
                  </h4>
                  <p className="text-gray-600 text-sm">
                    CEO, Johnson Enterprises
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Shantharathna Constructions delivered our office complex ahead
                of schedule and within budget. Their attention to detail and
                quality workmanship exceeded our expectations."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Sarah Williams
                  </h4>
                  <p className="text-gray-600 text-sm">Homeowner</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "We hired Shantharathna to build our dream home, and they made
                the entire process smooth and stress-free. The craftsmanship is
                outstanding, and we couldn't be happier with the results."
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/testimonials" className="text-amber-600 font-medium hover:text-amber-700 transition-colors">
              Read More Testimonials →
            </Link>
          </div>
        </div>
      </section>
    </>;
};
export default RequestQuote;