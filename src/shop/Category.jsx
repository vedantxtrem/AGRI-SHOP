import React from 'react';
import Seeds from './assets/Carousel.jpeg';
import Fertilizer from './assets/ferti.jpg';
import pump from './assets/pump.avif';
import Pestisite from './assets/Carousel.jpeg';
import Drone from './assets/Carousel.jpeg';
import Organic from './assets/Carousel.jpeg';
function Categories() {
  return (
    <div>
      <h2 className="mx-auto mb-5 max-w-[1200px] px-5">SHOP BY CATEGORY</h2>

      <section className="mx-auto grid max-w-[1200px] grid-cols-2 px-5 lg:grid-cols-3 lg:gap-5">
        <a href="#">
          <div className="relative cursor-pointer">
            <img
              className="mx-auto h-auto w-auto brightness-50 duration-300 hover:brightness-100"
              src={Seeds}
              alt="Seeds"
            />
            <p className="pointer-events-none absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-xl">
              Seeds
            </p>
          </div>
        </a>

        <a href="#">
          <div className="relative cursor-pointer">
            <img
              className="mx-auto h-auto w-auto brightness-50 duration-300 hover:brightness-100"
              src={Fertilizer}
              alt="Fertilizer"
            />
            <p className="pointer-events-none absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-xl">
              Fertilizer
            </p>
          </div>
        </a>

        <a href="#">
          <div className="relative cursor-pointer">
            <img
              className="mx-auto h-auto w-auto brightness-50 duration-300 hover:brightness-100"
              src={pump}
              alt="Pump"
            />
            <p className="pointer-events-none absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-xl">
              Pump
            </p>
          </div>
        </a>

        <a href="#">
          <div className="relative cursor-pointer">
            <img
              className="mx-auto h-auto w-auto brightness-50 duration-300 hover:brightness-100"
              src={Pestisite}
              alt="Pestisite"
            />
            <p className="pointer-events-none absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-xl">
              Pestisite
            </p>
          </div>
        </a>

        <a href="#">
          <div className="relative cursor-pointer">
            <img
              className="mx-auto h-auto w-auto brightness-50 duration-300 hover:brightness-100"
              src={Drone}
              alt="Equipment"
            />
            <p className="pointer-events-none absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-xl">
              Equipment
            </p>
          </div>
        </a>

        <a href="#">
          <div className="relative cursor-pointer">
            <img
              className="mx-auto h-auto w-auto brightness-50 duration-300 hover:brightness-100"
              src={Organic}
              alt="Organic product"
            />
            <p className="pointer-events-none absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-xl">
              Organic Products
            </p>
          </div>
        </a>
      </section>
    </div>
  );
}

export default Categories;
