import React from 'react';


function Cart() {
    return (
        <>

            <section className='md:flex mt-10'>
                <section className=" w-full md:h-[600px] md:w-full md:max-w-[1200px] md:grid-cols-1 gap-3 px-5 pb-10 md:grid">
                    <table className="table-fixed">
                        <thead className="h-16 bg-neutral-100">
                            <tr>
                                <th>ITEM</th>
                                <th>PRICE</th>
                                <th>QUANTITY</th>
                                <th>TOTAL</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Item 1 */}
                            <tr className="h-[100px] border-b">
                                <div className="flex w-full border px-4 py-4">
                                    <img
                                        className="self-start object-contain"
                                        width="90px"
                                        src="./assets/images/product-chair.png"
                                        alt="Chair image"
                                    />
                                
                                    <div className="ml-3 flex w-full justify-around">
                                        <div className="flex items-center justify-around">
                                            <p className="text-xl font-bold">Seeds</p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="h-5 w-5"
                                            >
                                                <path
                                                    d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                        <p className="text-sm text-gray-400">Size: XL</p>
                                        </div>
                                        <div>
                                        <p className="py-3 text-xl font-bold text-violet-900">&#8377;320</p>
                                        </div>
                                        <div className="mt-2 flex w-full items-center justify-between">
                                            <div className="flex items-center justify-center">
                                                <button
                                                    className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                                >
                                                    &minus;
                                                </button>
                                                <div
                                                    className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500"
                                                >
                                                </div>
                                                <button
                                                    className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                                   
                                                >
                                                    &#43;
                                                </button>
                                            </div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="m-0 h-5 w-5 cursor-pointer"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </tr>

                            {/* Item 2 */}
                            <tr className="h-[100px] border-b">
                                {/* ... Item 2 contents */}
                            </tr>

                            {/* Item 3 */}
                            <tr className="h-[100px] border-b">
                                {/* ... Item 3 contents */}
                            </tr>

                            {/* Item 4 */}
                            <tr className="h-[100px]">
                                {/* ... Item 4 contents */}
                            </tr>
                        </tbody>
                    </table>
                </section>


                <section className="mx-auto w-full px-4 md:max-w-[400px]">
                    <div className="">
                        <div className="border py-5 px-4 shadow-md">
                            <p className="font-bold">ORDER SUMMARY</p>
                            {/* Summary details */}
                            <div className="flex justify-between border-b py-5">
                                <p>Subtotal</p>
                                <p>$1280</p>
                            </div>
                            <div className="flex justify-between border-b py-5">
                                <p>Shipping</p>
                                <p>Free</p>
                            </div>
                            <div className="flex justify-between py-5">
                                <p>Total</p>
                                <p>$1280</p>
                            </div>
                            {/* Button */}
                            <a href="checkout-address.html">
                                <button className="w-full bg-violet-900 px-5 py-2 text-white">
                                    Proceed to checkout
                                </button>
                            </a>
                        </div>
                    </div>
                </section>
            </section>

        </>
    );
}

export default Cart;
