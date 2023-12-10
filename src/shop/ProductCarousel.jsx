import React from 'react';
import imageSrc from './assets/Carousel.jpeg'; // Replace with the correct image source

function ProductCarousel() {
  return (
    <div className="relative">
      <img
        className="w-full object-cover brightness-50 filter lg:h-[500px]"
        src={imageSrc}
        alt="ProductCarousel"
      />

      <div className="absolute top-1/2 left-1/2 mx-auto flex w-11/12 max-w-[1200px] -translate-x-1/2 -translate-y-1/2 flex-col text-center text-white lg:ml-5">
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-left">
          Best Product "Farmer's Choice"
        </h1>
        <p className="pt-3 text-xs lg:w-3/5 lg:pt-5 lg:text-left lg:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
          aperiam natus, nulla, obcaecati nesciunt, itaque adipisci earum
          ducimus pariatur eaque labore.
        </p>
        <button className="mx-auto mt-5 w-1/2 bg-amber-400 px-3 py-1 text-black duration-100 hover:bg-yellow-300 lg:mx-0 lg:h-10 lg:w-2/12 lg:px-10">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default ProductCarousel;