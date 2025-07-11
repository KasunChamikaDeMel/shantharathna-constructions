import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon, ArrowRightIcon } from 'lucide-react';
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Construction site" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Shantharathna Constructions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Building excellence since 2003. Learn about our journey, mission,
              and the team behind our success.
            </p>
          </div>
        </div>
      </section>
      {/* Company History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our <span className="text-amber-600">History</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2003 by Mr. Shantharathna Fernando, our company began
                as a small residential construction firm with just five
                employees. With a vision to deliver quality construction
                services and a commitment to excellence, we quickly gained a
                reputation for reliability and craftsmanship.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we've grown into a comprehensive construction
                company with over 200 employees, handling projects ranging from
                luxury residential homes to large commercial complexes and
                infrastructure development. Our journey has been marked by
                consistent growth, innovation, and an unwavering commitment to
                quality.
              </p>
              <p className="text-gray-600">
                Today, Shantharathna Constructions stands as one of the region's
                leading construction companies, having successfully completed
                over 500 projects across various sectors.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Construction team" className="rounded-lg shadow-lg w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* Vision & Mission */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Vision & Mission
            </h2>
            <p className="text-gray-600">
              At Shantharathna Constructions, we're guided by clear principles
              that define who we are and how we work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 mb-6">
                To be the most trusted and respected construction company,
                recognized for excellence in quality, innovation, and customer
                satisfaction.
              </p>
              <p className="text-gray-600">
                We envision a future where our buildings stand as testimonies to
                superior craftsmanship and sustainable construction practices,
                enhancing communities and environments for generations to come.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-6">
                To deliver exceptional construction services that exceed client
                expectations through quality workmanship, innovative solutions,
                and unwavering commitment to integrity and professionalism.
              </p>
              <p className="text-gray-600">
                We are committed to fostering a safe work environment, embracing
                sustainable practices, and contributing positively to the
                communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Choose <span className="text-amber-600">Shantharathna</span>
            </h2>
            <p className="text-gray-600">
              When you partner with us, you're choosing a construction company
              that puts your needs first.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                20+ Years Experience
              </h3>
              <p className="text-gray-600">
                With over two decades in the industry, we bring unparalleled
                expertise and knowledge to every project we undertake.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Quality Guarantee
              </h3>
              <p className="text-gray-600">
                We stand behind our work with comprehensive quality guarantees
                and use only the finest materials and techniques.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                On-Time Delivery
              </h3>
              <p className="text-gray-600">
                We understand the importance of deadlines and are committed to
                completing projects on schedule without compromising quality.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Certified Team
              </h3>
              <p className="text-gray-600">
                Our team consists of certified professionals with extensive
                training and experience in their respective fields.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Safety First
              </h3>
              <p className="text-gray-600">
                We prioritize safety on all our construction sites, following
                strict protocols to protect our workers and clients.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Transparent Pricing
              </h3>
              <p className="text-gray-600">
                We provide clear, detailed quotes with no hidden costs, ensuring
                you know exactly what you're paying for.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Team */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-gray-600">
              The experienced professionals leading Shantharathna Constructions
              to excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team Member" className="w-full h-64 object-cover object-center" />
              <div className="p-6">
                <h3 className="font-semibold text-xl text-gray-800">
                  Shantharathna Fernando
                </h3>
                <p className="text-amber-600 mb-4">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  With over 30 years in the construction industry,
                  Shantharathna's vision and leadership have been the driving
                  force behind our company's success.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team Member" className="w-full h-64 object-cover object-center" />
              <div className="p-6">
                <h3 className="font-semibold text-xl text-gray-800">
                  Sarah Williams
                </h3>
                <p className="text-amber-600 mb-4">Chief Operations Officer</p>
                <p className="text-gray-600 text-sm">
                  Sarah oversees all operations, ensuring projects are delivered
                  on time, within budget, and to the highest standards of
                  quality.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Team Member" className="w-full h-64 object-cover object-center" />
              <div className="p-6">
                <h3 className="font-semibold text-xl text-gray-800">
                  Michael Chen
                </h3>
                <p className="text-amber-600 mb-4">Chief Engineer</p>
                <p className="text-gray-600 text-sm">
                  Michael brings 20+ years of engineering expertise, leading our
                  technical team in delivering innovative and sustainable
                  construction solutions.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://randomuser.me/api/portraits/women/28.jpg" alt="Team Member" className="w-full h-64 object-cover object-center" />
              <div className="p-6">
                <h3 className="font-semibold text-xl text-gray-800">
                  Jessica Rodriguez
                </h3>
                <p className="text-amber-600 mb-4">Project Director</p>
                <p className="text-gray-600 text-sm">
                  Jessica manages our portfolio of projects, ensuring seamless
                  coordination between clients, teams, and stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Certifications & Affiliations
            </h2>
            <p className="text-gray-600">
              We maintain the highest industry standards through certifications
              and partnerships.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="w-32 h-32 flex items-center justify-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Iso_9001.svg/1200px-Iso_9001.svg.png" alt="ISO 9001" className="max-h-full max-w-full" />
            </div>
            <div className="w-32 h-32 flex items-center justify-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/ISO_14001.svg/1200px-ISO_14001.svg.png" alt="ISO 14001" className="max-h-full max-w-full" />
            </div>
            <div className="w-32 h-32 flex items-center justify-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/OHSAS_18001.svg/1200px-OHSAS_18001.svg.png" alt="OHSAS 18001" className="max-h-full max-w-full" />
            </div>
            <div className="w-32 h-32 flex items-center justify-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LEED_2009_logo.svg/1200px-LEED_2009_logo.svg.png" alt="LEED Certified" className="max-h-full max-w-full" />
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-amber-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-amber-100 text-lg mb-8">
              Contact us today to discuss your project requirements and see how
              Shantharathna Constructions can bring your vision to life.
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
export default About;