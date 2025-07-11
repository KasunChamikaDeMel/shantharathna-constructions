import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { WrenchIcon, ZapIcon, ArrowRightIcon } from "lucide-react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="/images/about.jpg"
            alt="Construction workers"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Quality ironworks and construction solutions tailored to your
              needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What We Offer
            </h2>
            <p className="text-gray-600 mb-10">
              At Shantharathna Constructions, we specialize in a variety of
              ironworks and construction services with a focus on quality,
              durability, and craftsmanship.
            </p>
            <ul className="text-left max-w-md mx-auto space-y-4 text-gray-700 text-lg list-disc list-inside">
              <li>Rolling Shutters</li>
              <li>Remote Control Gates</li>
              <li>Iron Carpentry</li>
              <li>Welding & Gas Cutting</li>
              <li>Grill Gates</li>
              <li>Aluminium Partitions</li>
              <li>All Types of Iron Works</li>
            </ul>
          </div>
          <div className="max-w-md mx-auto text-center">
            <Link
              to="/quote"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Request a Quotation
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Services / Custom Work */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Custom Solutions & Repairs
          </h2>
          <p className="text-gray-600 mb-8">
            Need something specific or a repair? Our team offers customized iron
            works and repair services tailored exactly to your requirements.
          </p>
          <Link
            to="/contact"
            className="inline-block border-2 border-amber-600 hover:bg-amber-600 hover:text-white text-amber-600 px-8 py-3 rounded-md font-medium transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
