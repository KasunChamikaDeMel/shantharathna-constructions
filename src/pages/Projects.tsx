import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from 'lucide-react';
const Projects = () => {
  const [filter, setFilter] = useState('all');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const projects = [{
    id: 1,
    title: 'An Iron Roof for a Stores building',
    location: 'Colombo',
    category: 'commercial',
    image: '/images/ironroof.jpg',
    description: 'A modern stores building with a durable iron roof, designed for optimal space utilization and energy efficiency.',
    year: '2024',
    status: 'Completed'
  }, {
    id: 2,
    title: 'Iron Grill Gate',
    location: 'Colombo',
    category: 'commercial',
    image: '/images/irongrillgate.jpg',
    description: 'A custom-designed iron grill gate for a commercial property, combining security with aesthetic appeal.',
    year: '2023',
    status: 'Completed'
  }, {
    id: 3,
    title: 'Rolling Shutter for a local shop',
    location: 'Colombo',
    category: 'commercial',
    image: '/images/rollingshutter.jpg',
    description: 'A robust rolling shutter installation for a local shop, providing security and ease of use.',
    year: '2025',
    status: 'Completed'
  }, {
    id: 4,
    title: 'Metallic Square Case',
    location: 'Clothing Store',
    category: 'commercial',
    image: '/images/metalsquarecase.jpg',
    description: 'A stylish metallic square case for a clothing store, designed to showcase products while ensuring durability and security.',
    year: '2025',
    status: 'Completed'
  }, {
    id: 5,
    title: 'Metallic Roof for a Residential Complex',
    location: 'Colombo',
    category: 'residential',
    image: '/images/metallicroof.jpg',
    description: 'A sleek metallic roof installation for a residential complex, enhancing durability and modern aesthetics.Both Ground and first floors and square case are included',
    year: '2024',
    status: 'Completed'
  },{
    id: 6,
    title: 'Roller Gate for a Shop',
    location: 'Colombo',
    category: 'commercial',
    image: '/images/rollergate.jpg',
    description: 'A robust roller gate installation for a retail shop, enhancing security and accessibility.',
    year: '2024',
    status: 'Completed'
  }, {
    id: 7,
    title: 'Metallic Grill covers for residential building',
    location: 'Colombo',
    category: 'residential',
    image: '/images/metallicgrills.jpg',
    description: 'Elegant metallic grill covers for a residential building, providing security while maintaining an aesthetic appeal.',
    year: '2024',
    status: 'Completed'
  }];
  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);
  
  return <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="/images/projectscover.avif" alt="Construction project" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Projects Portfolio
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore our diverse range of construction projects showcasing our
              expertise, quality, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-10">
            <div className="inline-flex flex-wrap justify-center gap-2 bg-gray-100 p-2 rounded-lg">
              <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-md transition-colors ${filter === 'all' ? 'bg-amber-600 text-white' : 'hover:bg-gray-200 text-gray-700'}`}>
                All Projects
              </button>
              <button onClick={() => setFilter('commercial')} className={`px-4 py-2 rounded-md transition-colors ${filter === 'commercial' ? 'bg-amber-600 text-white' : 'hover:bg-gray-200 text-gray-700'}`}>
                Commercial
              </button>
              <button onClick={() => setFilter('residential')} className={`px-4 py-2 rounded-md transition-colors ${filter === 'residential' ? 'bg-amber-600 text-white' : 'hover:bg-gray-200 text-gray-700'}`}>
                Residential
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => <div key={project.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {project.status}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {project.title}
                    </h3>
                    <span className="text-gray-500 text-sm">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    <span className="font-medium">Location:</span>{' '}
                    {project.location}
                  </p>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full capitalize">
                      {project.category}
                    </span>
                    <a href="#" className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors">
                      View Details
                      <ArrowRightIcon className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  500+
                </div>
                <div className="text-gray-700 font-medium">
                  Projects Completed
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  20+
                </div>
                <div className="text-gray-700 font-medium">
                  Years Experience
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  500+
                </div>
                <div className="text-gray-700 font-medium">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Ongoing Projects
            </h2>
            <p className="text-gray-600">
              Take a look at some of our current construction projects in
              progress.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-full">
                  <img src="" alt="Iron Roof" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Iron Roof for a Residential Building
                  </h3>
                  <p className="text-amber-600 mb-4">75% Complete</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                    <div className="bg-amber-600 h-2.5 rounded-full" style={{
                    width: '75%'
                  }}></div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    An iron roof for a residential building with innovative design,
                    sustainable features, and employee-centric spaces.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span>Location:</span>
                      <span className="font-medium">Colombo District</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Started:</span>
                      <span className="font-medium">June 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Expected Completion:</span>
                      <span className="font-medium">July 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-full">
                  <img src="" alt="Rolling Shutter" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Rolling Shutter for a Local Shop
                  </h3>
                  <p className="text-amber-600 mb-4">60% Complete</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                    <div className="bg-amber-600 h-2.5 rounded-full" style={{
                    width: '60%'
                  }}></div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    A rolling shutter installation for a local shop, designed for
                    security and ease of use.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span>Location:</span>
                      <span className="font-medium">Colombo District</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Started:</span>
                      <span className="font-medium">July 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Expected Completion:</span>
                      <span className="font-medium">July 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Project Approach
            </h2>
            <p className="text-gray-600">
              We follow a systematic process to ensure successful project
              delivery from concept to completion.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200"></div>
              {/* Timeline items */}
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center mb-16">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Initial Consultation
                    </h3>
                    <p className="text-gray-600">
                      We begin by understanding your vision, requirements, and
                      objectives for the project.
                    </p>
                  </div>
                  <div className="bg-amber-500 rounded-full w-10 h-10 flex items-center justify-center border-4 border-white">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12"></div>
                </div>
                <div className="flex flex-col md:flex-row items-center mb-16">
                  <div className="md:w-1/2 md:pr-12"></div>
                  <div className="bg-amber-500 rounded-full w-10 h-10 flex items-center justify-center border-4 border-white">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Planning & Design
                    </h3>
                    <p className="text-gray-600">
                      Our team develops detailed plans, specifications, and
                      designs that align with your goals and budget.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center mb-16">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Pre-Construction
                    </h3>
                    <p className="text-gray-600">
                      We secure necessary permits, finalize contracts, and
                      prepare the site for construction.
                    </p>
                  </div>
                  <div className="bg-amber-500 rounded-full w-10 h-10 flex items-center justify-center border-4 border-white">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12"></div>
                </div>
                <div className="flex flex-col md:flex-row items-center mb-16">
                  <div className="md:w-1/2 md:pr-12"></div>
                  <div className="bg-amber-500 rounded-full w-10 h-10 flex items-center justify-center border-4 border-white">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Construction
                    </h3>
                    <p className="text-gray-600">
                      Our skilled team executes the project with precision,
                      adhering to timelines and quality standards.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Project Completion
                    </h3>
                    <p className="text-gray-600">
                      We conduct final inspections, address any punch list
                      items, and hand over the completed project.
                    </p>
                  </div>
                  <div className="bg-amber-500 rounded-full w-10 h-10 flex items-center justify-center border-4 border-white">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12"></div>
                </div>
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
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/quote" className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-md text-lg font-medium transition-colors">
                Get a Free Quotation
              </a>
              <a href="/contact" className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Projects;