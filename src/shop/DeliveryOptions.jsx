import React from 'react';
import { Link } from 'react-router-dom';

function DeliveryOptions() {
  return (
    <section
      class="container mx-auto max-w-[1200px] py-5 lg:flex lg:flex-row lg:py-10"
    >
      <h2 class="mx-auto px-5 text-2xl font-bold md:hidden">
        Delivery Method
      </h2>
      <div className="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10">
        <table className="hidden lg:table">
          <thead className="h-16 bg-neutral-100">
            <tr>

              <th><Link to="/Address">ADDRESS</Link></th>
              <th className="bg-neutral-600 text-white"><Link to="/DeliveryOptions"> DELIVERY METHOD</Link></th>
              <th><Link to="/Payment"> PAYMENT METHOD</Link></th>
              
            </tr>
          </thead>
        </table>

        <div className="py-5">
          <form className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2" action="">
            {/* Radio button options */}
            <div className="flex w-full justify-between gap-2">
              {/* Option 1 */}
              <div className="flex w-full cursor-pointer flex-col border">
                <div className="flex bg-amber-400 px-4 py-2">
                  <input className="outline-yellow-400" type="radio" />
                  <p className="ml-3 font-bold">DHL, next day</p>
                </div>
                <div className="px-4 py-3">
                  <p className="pb-3 font-bold text-violet-900">FREE</p>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nulla dolorum obcaecati, sequi, quidem quo eligendi soluta modi accusamus esse explicabo exercitationem!
                  </p>
                </div>
              </div>

              {/* Option 2 */}
              <div className="flex w-full cursor-pointer flex-col border">
                <div className="flex bg-amber-400 px-4 py-2">
                  <input className="outline-yellow-400" type="radio" />
                  <p className="ml-3 cursor-pointer font-bold">SDEK, 3 hours</p>
                </div>
                <div className="px-4 py-3">
                  <p className="pb-3 font-bold text-violet-900">&dollar;300</p>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nulla dolorum obcaecati, sequi, quidem quo eligendi soluta modi accusamus esse explicabo exercitationem!
                  </p>
                </div>
              </div>

              {/* Option 3 */}
              {/* ... Other radio button options go here */}
            </div>
          </form>
        </div>

        <div className="flex w-full items-center justify-between">
          <a href="catalog.html" className="hidden text-sm text-violet-900 lg:block">
            &larr; Back to the shop
          </a>
          <div className="mx-auto flex justify-center gap-2 lg:mx-0">
            <Link to="/Address" className="bg-purple-900 px-4 py-2 text-white">
              Previous step
            </Link>
            <Link to="/Payment" className="bg-amber-400 px-4 py-2">
              Payment method
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeliveryOptions;
