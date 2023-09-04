import React from 'react';
import bed1 from '../../assets/bed.png';
import bed2 from '../../assets/parking.png';
import bed3 from '../../assets/superior room 1.png';

const cardsData = [
    {
        id: 1,
        imageSrc: bed2,
    },
    {
        id: 2,
        imageSrc: bed1,
    },
    {
        id: 3,
        imageSrc: bed3,
    },
];

const CarParking = () => {
    return (
        <>
            <div className="flex md:flex-row flex-col justify-center gap-16 mt-20">
                {cardsData.map((card) => (
                    <div key={card.id} className="w-full md:w-1/3 lg:w-1/4 p-4">
                        <div className=" rounded-lg">
                            <img
                                src={card.imageSrc}
                                alt={card.title}
                                className="w-full h-[196px] object-cover rounded-t-lg"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-start justify-start ml-28 mr-28 max-sm:justify-center mt-8">
                <h1 className="text-4xl font-extralight">Car Parking</h1>
            </div>
        </>
    );
};

export default CarParking;
