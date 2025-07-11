import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from 'lucide-react';
const Projects = () => {
  const [filter, setFilter] = useState('all');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const projects = [{
    id: 1,
    title: 'Modern Office Complex',
    location: 'Downtown Business District',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    description: 'A 12-story modern office building with sustainable features and state-of-the-art facilities.',
    year: '2022',
    status: 'Completed'
  }, {
    id: 2,
    title: 'Luxury Residential Villa',
    location: 'Hillside Estates',
    category: 'residential',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    description: 'A 6-bedroom luxury villa with panoramic views, infinity pool, and smart home technology.',
    year: '2021',
    status: 'Completed'
  }, {
    id: 3,
    title: 'Highway Bridge Project',
    location: 'Riverside Expressway',
    category: 'infrastructure',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    description: 'A 500-meter cable-stayed bridge connecting major highways, designed for heavy traffic and seismic stability.',
    year: '2023',
    status: 'Completed'
  }, {
    id: 4,
    title: 'Shopping Mall Renovation',
    location: 'City Center',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80',
    description: 'Complete renovation and expansion of a 20-year-old shopping mall, adding modern amenities and increasing retail space.',
    year: '2022',
    status: 'Completed'
  }, {
    id: 5,
    title: 'Apartment Complex',
    location: 'Suburban Heights',
    category: 'residential',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    description: 'A modern residential complex with 150 units, community facilities, and green spaces.',
    year: '2023',
    status: 'Completed'
  }, {
    id: 6,
    title: 'Hospital Expansion',
    location: 'North Medical District',
    category: 'healthcare',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80',
    description: 'Addition of a new wing with 100 beds and state-of-the-art medical facilities to an existing hospital.',
    year: '2021',
    status: 'Completed'
  }, {
    id: 7,
    title: 'Corporate Headquarters',
    location: 'Financial District',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1577760258779-e787a1733016?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    description: 'A 25-story corporate headquarters with innovative design, sustainable features, and employee-centric spaces.',
    year: '2023',
    status: 'In Progress'
  }, {
    id: 8,
    title: 'Waterfront Residential Development',
    location: 'Harbor View',
    category: 'residential',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    description: 'A luxury waterfront development with 50 townhouses and extensive community amenities.',
    year: '2023',
    status: 'In Progress'
  }, {
    id: 9,
    title: 'Urban Road Reconstruction',
    location: 'Downtown Metro Area',
    category: 'infrastructure',
    image: 'https://images.unsplash.com/photo-1532799755889-1247a1b7f10d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    description: 'Comprehensive reconstruction of 5 miles of urban roads, including utilities, sidewalks, and traffic systems.',
    year: '2022',
    status: 'Completed'
  }];
  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);
  return <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Construction project" className="w-full h-full object-cover" />
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
              <button onClick={() => setFilter('infrastructure')} className={`px-4 py-2 rounded-md transition-colors ${filter === 'infrastructure' ? 'bg-amber-600 text-white' : 'hover:bg-gray-200 text-gray-700'}`}>
                Infrastructure
              </button>
              <button onClick={() => setFilter('healthcare')} className={`px-4 py-2 rounded-md transition-colors ${filter === 'healthcare' ? 'bg-amber-600 text-white' : 'hover:bg-gray-200 text-gray-700'}`}>
                Healthcare
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
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
                  50+
                </div>
                <div className="text-gray-700 font-medium">Awards Won</div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  300+
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
                  <img src="https://images.unsplash.com/photo-1577760258779-e787a1733016?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Corporate Headquarters" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Corporate Headquarters
                  </h3>
                  <p className="text-amber-600 mb-4">75% Complete</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                    <div className="bg-amber-600 h-2.5 rounded-full" style={{
                    width: '75%'
                  }}></div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    A 25-story corporate headquarters with innovative design,
                    sustainable features, and employee-centric spaces.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span>Location:</span>
                      <span className="font-medium">Financial District</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Started:</span>
                      <span className="font-medium">January 2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Expected Completion:</span>
                      <span className="font-medium">December 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-full">
                  <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Waterfront Residential Development" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Waterfront Residential Development
                  </h3>
                  <p className="text-amber-600 mb-4">60% Complete</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                    <div className="bg-amber-600 h-2.5 rounded-full" style={{
                    width: '60%'
                  }}></div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    A luxury waterfront development with 50 townhouses and
                    extensive community amenities.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span>Location:</span>
                      <span className="font-medium">Harbor View</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Started:</span>
                      <span className="font-medium">March 2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Expected Completion:</span>
                      <span className="font-medium">February 2024</span>
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
                Get a Free Quote
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