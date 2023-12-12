import React from 'react';
import { Link } from 'react-router-dom';


function AddressForm() {
  return (
    <div className="flex-grow">
      <section className="container mx-auto max-w-[1200px] py-5 lg:flex lg:flex-row lg:py-10">
        <h2 className="mx-auto px-5 text-2xl font-bold md:hidden">
          Complete Address
        </h2>
        
        {/* Form */}
        <section className="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10">
          <table className="hidden lg:table">
            <thead className="h-16 bg-neutral-100">
              <tr>
              <th className="bg-neutral-600 text-white"><Link to = "/Address">ADDRESS</Link></th>
                <th>DELIVERY METHOD</th>
                <th ><Link to ="/Payment"> PAYMENT METHOD</Link></th>
                <th>ORDER REVIEW</th>
              </tr>
            </thead>
          </table>

          <div className="py-5">
            <form className="flex w-full flex-col gap-3" action="">
              {/* Full Name and Email Address */}
              <div className="flex w-full justify-between gap-2">
                <div className="flex w-1/2 flex-col">
                  <label htmlFor="name">Full Name</label>
                  <input
                    className="w-full border px-4 py-2 outline-yellow-400"
                    type="text"
                    placeholder="Sarah Johnson"
                  />
                </div>
                <div className="flex w-1/2 flex-col">
                  <label htmlFor="name">Email Address</label>
                  <input
                    className="w-full border px-4 py-2 outline-yellow-400"
                    type="text"
                    placeholder="sarahj@maybell.com"
                  />
                </div>
              </div>

              {/* Street and City */}
              <div className="flex w-full justify-between gap-2">
                <div className="flex w-1/2 flex-col">
                  <label htmlFor="name">Street</label>
                  <input
                    className="w-full border px-4 py-2 outline-yellow-400"
                    type="text"
                    placeholder="Big Serbian avenue, 18"
                  />
                </div>
                <div className="flex w-1/2 flex-col">
                  <label htmlFor="name">City</label>
                  <input
                    className="w-full border px-4 py-2 outline-yellow-400"
                    type="text"
                    placeholder="Belgrade"
                  />
                </div>
              </div>

              {/* ZIP code and Recipient */}
              <div className="flex w-full justify-between gap-2">
                <div className="flex w-1/2 flex-col">
                  <label htmlFor="name">ZIP code</label>
                  <input
                    x-mask="999999"
                    className="w-full border px-4 py-2 outline-yellow-400"
                    placeholder="176356"
                  />
                </div>
                <div className="flex w-1/2 flex-col">
                  <label htmlFor="name">Recipient</label>
                  <input
                    className="w-full border px-4 py-2 outline-yellow-400"
                    type="text"
                    placeholder="Andrew Johnson"
                  />
                </div>
              </div>

              {/* Commentary */}
              <div className="flex flex-col">
                <label>Commentary</label>
                <textarea
                  className="border px-4 py-2 outline-yellow-400"
                  type="text"
                ></textarea>
              </div>
            </form>
          </div>

          {/* Back to the shop and Place an order */}
          <div className="flex w-full items-center justify-between">
            <a href="catalog.html" className="text-sm text-violet-900">
              &larr; Back to the shop
            </a>
            <a href="checkout-delivery.html" className="bg-amber-400 px-4 py-2">
              Place an order
            </a>
          </div>
        </section>
      </section>
    </div>
  );
}

export default AddressForm;
