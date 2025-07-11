import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BuildingIcon, HomeIcon, WrenchIcon, PaintBucketIcon, ZapIcon, CheckCircleIcon, ArrowRightIcon } from 'lucide-react';
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>
<section className="relative h-screen flex items-center justify-center bg-black">
  <div className="absolute inset-0 z-0 bg-gray-100"></div>

  <div className="container mx-auto px-4 z-10 h-full flex items-center">
    {/* block */}
    <div className="w-1/2 flex items-center justify-center">
      <div className="bg-white rounded-full p-8 shadow-lg w-96 h-96 flex items-center justify-center">
        <img src="/icons/logo.png" alt="Logo" className="w-96 h-96 object-contain" />
      </div>
    </div>

    {/* Text and buttons */}
    <div className="w-1/2 text-left">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
        Building the Future, <br />
        <span className="text-amber-500">Restoring the Past</span>
      </h1>
      <p className="text-xl md:text-2xl text-black mb-8 max-w-lg">
        Quality construction services for residential and commercial
        projects since 2003.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/quote" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors">
          Get a Free Quotation
        </Link>
        <Link to="/projects" className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-md text-lg font-medium transition-colors">
          View Our Projects
        </Link>
      </div>
    </div>
  </div>
</section>





      {/* About Brief Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Construction team" className="rounded-lg shadow-lg w-full h-[400px] object-cover" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <span className="text-amber-600">20+ Years</span> of Excellence
                in Construction
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Shantharathna Constructions has been delivering exceptional
                construction services since 2003. We've built our reputation on
                quality craftsmanship, timely delivery, and customer
                satisfaction.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-amber-600 mr-2 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Quality Guarantee
                    </h3>
                    <p className="text-gray-600">We stand behind our work</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-amber-600 mr-2 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Certified Team
                    </h3>
                    <p className="text-gray-600">Experienced professionals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-amber-600 mr-2 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      On-Time Delivery
                    </h3>
                    <p className="text-gray-600">We respect your schedule</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-amber-600 mr-2 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Best Materials
                    </h3>
                    <p className="text-gray-600">Superior quality supplies</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors">
                Learn more about us
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of construction services to meet
              all your building needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <BuildingIcon className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Commercial Construction
              </h3>
              <p className="text-gray-600 mb-4">
                Office buildings, retail spaces, and industrial facilities built
                to the highest standards.
              </p>
              <Link to="/services" className="text-amber-600 font-medium hover:text-amber-700 transition-colors inline-flex items-center">
                Learn more
                <ArrowRightIcon className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <HomeIcon className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Residential Construction
              </h3>
              <p className="text-gray-600 mb-4">
                Custom homes and residential developments that reflect your
                unique style and needs.
              </p>
              <Link to="/services" className="text-amber-600 font-medium hover:text-amber-700 transition-colors inline-flex items-center">
                Learn more
                <ArrowRightIcon className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <div className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Road & Bridge Construction
              </h3>
              <p className="text-gray-600 mb-4">
                Infrastructure projects built for durability, safety, and
                long-term performance.
              </p>
              <Link to="/services" className="text-amber-600 font-medium hover:text-amber-700 transition-colors inline-flex items-center">
                Learn more
                <ArrowRightIcon className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <WrenchIcon className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Renovations & Remodeling
              </h3>
              <p className="text-gray-600 mb-4">
                Transform your existing space with our expert renovation and
                remodeling services.
              </p>
              <Link to="/services" className="text-amber-600 font-medium hover:text-amber-700 transition-colors inline-flex items-center">
                Learn more
                <ArrowRightIcon className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <ZapIcon className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Electrical & Plumbing
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive electrical and plumbing solutions for new
                constructions and renovations.
              </p>
              <Link to="/services" className="text-amber-600 font-medium hover:text-amber-700 transition-colors inline-flex items-center">
                Learn more
                <ArrowRightIcon className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <PaintBucketIcon className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Interior Finishing
              </h3>
              <p className="text-gray-600 mb-4">
                High-quality interior finishes that add beauty and value to your
                property.
              </p>
              <Link to="/services" className="text-amber-600 font-medium hover:text-amber-700 transition-colors inline-flex items-center">
                Learn more
                <ArrowRightIcon className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>



      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent construction projects that
              showcase our expertise and quality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg shadow-md">
              <img src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Modern Office Building" className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Modern Office Complex
                </h3>
                <p className="text-gray-300 mb-4">Downtown Business District</p>
                <Link to="/projects" className="inline-flex items-center text-amber-400 font-medium hover:text-amber-300 transition-colors">
                  View Project
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-md">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Luxury Residence" className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Luxury Residential Villa
                </h3>
                <p className="text-gray-300 mb-4">Hillside Estates</p>
                <Link to="/projects" className="inline-flex items-center text-amber-400 font-medium hover:text-amber-300 transition-colors">
                  View Project
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-md">
              <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Highway Bridge" className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Highway Bridge Project
                </h3>
                <p className="text-gray-300 mb-4">Riverside Expressway</p>
                <Link to="/projects" className="inline-flex items-center text-amber-400 font-medium hover:text-amber-300 transition-colors">
                  View Project
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link to="/projects" className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      {/* Testimonial Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We take pride in our work and the satisfaction of our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" className="w-14 h-14 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Robert Johnson
                  </h4>
                  <p className="text-gray-600 text-sm">
                    CEO, Johnson Enterprises
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Shantharathna Constructions delivered our office complex ahead
                of schedule and within budget. Their attention to detail and
                quality workmanship exceeded our expectations."
              </p>
              <div className="flex text-amber-500 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" className="w-14 h-14 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Sarah Williams
                  </h4>
                  <p className="text-gray-600 text-sm">Homeowner</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "We hired Shantharathna to build our dream home, and they made
                the entire process smooth and stress-free. The craftsmanship is
                outstanding, and we couldn't be happier with the results."
              </p>
              <div className="flex text-amber-500 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Client" className="w-14 h-14 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-800">Michael Chen</h4>
                  <p className="text-gray-600 text-sm">
                    Director, Chen Properties
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "We've worked with many construction companies over the years,
                but Shantharathna stands out for their professionalism and
                commitment to excellence. They're now our go-to contractor."
              </p>
              <div className="flex text-amber-500 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link to="/testimonials" className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Read More Testimonials
            </Link>
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
              Contact us today to discuss your project requirements and get a
              free quote.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/quote" className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-md text-lg font-medium transition-colors">
                Get a Free Quote
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Partners/Clients Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-semibold text-gray-700 text-center mb-8">
            Trusted By Leading Companies
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Client Logo" className="max-h-full max-w-full" />
            </div>
            <div className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png" alt="Client Logo" className="max-h-full max-w-full" />
            </div>
            <div className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Client Logo" className="max-h-full max-w-full" />
            </div>
            <div className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Marriott_International_logo.svg/2560px-Marriott_International_logo.svg.png" alt="Client Logo" className="max-h-full max-w-full" />
            </div>
            <div className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" alt="Client Logo" className="max-h-12 max-w-full" />
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Home;