import React from 'react';
import front from '../../assets/Rectangle9.png';

const Home = () => {

  return (
    <div className="bg-cover object-cover bg-center h-screen flex items-center justify-center " style={{backgroundImage: `url(${front})`}}>
      <div className="text-center px-4">
        <h1 className="text-4xl text-white md:text-6xl font-extrabold mb-2">FACILITIES</h1>
        <p className='text-white'>Restaurant   -   Bar   -   Parking</p>
      </div>
    </div>
  );
};

export default Home;
