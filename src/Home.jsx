import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-green-700">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <a href="home_new.html">
                <img className="block h-10 w-auto lg:hidden" src="agrihelp-high-resolution-logo-white-on-transparent-background.png" alt="Your Company" />
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-1 py-2 text-xl font-medium">Weather</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-1 py-2 text-xl font-medium">Soil Analysis</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-1 py-2 text-xl font-medium">Chat Room</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-1 py-2 text-xl font-medium">Pest Control</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-1 py-2 text-xl font-medium">Resources</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-1 py-2 text-xl font-medium">Government Scheme</a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button" className="relative flex justify-center items-center bg-white border focus:outline-none shadow text-gray-600 rounded focus:ring ring-gray-200 group">
              <p className="px-4">Language</p>
              <span className="border-l p-2 hover:bg-gray-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9l-7 7-7-7"></path></svg>
              </span>
              <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded">
                <ul className="text-left border rounded">
                  <li className="px-4 py-1 hover:bg-gray-100 border-b">English </li>
                  <li className="px-4 py-1 hover:bg-gray-100 border-b">Hindi/हिंदी</li>
                  <li className="px-4 py-1 hover:bg-gray-100 border-b">Marathi/मराठी</li>
                  <li className="px-4 py-1 hover:bg-gray-100 border-b">Tamil/தமிழ்</li>
                  <li className="px-4 py-1 hover:bg-gray-100 border-b">Telugu/తెలుగు</li>
                  <li className="px-4 py-1 hover:bg-gray-100 border-b">Punjabi/ਪੰਜਾਬੀ</li>
                  <li className="px-4 py-1 hover:bg-gray-100 border-b">Assamese/অসমীয়া</li>
                </ul>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Weather</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Soil Analysis</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Chat Room</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Pest Control</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Resources</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Government Scheme</a>
        </div>
      </div>
    </nav>
  );
};

const DummyText = () => {
  return (
    <div className="h-screen flex justify-center items-center text-3xl">
      <h2>Revolutionizing Farming With Innovative Technology Solutions</h2>
      <h2>A Helping Hand For Farmers 🌾</h2>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <NavBar />
      <DummyText />
    </>
  );
};

export default Home;
