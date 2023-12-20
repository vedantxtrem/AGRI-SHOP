import React from 'react';
import { Link } from 'react-router-dom';
import logo from './shop/assets/agrihelplogo.png';
import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [fopen,setfOpen] = useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };
  const handleToClosef = () => {
    setfOpen(false);
  };



  return (
    <section>
      <header class="bg-green-500 w-full h-16 absolute inset-x-0 top-0 z-50 flex justify-center items-center">

        <nav class="w-full flex items-center justify-between p-6 lg:px-8" aria-label="Global drop-shadow-2xl">
          <div class="w-[10%] flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5 flex ">
              <span class="sr-only">Vedant</span>
              <img class="h-14 w-auto" src={logo} alt="" />
            </a>
          </div>

          <div class="w-[70%] hidden lg:flex lg:justify-center lg:gap-x-6 text-white">
            <ul class="hidden lg:flex lg:gap-x-6 text-white">
              <li
                class="text-xl font-bold hover:text-green-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                Home
              </li>
              <li onClick={()=>{setfOpen(true)}} 
                class="flex justify-center items-center text-xl font-bold hover:text-green-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
                Feature's
                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
              </li>
              <li
                class="text-xl font-bold hover:text-green-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                Agri-Shop
              </li>
              <li
                class="text-xl font-bold hover:text-green-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                Contact
              </li>
              <li
                class="text-xl font-bold hover:text-green-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                About
              </li>
            </ul>

          </div>
          <div class="w-[20%] flex items-center lg:justify-around">

            <div
              class="hidden absolute inset-y-0 right-0 lg:flex lg:items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button type="button"
                class="relative flex justify-center items-center bg-white border focus:outline-none shadow text-gray-600 rounded focus:ring ring-gray-200 group">
                <p class="px-4">Language</p>
                <span class="border-l p-2 hover:bg-gray-100">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"
                    xmlns="https://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 9l-7 7-7-7"></path>
                  </svg>
                </span>

                <div
                  class="absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded">
                  <ul class="text-left border rounded">
                    <li class="px-4 py-1 hover:bg-gray-100 border-b">English </li>
                    <li class="px-4 py-1 hover:bg-gray-100 border-b">Hindi/हिंदी</li>
                    <li class="px-4 py-1 hover:bg-gray-100 border-b">Marathi/मराठी</li>
                    <li class="px-4 py-1 hover:bg-gray-100 border-b">Tamil/தமிழ்</li>
                    <li class="px-4 py-1 hover:bg-gray-100 border-b">Telugu/తెలుగు</li>
                    <li class="px-4 py-1 hover:bg-gray-100 border-b">Punjabi/ਪੰਜਾਬੀ</li>
                    <li class="px-4 py-1 hover:bg-gray-100 border-b">Assamese/অসমীয়া</li>
                  </ul>
                </div>
              </button>
            </div>

            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#"
                class="text-xl font-bold text-white  hover:text-green-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Log
                in <span aria-hidden="true">&rarr;</span></a>
            </div>
            <div class="flex fixed right-6 lg:hidden">
              <button type="button" onClick={handleClickToOpen}
                class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span class="sr-only">Open main menu</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>

        </nav>


        <dialog open={open} onClose={handleToClose}>
          <div class="" role="dialog" aria-modal="true">
            <div class="fixed inset-0 z-50"></div>
            <div
              class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-green-500 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div class="flex items-center justify-between">
                <a href="#" class="-m-1.5 p-1.5">
                  <span class="sr-only text-white">AGRI-HELP</span>
                  <img class="h-8 w-auto" src={logo} alt="" />
                </a>

                <button onClick={handleToClose} type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                  <span class="sr-only">Close menu</span>
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

              </div>

              <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-500/10">

                  <div class="space-y-2 py-6">
                    <Link to="/Weather"
                      class="block h-14 text-center rounded-lg px-3 pt-4  text-xl font-bold text-white  hover:text-green-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
                      Weather</Link>
                    <Link to="/Croprecomendation"
                      class="block h-14 text-center rounded-lg px-3 pt-4  text-xl font-bold text-white  hover:text-green-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
                      Crop Recommendation</Link>
                    <Link to="/Pestprediction"
                      class="block h-14 text-center rounded-lg px-3 pt-4  text-xl font-bold text-white  hover:text-green-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
                      Pest Information</Link>
                    <Link to="#"
                      class="block h-14 text-center rounded-lg px-3 pt-4  text-xl font-bold text-white  hover:text-green-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
                      Fertilizer Recommendation</Link>
                    <Link to="/Shop"
                      class="block h-14 text-center rounded-lg px-3 pt-4  text-xl font-bold text-white  hover:text-green-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
                      Shop</Link>
                    <Link to="/Chat"
                      class="block h-14 text-center rounded-lg px-3 pt-4  text-xl font-bold text-white  hover:text-green-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
                      Chat</Link>
                    <Link to="#"
                      class="block h-14 text-center rounded-lg px-3 pt-4  text-xl font-bold text-white  hover:text-green-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
                      Feedback</Link>
                    <Link to="#"
                      class="block h-14 text-center rounded-lg px-3 pt-4  text-xl font-bold text-white  hover:text-green-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
                      About</Link>

                  </div>
                  <div class="py-6">
                    <Link to="#"
                      class="block h-14 text-center rounded-lg px-3 pt-4  text-xl font-bold text-white  hover:text-green-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
                      Log in</Link>
                    <Link to="#"
                      class="block h-14 text-center rounded-lg px-3 pt-4  text-xl font-bold text-white  hover:text-green-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
                      Sign Up</Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </dialog>
        {/* features box */}
        <dialog open={fopen} onClose={()=> setfOpen(false)} >
          <div class="hidden lg:block w-48 fixed top-16 left-[38%]   text-xm font-bold text-white bg-green-400 border-2 border-green-400 rounded-lg ">

            <button type="button"
              class="w-full px-4 py-2 font-medium  text-center rtl:text-right border-b-2 border-white cursor-pointer hover:bg-green-100 rounded-sm dark:hover:bg-green-600 dark:hover:text-white ">
              Weather
            </button>
            <button type="button"
              class="w-full px-4 py-2 font-medium  text-center rtl:text-right border-b-2 border-white cursor-pointer hover:bg-green-100 rounded-sm dark:hover:bg-green-600 dark:hover:text-white ">
              Crop Recommendation
            </button>
            <button type="button"
              class="w-full px-4 py-2 font-medium  text-center rtl:text-right border-b-2 border-white cursor-pointer hover:bg-green-100 rounded-sm dark:hover:bg-green-600 dark:hover:text-white ">
              Pest Information
            </button>
            <button type="button"
              class="w-full px-4 py-2 font-medium  text-center rtl:text-right border-b-2 border-white cursor-pointer hover:bg-green-100 rounded-sm dark:hover:bg-green-600 dark:hover:text-white ">
              Fertilizer Recommendation
            </button>
            <button type="button"
              class="w-full px-4 py-2 font-medium  text-center rtl:text-right border-b-2 border-white cursor-pointer hover:bg-green-100 rounded-sm dark:hover:bg-green-600 dark:hover:text-white ">
              Chat
            </button>
            <button type="button"
              class="w-full px-4 py-2 font-medium  text-center rtl:text-right border-b-2 border-white cursor-pointer hover:bg-green-100 rounded-sm dark:hover:bg-green-600 dark:hover:text-white ">
              Finance
            </button>
            <button type="button"
              class="w-full px-4 py-2 font-medium  text-center rtl:text-right border-b-2 border-white cursor-pointer hover:bg-green-100 rounded-sm dark:hover:bg-green-600 dark:hover:text-white ">
              Process
            </button>
            <button onClick={handleToClosef} type="button"
              class="w-full px-4 py-2 font-medium  text-xl text-center rtl:text-right  border-white cursor-pointer hover:bg-green-100 rounded-sm dark:hover:bg-green-600 dark:hover:text-white ">
               X
            </button>

          </div>
        </dialog>
      </header>

    </section>

  );
}
export default Navbar;
