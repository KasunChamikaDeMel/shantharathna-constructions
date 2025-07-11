import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BuildingIcon, HomeIcon, WrenchIcon, PaintBucketIcon, ZapIcon, ArrowRightIcon } from 'lucide-react';
const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Construction workers" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Construction Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive construction solutions tailored to meet your
              specific needs.
            </p>
          </div>
        </div>
      </section>
      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What We Offer
            </h2>
            <p className="text-gray-600">
              At Shantharathna Constructions, we provide a wide range of
              construction services to meet all your building needs. From
              residential to commercial projects, our team of experts ensures
              quality, timeliness, and excellence in every endeavor.
            </p>
          </div>
        </div>
      </section>
      {/* Commercial Construction */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <BuildingIcon className="h-7 w-7 text-amber-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Commercial Construction
              </h2>
              <p className="text-gray-600 mb-6">
                We specialize in building exceptional commercial spaces that
                combine functionality, aesthetics, and durability. Our
                commercial construction services include office buildings,
                retail spaces, hotels, restaurants, and industrial facilities.
              </p>
              <p className="text-gray-600 mb-6">
                Our experienced team works closely with architects, designers,
                and clients to ensure that every commercial project meets the
                highest standards of quality and efficiency. We understand the
                unique requirements of commercial spaces and deliver solutions
                that enhance productivity and customer experience.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-amber-600">•</div>
                  <span className="text-gray-600">
                    Office Buildings & Corporate Headquarters
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-amber-600">•</div>
                  <span className="text-gray-600">
                    Retail Spaces & Shopping Centers
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-amber-600">•</div>
                  <span className="text-gray-600">
                    Hotels & Hospitality Venues
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-amber-600">•</div>
                  <span className="text-gray-600">
                    Industrial Facilities & Warehouses
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-amber-600">•</div>
                  <span className="text-gray-600">Healthcare Facilities</span>
                </li>
              </ul>
              <Link to="/quote" className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                Request Commercial Service
              </Link>
            </div>
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Commercial construction" className="rounded-lg shadow-lg w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* Residential Construction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <HomeIcon className="h-7 w-7 text-amber-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Residential Construction
              </h2>
              <p className="text-gray-600 mb-6">
                We bring your dream home to life with our comprehensive
                residential construction services. Whether you're looking to
                build a custom home, a luxury villa, or a multi-unit residential
                complex, our team delivers exceptional results that reflect your
                unique style and needs.
              </p>
              <p className="text-gray-600 mb-6">
                Our residential construction process involves close
                collaboration with homeowners to ensure that every detail, from
                the foundation to the finishing touches, meets your
                expectations. We combine quality craftsmanship with innovative
                design to create spaces that are both beautiful and functional.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-amber-600">•</div>
                  <span className="text-gray-600">
                    Custom Home Construction
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-amber-600">•</div>
                  <span className="text-gray-600">Luxury Villas & Estates</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-amber-600">•</div>
                  <span className="text-gray-600">Multi-Family Housing</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-amber-600">•</div>
                  <span className="text-gray-600">
                    Residential Developments
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-amber-600">•</div>
                  <span className="text-gray-600">
                    Sustainable & Green Homes
                  </span>
                </li>
              </ul>
              <Link to="/quote" className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                Request Residential Service
              </Link>
            </div>
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Residential construction" className="rounded-lg shadow-lg w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* Other Services */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Additional Services
            </h2>
            <p className="text-gray-600">
              Beyond our core commercial and residential construction services,
              we offer a range of specialized solutions to meet all your
              construction needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Road & Bridge Construction */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <div className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Road & Bridge Construction
              </h3>
              <p className="text-gray-600 mb-6">
                Our infrastructure division specializes in the construction of
                roads, bridges, and other transportation infrastructure. We
                employ advanced engineering techniques to build durable, safe,
                and efficient transportation networks.
              </p>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-amber-600">•</div>
                  <span className="text-gray-600">
                    Highway & Road Construction
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-amber-600">•</div>
                  <span className="text-gray-600">
                    Bridge Construction & Rehabilitation
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-amber-600">•</div>
                  <span className="text-gray-600">Drainage Systems</span>
                </li>
              </ul>
              <Link to="/quote" className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors">
                Request Service
                <ArrowRightIcon className="h-4 w-4 ml-1" />
              </Link>
            </div>
            {/* Renovations & Remodeling */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <WrenchIcon className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Renovations & Remodeling
              </h3>
              <p className="text-gray-600 mb-6">
                Transform your existing space with our expert renovation and
                remodeling services. Whether it's a kitchen remodel, bathroom
                renovation, or a complete home makeover, we deliver stunning
                results that enhance both functionality and aesthetics.
              </p>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-amber-600">•</div>
                  <span className="text-gray-600">
                    Kitchen & Bathroom Remodeling
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-amber-600">•</div>
                  <span className="text-gray-600">
                    Home Additions & Extensions
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-amber-600">•</div>
                  <span className="text-gray-600">
                    Commercial Space Renovations
                  </span>
                </li>
              </ul>
              <Link to="/quote" className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors">
                Request Service
                <ArrowRightIcon className="h-4 w-4 ml-1" />
              </Link>
            </div>
            {/* Electrical & Plumbing */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <ZapIcon className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Electrical & Plumbing
              </h3>
              <p className="text-gray-600 mb-6">
                Our specialized electrical and plumbing services ensure that
                your building's systems function efficiently and safely. From
                installation to repairs and maintenance, our certified
                technicians handle all aspects of electrical and plumbing work.
              </p>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-amber-600">•</div>
                  <span className="text-gray-600">
                    Electrical Installation & Upgrades
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-amber-600">•</div>
                  <span className="text-gray-600">
                    Plumbing Systems Installation
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-amber-600">•</div>
                  <span className="text-gray-600">Maintenance & Repairs</span>
                </li>
              </ul>
              <Link to="/quote" className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors">
                Request Service
                <ArrowRightIcon className="h-4 w-4 ml-1" />
              </Link>
            </div>
            {/* Interior Finishing */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <PaintBucketIcon className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Interior Finishing
              </h3>
              <p className="text-gray-600 mb-6">
                The finishing touches make all the difference in a construction
                project. Our interior finishing services add beauty,
                functionality, and value to your space with high-quality
                materials and expert craftsmanship.
              </p>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-amber-600">•</div>
                  <span className="text-gray-600">Painting & Wallpapering</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-amber-600">•</div>
                  <span className="text-gray-600">Flooring Installation</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-amber-600">•</div>
                  <span className="text-gray-600">
                    Cabinetry & Custom Woodwork
                  </span>
                </li>
              </ul>
              <Link to="/quote" className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors">
                Request Service
                <ArrowRightIcon className="h-4 w-4 ml-1" />
              </Link>
            </div>
            {/* Sustainable Building */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Sustainable Building
              </h3>
              <p className="text-gray-600 mb-6">
                We're committed to sustainable construction practices that
                minimize environmental impact while maximizing energy
                efficiency. Our green building solutions incorporate
                eco-friendly materials and energy-efficient systems.
              </p>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-amber-600">•</div>
                  <span className="text-gray-600">
                    LEED Certified Construction
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-amber-600">•</div>
                  <span className="text-gray-600">
                    Energy-Efficient Systems
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-amber-600">•</div>
                  <span className="text-gray-600">Eco-Friendly Materials</span>
                </li>
              </ul>
              <Link to="/quote" className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors">
                Request Service
                <ArrowRightIcon className="h-4 w-4 ml-1" />
              </Link>
            </div>
            {/* Project Management */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Project Management
              </h3>
              <p className="text-gray-600 mb-6">
                Our comprehensive project management services ensure that your
                construction project is completed on time, within budget, and to
                the highest standards. We handle all aspects of project
                coordination, from planning to execution.
              </p>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-amber-600">•</div>
                  <span className="text-gray-600">Construction Planning</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-amber-600">•</div>
                  <span className="text-gray-600">Budget Management</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-amber-600">•</div>
                  <span className="text-gray-600">Timeline Coordination</span>
                </li>
              </ul>
              <Link to="/quote" className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors">
                Request Service
                <ArrowRightIcon className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Construction Process
            </h2>
            <p className="text-gray-600">
              We follow a systematic approach to ensure smooth execution and
              successful completion of every project.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                    <span className="font-semibold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Consultation & Planning
                  </h3>
                </div>
                <p className="text-gray-600 pl-12">
                  We begin with a thorough consultation to understand your
                  requirements, budget, and timeline. Our team then develops a
                  comprehensive plan tailored to your specific needs.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                    <span className="font-semibold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Design & Engineering
                  </h3>
                </div>
                <p className="text-gray-600 pl-12">
                  Our design team works closely with you to create detailed
                  plans and specifications. We ensure all designs meet building
                  codes and regulations while fulfilling your vision.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                    <span className="font-semibold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Pre-Construction
                  </h3>
                </div>
                <p className="text-gray-600 pl-12">
                  Before breaking ground, we handle all necessary permits,
                  establish timelines, and finalize budgets. This phase ensures
                  a smooth transition into the construction process.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                    <span className="font-semibold">4</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Construction
                  </h3>
                </div>
                <p className="text-gray-600 pl-12">
                  Our skilled team executes the construction plan with precision
                  and attention to detail. We maintain open communication and
                  provide regular progress updates throughout this phase.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                    <span className="font-semibold">5</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Quality Control
                  </h3>
                </div>
                <p className="text-gray-600 pl-12">
                  Throughout the construction process, our quality control team
                  conducts thorough inspections to ensure all work meets our
                  high standards and industry regulations.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                    <span className="font-semibold">6</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Project Completion
                  </h3>
                </div>
                <p className="text-gray-600 pl-12">
                  Once construction is complete, we conduct a final walkthrough
                  with you to ensure everything meets your expectations before
                  officially handing over the project.
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
              Contact us today to discuss your requirements and get a free quote
              for your project.
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
    </>;
};
export default Services;