import React from 'react';
import pic from '../assets/Picture 1.png';

const Gallery = () => {
  return (
    <>
    
    <section className="px-4 py-10 bg-neutral-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-red-500 text-6xl font-bold mb-6">Great Selection</h2>
        <p className="text-xl text-gray-800 mb-8">Follow the most popular trends and get the best out of spring collection</p>
      </div>
    </section>
    <div className="h-screen flex justify-center items-center">
      
      <img className="h-1/2 w-auto" src={pic} alt="Gallery Image" loading="lazy" />
    </div>
    </>

  );
};

export default Gallery;
