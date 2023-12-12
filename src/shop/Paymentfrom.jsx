import React from 'react';
import { Link } from 'react-router-dom';


function PaymentForm() {
  return (
    <section className="flex-grow">
      <section className="container mx-auto max-w-[1200px] py-5 lg:flex lg:flex-row lg:py-10">
        <h2 className="mx-auto px-5 text-2xl font-bold md:hidden">Payment Method</h2>
        
        {/* form */}
        <section className="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10">
          <table className="hidden lg:table">
            <thead className="h-16 bg-neutral-100">
              <tr>
                <th><Link to = "/Address">ADDRESS</Link></th>
                <th><Link to="/DeliveryOptions"> DELIVERY METHOD</Link></th>
                <th className="bg-neutral-600 text-white"><Link to ="/Payment"> PAYMENT METHOD</Link></th>
               
              </tr>
            </thead>
          </table>

          <div className="py-5">
            <form className="flex w-full flex-col gap-3" action="">
              <div className="flex w-full flex-col">
                <label className="flex" htmlFor="name">Payment Card Number</label>
                <input
                  x-mask="9999 9999 9999 9999"
                  className="w-full border px-4 py-2 lg:w-1/2"
                  placeholder="1223 4568 7644 4839"
                />
                
              </div>
              <div class="flex w-full flex-col">
                  <label class="flex" for="name">Card Holder</label>
                  <input
                    class="w-full border px-4 py-2 lg:w-1/2"
                    type="text"
                    placeholder="SARAH JOHNSON"
                  />
                </div>

                <div class="flex items-center gap-5 lg:w-1/2">
                  <div class="flex flex-col">
                    <label class="flex" for="name">Expiry Date</label>

                    <div class="flex w-[150px] items-center gap-1">
                      <input
                        x-mask="99"
                        class="w-1/2 border px-4 py-2 text-center"
                        name=""
                        id=""
                        placeholder="10"
                      />

                      <span>&bsol;</span>

                      <input
                        x-mask="99"
                        class="w-1/2 border px-4 py-2 text-center"
                        name=""
                        id=""
                        placeholder="36"
                      />
                    </div>
                  </div>

                  <div class="flex flex-col w-[60px] lg:w-[110px]">
                    <label class="flex" for="">CVV/CVC</label>
                    <input
                      x-mask="999"
                      class="w-full border py-2 text-center lg:w-1/2"
                      type="password"
                      placeholder="&bull;&bull;&bull;"
                    />
                  </div>
                </div>
              {/* Other input fields go here */}
              <h2 class="mt-10 text-left text-xl font-medium">
                  Another methods:
                </h2>
                <section
                  class="my-4 grid w-fit grid-cols-3 gap-4 lg:grid-cols-5"
                >
                  <img
                    class="w-[100px] cursor-pointer"
                    src="./assets/images/payment-method-bitcoin.svg"
                    alt="bitcoin icon"
                  />
                  <img
                    class="w-[100px] cursor-pointer"
                    src="./assets/images/payment-method-paypal.svg"
                    alt="paypal icon"
                  />
                  <img
                    class="w-[100px] cursor-pointer"
                    src="./assets/images/payment-method-stripe.svg"
                    alt="stripe icon"
                  />
                  <img
                    class="w-[100px] cursor-pointer"
                    src="./assets/images/payment-method-visa.svg"
                    alt="visa icon"
                  />
                  <img
                    class="w-[100px] cursor-pointer"
                    src="./assets/images/payment-method-mastercard.svg"
                    alt="mastercard icon"
                  />
                </section>
            </form>
          </div>

          <div className="flex w-full items-center justify-between">
            <a href="catalog.html" className="hidden text-sm text-teal-800 lg:block">
              &larr; Back to the shop
            </a>

            <div className="mx-auto flex justify-center gap-2 lg:mx-0">
              <Link to="/DeliveryOPtions" className="bg-teal-800 px-4 py-2 text-white">
                Previous step
              </Link>

              <Link to="/OrderConfirmation" className="bg-amber-400 px-4 py-2">
                Conform
              </Link>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

export default PaymentForm;