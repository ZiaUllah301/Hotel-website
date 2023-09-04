import React, { useState } from 'react';
import bg from '../../assets/Rectangle2.png';

const Home = () => {
  // State variables to manage form inputs
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [checkDate, setCheckDate] = useState('');
  const [checkInTime, setCheckInTime] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can access the values in 'name', 'number', 'checkDate', and 'checkInTime' here.
    console.log('Name:', name);
    console.log('Number:', number);
    console.log('Check Date:', checkDate);
    console.log('Check-in Time:', checkInTime);

    // Add your logic to send this data to your backend or perform other actions here
  };

  return (
    <div className="bg-cover object-cover flex flex-col p-10 sm:flex-row items-center justify-between h-auto" style={{ backgroundImage: `url(${bg})` }}>
      {/* Left side content (centered for medium and large screens, top for small screens) */}
      <div className="text-center sm:text-left">
        <h1 className="text-4xl font-bold mb-2 text-white">
          A Memorable Experience
        </h1>
        <p className="text-white sm:ml-28">
          Where every flavor tells you a story
        </p>
      </div>

      {/* Right side form with higher z-index */}
      <div className="w-full sm:w-80 mx-auto bg-opacity-30 rounded-md bg-white p-5 mt-4 sm:mt-0 sm:w-">
        <h2 className="text-2xl font-semibold">Book a Room</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block">Name</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block">Number</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="Your Phone Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block">Check Date</label>
            <input
              type="date"
              className="w-full border rounded-md p-2"
              value={checkDate}
              onChange={(e) => setCheckDate(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block">Check-in Time</label>
            <input
              type="time"
              className="w-full border rounded-md p-2"
              value={checkInTime}
              onChange={(e) => setCheckInTime(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-red-400 py-2 rounded-md hover:bg-red-600 transition duration-200 w-full"
            onClick={() => {
              // Handle button click here
              console.log('Button Clicked');
            }}
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
