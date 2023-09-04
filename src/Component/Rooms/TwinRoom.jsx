import React from 'react';
import standardRoomImage from '../../assets/family.png';

const TwinRoom = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-4">

            <div className="md:w-1/2 p-4 ml-8">
                <img src={standardRoomImage} alt="Standard Room" className=" w-[473px] h-[317px] object-cover rounded-lg" />
            </div>


            <div className="md:w-1/2 p-4 text-center md:text-left">
                <h2 className="text-2xl font-semibold mb-2">Twin Room</h2>
                <ol className="text-left">
                    <li>1 bathroom</li>
                    <li>2 beds</li>
                    <li>2 people</li>
                    <li className='text-red-600'>60 USD per night</li>
                </ol>
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mt-4">
                    BOOK NOW
                </button>
            </div>


        </div>
    );
};

export default TwinRoom;
