import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };
  return (
    <section>
      <header class=" bg-green-500 m-2 rounded-full  absolute inset-x-0 top-0 z-50">

        <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global drop-shadow-2xl">
          <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5 flex ">
              <span class="sr-only">Vedant</span>
              <img class="h-8 w-auto" src="" alt="" />
            </a>
          </div>
          <div class="flex lg:hidden">
            <button type="button" onClick={handleClickToOpen}
              class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span class="sr-only">Open main menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div class="hidden lg:flex lg:gap-x-6 text-white">
            <Link href="#"
              class="text-xm font-semibold leading-6 px-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:border-b-4 hover:border-green-700 text-center">Weather</Link>
            <Link href="#"
              class="text-xm font-semibold leading-6 px-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:border-b-4 hover:border-green-700 text-center">Crop Recomendation</Link>
            <Link href="#"
              class="text-xm font-semibold leading-6 px-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:border-b-4 hover:border-green-700 text-center">Pest Information</Link>
            <Link href="#"
              class="text-xm font-semibold leading-6 px-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:border-b-4 hover:border-green-700 text-center">Fertilizer Recomendation</Link>
            <Link href="#"
              class="text-xm font-semibold leading-6 px-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:border-b-4 hover:border-green-700 text-center">Shop</Link>
            <Link href="#"
              class="text-xm font-semibold leading-6 px-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:border-b-4 hover:border-green-700 text-center">Chat</Link>
            <Link href="#"
              class="text-xm font-semibold leading-6 px-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:border-b-4 hover:border-green-700 text-center">Govt.Scheme</Link>
            <Link href="#"
              class="text-xm font-semibold leading-6 px-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:border-b-4 hover:border-green-700 text-center">Feedback</Link>
            <Link href="#"
              class="text-xm font-semibold leading-6 px-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:border-b-4 hover:border-green-700 text-center">About Us</Link>

          </div>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#"
              class="text-xl font-semibold leading-6 px-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 text-white">Log
              in <span aria-hidden="true">&rarr;</span></a>
          </div>
        </nav>


        <dialog open={open} onClose={handleToClose}>
          <div class="" role="dialog" aria-modal="true">
            <div class="fixed inset-0 z-50"></div>
            <div
              class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-green-500 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div class="flex items-center justify-between">
                <a href="#" class="-m-1.5 p-1.5">
                  <span class="sr-only">AGRI-HELP</span>
                  <img class="h-8 w-auto" src="" alt="" />
                </a>

                <button onClick={handleToClose} type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                  <span class="sr-only">Close menu</span>
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

              </div>

              <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-500/10">

                  <div class="space-y-2 py-6">
                    <Link to="#"
                      class="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-900 hover:bg-white ">Weather</Link>
                    <Link to="#"
                      class="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-900 hover:bg-white ">Crop Recommendation</Link>
                    <Link to="#"
                      class="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-900 hover:bg-white ">Pest Information</Link>
                    <Link to="#"
                      class="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-900 hover:bg-white ">Fertilizer Recommendation</Link>
                    <Link to="#"
                      class="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-900 hover:bg-white ">Shop</Link>
                    <Link to="#"
                      class="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-900 hover:bg-white ">Chat</Link>
                    <Link to="#"
                      class="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-900 hover:bg-white ">Feedback</Link>
                    <Link to="#"
                      class="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-900 hover:bg-white ">About</Link>

                  </div>

                  <div class="py-6">
                    <Link to="#"
                      class="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-900 hover:bg-white ">Log in</Link>
                    <Link to="#"
                      class="block h-14 text-center rounded-lg px-3 pt-4  font-semibold leading-7  text-gray-900 hover:bg-white ">Sign Up</Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </dialog>
      </header>
      <div class="h-screen w-full sm:textx-xm md:text-2xl flex justify-center items-center">
        <div className='flex-col text-center'>
          <h2>Revolutionizing Farming With Innovative Technology Solutions</h2>
          <h2>A Helping Hand For Farmers  &#127995</h2>
        </div>
      </div>
    </section>
  );
}
export default Navbar;