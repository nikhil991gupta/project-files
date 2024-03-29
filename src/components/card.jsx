import React from 'react';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="relative overflow-hidden bg-gray-900 rounded-lg">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4">
        <div>
          <h3 className="text-white text-lg font-semibold">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
          Discover Now
        </button>
      </div>
      <img className="object-cover w-full h-full" src={imageUrl} alt={title} />
    </div>
  );
};

const ThreeCards = () => {
  return (
    <section className="flex justify-between max-w-4xl mx-auto mt-10">
      <Card 
        title="Spring Classic" 
        description="Discover Now" 
        imageUrl="https://via.placeholder.com/500" 
      />
      <Card 
        title="Backpacks" 
        description="Discover Now" 
        imageUrl="https://via.placeholder.com/500" 
      />
      <Card 
        title="Kids’ Headwear" 
        description="Discover Now" 
        imageUrl="https://via.placeholder.com/500" 
      />
    </section>
  );
};

export default ThreeCards;
