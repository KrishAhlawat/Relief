import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="max-w-4xl bg-gray-800 shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Welcome to our platform! We are dedicated to providing the best
          solutions to help you achieve your goals. Our team is passionate about
          innovation, excellence, and delivering value to our users.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Our mission is to create a seamless and enjoyable experience for
          everyone. We believe in the power of technology to bring people
          together and make a positive impact on the world.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Thank you for being a part of our journey. If you have any questions
          or feedback, feel free to reach out to us. We’re here to help!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
