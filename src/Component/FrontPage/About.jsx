import React from 'react';
import faceboook from '../../assets/facebook icon 1.png'
import instagram from '../../assets/instagram icon 1.png'
import telegram from '../../assets/telegram icon 1.png'
import pic from '../../assets/bed.png'

const About = () => {
    return (
        <div className="flex flex-col md:flex-row p-8 gap-8">

            {/* Left side with content */}
            <div className="md:w-1/2 text-justify">
                <h2 className="text-2xl font-semibold mb-2">About Milki’s Hotel </h2>
                <p className='mb-6'>
                    Ladies and gentlemen, history keeps repeating itself but doesn't
                    teach us any lessons. 'Never again' has turned into 'again and
                    again and again.' So today, ladies and gentlemen, take Hotel
                    Lunar as a wake-up call and a message to be our messenger that
                    people are the ones who can change what they want to change.
                </p>
                <p>
                    Ladies and gentlemen, history keeps repeating itself but doesn't
                    teach us any lessons. 'Never again' has turned into 'again and
                    again and again.' So today, ladies and gentlemen, take Hotel
                    Lunar as a wake-up call and a message to be our messenger that
                    people are the ones who can change what they want to change.
                </p>

                {/* React Icons */}
                <div className="flex gap-4 mt-4">
                    <img src={faceboook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={telegram} alt="" />
                </div>
            </div>

            {/* Right side */}
            <div className="md:w-1/2">
                <img
                    src={pic}
                    alt="About"
                    className="w-full md:w-[323px] h-auto md:h-[276px] rounded-md object-cover"
                />
            </div>
        </div>
    );
};

export default About;
