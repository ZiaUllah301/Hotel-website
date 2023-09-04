import React from 'react';
import bed1 from '../../assets/bedddd33 2.png';
import bed2 from '../../assets/standard sindle room 1.png';
import bed3 from '../../assets/superior room 1.png';

const Gallery = () => {
  return (
    <div className="text-center mt-8">
      <h2 className="text-3xl font-bold mb-6">Our Gallery</h2>
      <div className="flex flex-col md:flex-row md:justify-center gap-6">
        <div className="mb-4 md:mb-0">
          <img
            src={bed1}
            alt="Image 1"
            className="w-[200px] h-[200px] rounded-lg mx-auto object-cover"
          />
        </div>
        <div className="mb-4 md:mb-0">
          <img
            src={bed2}
            alt="Image 2"
            className="w-[200px] h-[200px] rounded-lg mx-auto object-cover"
          />
        </div>
        <div>
          <img
            src={bed3}
            alt="Image 3"
            className="w-[200px] h-[200px] rounded-lg mx-auto object-cover"
          />
        </div>
      </div>
      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 mt-6 rounded-md">
        Book Room
      </button>
    </div>
  );
};

export default Gallery;
