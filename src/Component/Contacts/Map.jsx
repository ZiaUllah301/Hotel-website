import React from 'react';
import map from '../../assets/image1.png';
import { MdOutlineCall, MdLocationOn } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';

const Map = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='  mb-4'>
        <img src={map} alt="Map" className='w-full h-auto object-cover' />
      </div>
      <div className='flex items-center flex-col md:flex-row gap-8 text-center'>
        <div className='flex items-center'>
          <MdOutlineCall className='text-2xl' />
          <p className='ml-2'>+2349061504648</p>
        </div>
        <div className='flex items-center'>
          <AiOutlineMail className='text-2xl' />
          <p className='ml-2'>oluwadamilolafaj@gmail.com</p>
        </div>
        <div className='flex items-center'>
          <MdLocationOn className='text-2xl' />
          <p className='ml-2'>Road 12, Peace Avenue, Ado, Ekiti</p>
        </div>
      </div>
    </div>
  );
};

export default Map;
