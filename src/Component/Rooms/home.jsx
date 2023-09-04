import React from 'react';
import bed from '../../assets/bed34.png';

const Home = () => {

  return (
    <div className="bg-cover object-cover bg-center h-screen flex items-center justify-center " style={{backgroundImage: `url(${bed})`}}>
      <div className="text-center px-4">
        <h1 className="text-4xl text-white md:text-6xl font-extrabold mb-2">OUR ROOMS AND RATE</h1>
      </div>
    </div>
  );
};

export default Home;
