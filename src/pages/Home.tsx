import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BuildingIcon, HomeIcon, WrenchIcon, PaintBucketIcon, ZapIcon, CheckCircleIcon, ArrowRightIcon } from 'lucide-react';
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>
<section className="relative h-screen pt-32 flex items-center justify-center">
  <div className="absolute inset-0 z-0 bg-gray-300"></div>

<div className="container mx-auto px-4 z-10 h-full flex flex-col md:flex-row items-center">
  {/* Logo Block */}
  <div className="w-full md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
    <div className="bg-white rounded-full p-6 shadow-lg w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 flex items-center justify-center">
      <img
        src="/icons/logo.png"
        alt="Logo"
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 object-contain"
      />
    </div>
  </div>

  {/* Text and Buttons */}
  <div className="w-full md:w-1/2 text-center md:text-left">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
      Building the Future, <br />
      <span className="text-amber-500">Restoring the Past</span>
    </h1>
    <p className="text-base sm:text-lg md:text-xl text-black mb-6 max-w-md mx-auto md:mx-0">
      Delivering trusted residential and commercial construction solutions across Sri Lanka since 2003.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
      <Link
        to="/quote"
        className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md text-base sm:text-lg font-medium transition-colors"
      >
        Get a Free Quotation
      </Link>
      <Link
        to="/projects"
        className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-md text-base sm:text-lg font-medium transition-colors"
      >
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
              <img src="/images/about.jpg" alt="Construction team" className="rounded-lg shadow-lg w-full h-[400px] object-cover" />
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
        We offer a comprehensive range of construction services to meet all your Iron works & building needs.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Rolling shutters */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
          <BuildingIcon className="h-7 w-7 text-amber-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Rolling Shutters
        </h3>
        <p className="text-gray-600 mb-4">
          Durable and secure rolling shutters for residential and commercial use.
        </p>
        <Link to="/services" className="text-amber-600 font-medium hover:text-amber-700 transition-colors inline-flex items-center">
          Learn more
          <ArrowRightIcon className="h-4 w-4 ml-1" />
        </Link>
      </div>

      {/* Remote control gates */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
          <HomeIcon className="h-7 w-7 text-amber-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Remote Control Gates
        </h3>
        <p className="text-gray-600 mb-4">
          Automated gates with remote controls for enhanced security and convenience.
        </p>
        <Link to="/services" className="text-amber-600 font-medium hover:text-amber-700 transition-colors inline-flex items-center">
          Learn more
          <ArrowRightIcon className="h-4 w-4 ml-1" />
        </Link>
      </div>

      {/* Iron carps */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
          <WrenchIcon className="h-7 w-7 text-amber-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Iron Carps
        </h3>
        <p className="text-gray-600 mb-4">
          Custom iron carpentry for robust and reliable structural components.
        </p>
        <Link to="/services" className="text-amber-600 font-medium hover:text-amber-700 transition-colors inline-flex items-center">
          Learn more
          <ArrowRightIcon className="h-4 w-4 ml-1" />
        </Link>
      </div>

      {/* Welding Gas Cutters */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
          <ZapIcon className="h-7 w-7 text-amber-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Welding Gas Cutters
        </h3>
        <p className="text-gray-600 mb-4">
          Professional welding and gas cutting services for precise metalwork.
        </p>
        <Link to="/services" className="text-amber-600 font-medium hover:text-amber-700 transition-colors inline-flex items-center">
          Learn more
          <ArrowRightIcon className="h-4 w-4 ml-1" />
        </Link>
      </div>

      {/* Grill Gates */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
          <WrenchIcon className="h-7 w-7 text-amber-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Grill Gates
        </h3>
        <p className="text-gray-600 mb-4">
          Stylish and secure grill gates tailored to your property’s needs.
        </p>
        <Link to="/services" className="text-amber-600 font-medium hover:text-amber-700 transition-colors inline-flex items-center">
          Learn more
          <ArrowRightIcon className="h-4 w-4 ml-1" />
        </Link>
      </div>

      {/* Aluminium Partition */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
          <BuildingIcon className="h-7 w-7 text-amber-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Aluminium Partition
        </h3>
        <p className="text-gray-600 mb-4">
          Durable aluminium partitions for efficient space division.
        </p>
        <Link to="/services" className="text-amber-600 font-medium hover:text-amber-700 transition-colors inline-flex items-center">
          Learn more
          <ArrowRightIcon className="h-4 w-4 ml-1" />
        </Link>
      </div>

      {/* All kind of Iron works */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
          <WrenchIcon className="h-7 w-7 text-amber-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          All Kind of Iron Works
        </h3>
        <p className="text-gray-600 mb-4">
          Comprehensive iron works for construction, fencing, gates, and more.
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
        Take a look at some of our recent iron and aluminum work projects that highlight our precision, quality, and craftsmanship.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Project 1 */}
      <div className="group relative overflow-hidden rounded-lg shadow-md">
        <img src="/images/rollingshutter.jpg" alt="Rolling Shutter Installation" className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transition-all duration-300">
          <h3 className="text-xl font-semibold text-white mb-2">
            Rolling Shutter Installation
          </h3>
          <p className="text-gray-300 mb-4">Galle Road, Colombo</p>
          <Link to="/projects" className="inline-flex items-center text-amber-400 font-medium hover:text-amber-300 transition-colors">
            View Project
            <ArrowRightIcon className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>

      {/* Project 2 */}
      <div className="group relative overflow-hidden rounded-lg shadow-md">
        <img src="/images/ironroof.jpg" alt="Remote Control Gate Setup" className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transition-all duration-300">
          <h3 className="text-xl font-semibold text-white mb-2">
            Iron Roof Work
          </h3>
          <p className="text-gray-300 mb-4">Nugegoda Project</p>
          <Link to="/projects" className="inline-flex items-center text-amber-400 font-medium hover:text-amber-300 transition-colors">
            View Project
            <ArrowRightIcon className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>

      {/* Project 3 */}
      <div className="group relative overflow-hidden rounded-lg shadow-md">
        <img src="/images/irongrillgate.jpg" alt="Iron Works and Grill Gate" className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transition-all duration-300">
          <h3 className="text-xl font-semibold text-white mb-2">
            Iron Grill Gate Fabrication
          </h3>
          <p className="text-gray-300 mb-4">Matara Town Project</p>
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
        Hear from some of our valued clients across Sri Lanka.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          image: "/icons/user.png",
          title: "Client 1",
          role: "Colombo",
          quote:
            "Shantharathna Constructions provided excellent workmanship and timely delivery. They handled everything professionally from start to finish.",
        },
        {
          image: "/icons/user.png",
          title: "Client 2",
          role: "Kurunegala",
          quote:
            "I was impressed with their attention to detail and commitment to quality. Highly recommend them for residential projects.",
        },
        {
          image: "/icons/user.png",
          title: "Client 3",
          role: "Galle",
          quote:
            "Our new office extension was built perfectly, matching our exact requirements. Very satisfied with the work!",
        },
      ].map((client, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <img
              src={client.image}
              alt={client.title}
              className="w-14 h-14 rounded-full object-cover mr-4"
            />
            <div>
              <h4 className="font-semibold text-gray-800">{client.title}</h4>
              <p className="text-gray-600 text-sm">{client.role}</p>
            </div>
          </div>
          <p className="text-gray-600 italic">"{client.quote}"</p>
          <div className="flex text-amber-500 mt-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="text-center mt-10">
      <Link
        to="/testimonials"
        className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
      >
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
                Get a Free Quotation
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
export default Home;