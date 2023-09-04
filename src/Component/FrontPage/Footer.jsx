import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-800 text-white py-8 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Left side */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold">Milki’s Hotel</h2>
          <p className="text-sm mb-2">Where every flavor tells you a story</p>
          <p className="text-sm">
            Address: Road 12, Peace Avenue, Ado, Ekiti
            <br />
            Phone number: +2349061504648
            <br />
            Email: oluwadamilolafaj@gmail.com
          </p>
        </div>

        {/* Center */}
        <div className="w-full md:w-1/4 p-4 text-justify">
          <h2 className="text-2xl font-semibold mb-2">ABOUT US</h2>
          <h2 className="text-2xl font-semibold mb-2">CONTACT US</h2>
          <h2 className="text-2xl font-semibold mb-2">ROOMS & RATES</h2>
          <h2 className="text-2xl font-semibold">FACILITIES</h2>
        </div>

        {/* Right side */}
        <div className="w-full md:w-1/4 p-4">
          <h2 className="text-2xl font-extrabold mb-2 underline">FOLLOW US</h2>
          <div className="">
            <h2 className="text-2xl font-semibold">FACEBOOK</h2>
            <h2 className="text-2xl font-semibold">INSTAGRAM</h2>
            <h2 className="text-2xl font-semibold">TWITTER</h2>
            <h2 className="text-2xl font-semibold">SNAP CHAT</h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
