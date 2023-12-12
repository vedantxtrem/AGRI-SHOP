import React from "react";

function Search(){
    return(
             <li className="splide__slide">
      <div className="flex flex-col">
        <img
          className=""
          src="./assets/images/matrass.png"
          alt="Matrass image"
        />

        <div>
          <p className="mt-2">MATRASS COMFORT +</p>
          <p className="font-medium text-teal-800">
            ₹ 45.00
            <span className="text-sm text-gray-500 line-through">
              ₹ 500.00
            </span>
          </p>

          <div className="flex items-center">
            {/* SVG icons */}
            {[...Array(4)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-yellow-400"
              >
                <path
                  fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
            <p className="text-sm text-gray-400">(38)</p>
          </div>

          <div>
            <button className="my-5 h-10 w-full bg-teal-800 text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </li>
    );
}
export default Search;