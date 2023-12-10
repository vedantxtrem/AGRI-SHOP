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
                            {/* ... Item 2 content */}
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
