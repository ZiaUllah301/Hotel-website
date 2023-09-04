import React from 'react';
import bed1 from '../../assets/bed.png';
import bed2 from '../../assets/standard.png';
import bed3 from '../../assets/superior room 1.png';

const cardsData = [
  {
    id: 1,
    title: 'Starter',
    description: 'Fennel - Burrata - Salad',
    price: '5$ - 100$',
    imageSrc: bed1,
  },
  {
    id: 2,
    title: 'Main Dish',
    description: 'Fennel - Burrata - Salad',
    price: '5$ - 100$',
    imageSrc: bed2,
  },
  {
    id: 3,
    title: 'Dessert',
    description: 'Fennel - Burrata - Salad',
    price: '5$ - 100$',
    imageSrc: bed3,
  },
];

const Bar = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-center gap-16 mt-20">
        {cardsData.map((card) => (
          <div key={card.id} className="w-full md:w-1/3 lg:w-1/4 p-4">
            <div className=" bg-white shadow-lg rounded-md">
              <img
                src={card.imageSrc}
                alt={card.title}
                className="w-full h-[196px] object-cover rounded-t-lg"
              />
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold">{card.title}</h2>
                <p className="text-gray-600">{card.description}</p>
                <div className="mt-2 text-lg font-bold">{card.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-start justify-start ml-28 mr-28 max-sm:justify-center mt-8">
        <h1 className="text-4xl font-extralight">BAR</h1>
      </div>
    </>
  );
};

export default Bar;
