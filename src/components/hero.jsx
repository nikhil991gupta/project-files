import React from 'react';
import img from '../assets/hero1.png';

const HeroSection = () => {
  return (
    <section className="px-3 py-5 lg:py-10 bg-neutral-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center items-center">
        {/* Left Side */}
        <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold md:text-7xl text-orange-600">25% OFF</p>
          <p className="text-4xl font-bold md:text-7xl">SUMMER SALE</p>
          <p className="mt-2 text-sm md:text-lg">For limited time only!</p>
          <button className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">Shop Now</button>
        </div>
        {/* Right Side */}
        <div className="order-1 lg:order-2 relative">
          {/* Light Cream Background */}
          <div className="absolute top-0 left-0 h-full w-full bg-cream opacity-80"></div>
          {/* Image */}
          <img className="h-full w-auto object-cover lg:w-500 lg:h-500 z-10" src={img} alt="Summer Sale" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
