import React from 'react';
import ProductCard from './ProductCard';
function Breadcrumbs() {
  return (
    <nav className="mx-auto w-full mt-4 max-w-[1200px] px-5">
      <ul className="flex items-center">
        <li className="cursor-pointer">
          <a href="index.html">
            {/* SVG content */}
          </a>
        </li>
        <li>
          <span className="mx-2 text-gray-500">&gt;</span>
        </li>
        <li className="text-gray-500">Big italian sofa</li>
      </ul>
    </nav>
  );
}

function ImageGallery() {
  return (
    <div className="container mx-auto px-4">
      <img
        className="w-full"
        src="./assets/images/product-bigsofa.png"
        alt="Sofa image"
      />
      <div className="mt-3 grid grid-cols-4 gap-4">
        {/* Image items */}
      </div>
    </div>
  );
}

function Description() {
  return (
    <div className="mx-auto px-5 lg:px-5">
      <h2 className="pt-3 text-2xl font-bold lg:pt-0">Product Name</h2>
      <div className="mt-1">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4 text-yellow-400"
          >
            {/* SVG path */}
          </svg>

          {/* Add more SVG elements as needed */}
          
          <p className="ml-3 text-sm text-gray-400">(150 reviews)</p>
        </div>
      </div>

      <p className="mt-5 font-bold">
        Availability: <span className="text-green-600">In Stock</span>
      </p>
      <p className="font-bold">
        Brand: <span className="font-normal">Apex</span>
      </p>
      <p className="font-bold">
        Category: <span className="font-normal">Seeds</span>
      </p>
      <p className="font-bold">
        SKU: <span className="font-normal">BE45VGTRK</span>
      </p>

      <p className="mt-4 text-4xl font-bold text-violet-900">
        &#8377;450 <span className="text-xs text-gray-400 line-through">&#8377;550</span>
      </p>

      <p className="pt-5 text-sm leading-5 text-gray-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem exercitationem voluptate sint eius ea assumenda provident eos repellendus qui neque! Velit ratione illo maiores voluptates commodi eaque illum, laudantium non!
      </p>

      <div className="mt-6">
        <p className="pb-2 text-xs text-gray-500">Size</p>

        <div className="flex gap-1">
          {/* Size options */}
        </div>
      </div>

      <div className="mt-6">
        <p className="pb-2 text-xs text-gray-500">Color</p>

        <div className="flex gap-1">
          {/* Color options */}
        </div>
      </div>

      <div className="mt-6">
        <p className="pb-2 text-xs text-gray-500">Quantity</p>

        <div className="flex">
          {/* Quantity buttons */}
        </div>
      </div>

      <div className="mt-7 flex flex-row items-center gap-6">
        <button className="flex h-12 w-1/3 items-center justify-center bg-violet-900 text-white duration-100 hover:bg-blue-800">
          {/* SVG for cart icon */}
          Add to cart
        </button>
        <button className="flex h-12 w-1/3 items-center justify-center bg-amber-400 duration-100 hover:bg-yellow-300">
          {/* SVG for wishlist icon */}
          Wishlist
        </button>
      </div>
    </div>
  );
}

function ProductDetails() {
  return (
    <section className="container mx-auto max-w-[1200px] px-5 py-5 lg:py-10">
      <h2 className="text-xl">Product details</h2>
      <p className="mt-4 lg:w-3/4">
        {/* Product details content */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tempore neque debitis nihil esse unde ipsam ducimus numquam explicabo eaque itaque nulla, officiis odio minus, ea vitae ab ullam accusamus. Quaerat iusto et reiciendis? Libero ab totam officiis magni error voluptatum ipsam, reiciendis, fugit aspernatur inventore harum blanditiis accusantium maiores!
      </p>
      <table className="mt-7 w-full table-auto divide-x divide-y lg:w-1/2">
        <tbody className="divide-x border">
          {/* Table rows */}
        </tbody>
      </table>
    </section>
  );
}

function ProductPage() {
  return (
    <div>
      <Breadcrumbs />
      <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
        <ImageGallery />
        <Description />
      </section>
      <ProductDetails />
      <ProductCard/>
    </div>
  );
}

export default ProductPage;
