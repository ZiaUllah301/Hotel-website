import React from 'react';
import abc from '../../assets/abc.png';

const BackgroundWithText = () => {
  const containerStyle = {
    backgroundImage: `url(${abc})`,
  };

  return (
    <div className="bg-cover object-cover bg-center min-h-screen flex items-center justify-center" style={containerStyle}>
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2">Bar & Restaurant</h1>
        <p className="text-xl md:text-2xl text-justify mx-4 md:mx-48">
          Ladies and gentlemen, history keeps repeating itself but doesn't teach us any lessons.
          'Never again' has turned into 'again and again and again.' So today, ladies and gentlemen,
          take Hotel Lunar as a wake-up call and a message to be our messenger that people are the ones
          who can change what they want to change.
        </p>
      </div>
    </div>
  );
};

export default BackgroundWithText;
