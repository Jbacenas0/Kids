import React from 'react';
import logo from '../assets/kiddie.png';
import doctorImage from '../assets/doctor.jpg'

const RegistrationPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center backdrop-blur-lg" style={{backgroundImage: `url(${doctorImage})`}}>
      {/* Logo at the top-left corner with responsive sizing */}
      <div className="absolute top-0 left-0 p-4">
        <img 
          src={logo} 
          alt="logo" 
          className="w-32 h-28 md:w-44 md:h-40 lg:w-56 lg:h-52 object-contain" // Responsive logo sizes
        />
      </div>

      {/* Centered Login Form */}
      <div className="relative flex flex-col items-center  w-full max-w-xs p-6 bg-white border-2 border-gray-900 rounded-lg shadow-lg md:max-w-md mt-20 lg:mt-20">
        <h1 className="text-2xl font-bold text-center mb-4">WELCOME BACK</h1>
        <h2 className="text-sm font-semibold text-center mb-6">Login to your Account!</h2>

        {/* Username Field */}
        <form>
        <label className="w-full text-left text-sm font-semibold mb-1">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          className="w-full p-3 mb-4 border-2 rounded-full border-gray-500 bg-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        {/* Password Field */}
        <label className="w-full text-left text-sm font-semibold mb-1">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border-2 rounded-full border-gray-500 bg-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          required
          minLength={8}    // Minimum of 8 characters
          maxLength={12}   // Maximum of 12 characters
        />

        <button
          type="submit"
          className="w-full py-2 text-white bg-green-500 rounded-full text-xl font-semibold hover:bg-green-600"
        >
          Login
        </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
