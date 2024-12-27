import React from "react";

const NetflixFooter = () => {
  return (
    <div className="bg-black text-white h-screen flex flex-col justify-between">
 
      <div className="flex flex-col items-center justify-center py-12">

        <button className="bg-red-600   py-2 px-4 font-medium text-white rounded-full text-lg  hover:bg-red-700 transition">
          Get Started  
        </button>
  
        <p className="mt-4 text-gray-400 text-sm">
          Create or restart your membership
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center md:text-left pb-8">
        <p className="text-gray-400 text-sm mb-6">
          Questions? Call <a href="tel:0008009191743" className="hover:underline">000-800-919-1743</a>
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-5 text-sm">
          <a href="#" className="text-gray-400 hover:underline">FAQ</a>
          <a href="#" className="text-gray-400 hover:underline">Help Centre</a>
          <a href="#" className="text-gray-400 hover:underline">Account</a>
          <a href="#" className="text-gray-400 hover:underline">Media Centre</a>
          <a href="#" className="text-gray-400 hover:underline">Investor Relations</a>
          <a href="#" className="text-gray-400 hover:underline">Jobs</a>
          <a href="#" className="text-gray-400 hover:underline">Ways to Watch</a>
          <a href="#" className="text-gray-400 hover:underline">Terms of Use</a>
          <a href="#" className="text-gray-400 hover:underline">Privacy</a>
          <a href="#" className="text-gray-400 hover:underline">Cookie Preferences</a>
          <a href="#" className="text-gray-400 hover:underline">Corporate Information</a>
          <a href="#" className="text-gray-400 hover:underline">Contact Us</a>
          <a href="#" className="text-gray-400 hover:underline">Speed Test</a>
          <a href="#" className="text-gray-400 hover:underline">Legal Notices</a>
          <a href="#" className="text-gray-400 hover:underline">Only on Netflix</a>
        </div>

        <div className="mt-6">
        
          <button className="text-gray-400 border border-gray-400 px-4 py-2 text-sm rounded hover:bg-gray-800">
            🌐 English
          </button>
        </div>

        <p className="text-gray-400 text-sm mt-6">Netflix India</p>
      </div>
    </div>
  );
};

export default NetflixFooter;
