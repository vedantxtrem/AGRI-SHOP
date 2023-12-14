import React from 'react';
import weathericon from './assets/download.png';
import img2 from './assets/sunny.png';


const WeatherApp = () => {
    return (
        <div className=" text-base font-sans text-black h-full bg-White bg-fixed bg-no-repeat">
            <main className="flex flex-wrap w-[80%] lg:w-w-[70%] mx-auto my-2 text-lg">
                {/* Your HTML content goes here */}

                <div class="w-full ">
                    <h1 class="  text-2xl font-semibold  ">London, UK</h1>
                    <div class="">Sunday 4th August</div>

                </div>


                <div class="flex mt-1 justify-between items-center  sm:w-full md:flex md:mt-1 md:w-1/2 ">

                    <div class=" flex my-4 text-center   md:w-44 sm:w-1/2  px-3 ">
                        <img src={weathericon}  alt="weather icon "/>
                    </div>

                    <div class=" flex-grow text-center sm:w-1/2 sm:text-center px-3 ">
                        <div class=" text-8xl font-light sm:text-left">21&deg; </div>
                        <div class=" text-center text-base sm:text-left">Mostly Sunny</div>
                    </div>

                </div>


                <div
                    class=" justify-around p-4  border-t-0 border-b-0 border-l-2 flex border-black border-opacity-50 md:w-1/2  sm:w-full   sm:border-0  mt-4  md-4 sm:border-t-2 sm:border-b-2  ">
                    <div class="mx-3">
                        <div class="mt-4 text-2xl">23&deg;</div>
                        <div class="text-black opacity-60">High</div>
                        <div class="mt-4 text-2xl">14&deg;</div>
                        <div class="text-black opacity-60">Low</div>
                    </div>
                    <div class="mx-3">
                        <div class="mt-4 text-2xl">7mph</div>
                        <div class="text-black opacity-60">Wind</div>
                        <div class="mt-4 text-2xl">0%</div>
                        <div class="text-black opacity-60">Rain</div>
                    </div>
                    <div class="mx-3">
                        <div class="mt-4 text-2xl">05:27</div>
                        <div class="text-black opacity-60">Sunrise</div>
                        <div class="mt-4 text-2xl">20:57</div>
                        <div class="text-black opacity-60">Sunset</div>
                    </div>
                </div>

                <div class="mt-3 w-full justify-between sm:max-w-[748px]">
                    <h2 class="heading text-black font-bold text-lg ">Today's weather</h2>

                    <div
                        class="grid grid-cols-3  gap-5 my-5 md:flex md:gap-5 md:justify-around ">

                        <div class="py-2 px-2 w-24 rounded-lg bg-black bg-opacity-25 text-base text-center">
                            <div class=" mb-2">3am</div>
                            <img src={img2} alt="Mostly sunny"/>
                                <div>14&deg;</div>
                        </div>
                        <div class="py-2 px-2 w-24 rounded-lg bg-black bg-opacity-25 text-base text-center">
                            <div class=" mb-2">3am</div>
                            <img src={img2} alt="Mostly sunny"/>
                                <div>14&deg;</div>
                        </div>
                        <div class="py-2 px-2 w-24 rounded-lg bg-black bg-opacity-25 text-base text-center">
                            <div class=" mb-2">3am</div>
                            <img src={img2} alt="Mostly sunny"/>
                                <div>14&deg;</div>
                        </div>
                        <div class="py-2 px-2 w-24 rounded-lg bg-black bg-opacity-25 text-base text-center">
                            <div class=" mb-2">3am</div>
                            <img src={img2} alt="Mostly sunny"/>
                                <div>14&deg;</div>
                        </div>
                        <div class="py-2 px-2 w-24 rounded-lg bg-black bg-opacity-25 text-base text-center">
                            <div class=" mb-2">3am</div>
                            <img src={img2} alt="Mostly sunny"/>
                                <div>14&deg;</div>
                        </div>
                        <div class="py-2 px-2 w-24 rounded-lg bg-black bg-opacity-25 text-base text-center">
                            <div class=" mb-2">3am</div>
                            <img src={img2} alt="Mostly sunny"/>
                                <div>14&deg;</div>
                        </div>


                    </div>
                </div>
                



                <div class=" w-full mt-3  ">
                    <h2 class=" text-black font-bold text-lg ">Next 5 days</h2>

                    <div class=" flex-col w-full mr-5">

                        <div
                            class="flex  justify-around  items-center  my-2 p-2 w-full rounded-lg bg-black bg-opacity-25 text-lg text-center">

                            <div class="w-1/6  text-sm mb-3">
                                Tue
                                <div class="text-black opacity-60 text-xs">30/7</div>
                            </div>

                            <div class="w-1/6   text-sm ">
                                <img className='h-20' src={img2} alt="Sunny"/>
                            </div>

                            <div class="w-1/6  text-sm  ">
                                10&deg;
                                <div class="text-black opacity-60 text-xs">Low</div>
                            </div>

                            <div class="w-1/6  text-sm ">
                                21&deg;
                                <div class="text-black opacity-60 text-xs">High</div>
                            </div>

                            <div class="w-1/6  text-sm">
                                0%
                                <div class="text-black opacity-60 text-xs">Rain</div>
                            </div>

                            <div class="w-1/6 text-sm">
                                12mph
                                <div class="text-black opacity-60 text-xs">Wind</div>
                            </div>

                        </div>
                        <div
                            class="flex  justify-around  items-center  my-2 p-2 w-full rounded-lg bg-black bg-opacity-25 text-lg text-center">

                            <div class="w-1/6  text-sm mb-3">
                                Tue
                                <div class="text-black opacity-60 text-xs">30/7</div>
                            </div>

                            <div class="w-1/6   text-sm ">
                                <img className='h-20' src={img2} alt="Sunny"/>
                            </div>

                            <div class="w-1/6  text-sm  ">
                                10&deg;
                                <div class="text-black opacity-60 text-xs">Low</div>
                            </div>

                            <div class="w-1/6  text-sm ">
                                21&deg;
                                <div class="text-black opacity-60 text-xs">High</div>
                            </div>

                            <div class="w-1/6  text-sm">
                                0%
                                <div class="text-black opacity-60 text-xs">Rain</div>
                            </div>

                            <div class="w-1/6 text-sm">
                                12mph
                                <div class="text-black opacity-60 text-xs">Wind</div>
                            </div>

                        </div>
                        <div
                            class="flex  justify-around  items-center  my-2 p-2 w-full rounded-lg bg-black bg-opacity-25 text-lg text-center">

                            <div class="w-1/6  text-sm mb-3">
                                Tue
                                <div class="text-black opacity-60 text-xs">30/7</div>
                            </div>

                            <div class="w-1/6   text-sm ">
                                <img className='h-20' src={img2} alt="Sunny"/>
                            </div>

                            <div class="w-1/6  text-sm  ">
                                10&deg;
                                <div class="text-black opacity-60 text-xs">Low</div>
                            </div>

                            <div class="w-1/6  text-sm ">
                                21&deg;
                                <div class="text-black opacity-60 text-xs">High</div>
                            </div>

                            <div class="w-1/6  text-sm">
                                0%
                                <div class="text-black opacity-60 text-xs">Rain</div>
                            </div>

                            <div class="w-1/6 text-sm">
                                12mph
                                <div class="text-black opacity-60 text-xs">Wind</div>
                            </div>

                        </div>
                        <div
                            class="flex  justify-around  items-center  my-2 p-2 w-full rounded-lg bg-black bg-opacity-25 text-lg text-center">

                            <div class="w-1/6  text-sm mb-3">
                                Tue
                                <div class="text-black opacity-60 text-xs">30/7</div>
                            </div>

                            <div class="w-1/6   text-sm ">
                                <img className='h-20' src={img2} alt="Sunny"/>
                            </div>

                            <div class="w-1/6  text-sm  ">
                                10&deg;
                                <div class="text-black opacity-60 text-xs">Low</div>
                            </div>

                            <div class="w-1/6  text-sm ">
                                21&deg;
                                <div class="text-black opacity-60 text-xs">High</div>
                            </div>

                            <div class="w-1/6  text-sm">
                                0%
                                <div class="text-black opacity-60 text-xs">Rain</div>
                            </div>

                            <div class="w-1/6 text-sm">
                                12mph
                                <div class="text-black opacity-60 text-xs">Wind</div>
                            </div>

                        </div>
                        <div
                            class="flex  justify-around  items-center  my-2 p-2 w-full rounded-lg bg-black bg-opacity-25 text-lg text-center">

                            <div class="w-1/6  text-sm mb-3">
                                Tue
                                <div class="text-black opacity-60 text-xs">30/7</div>
                            </div>

                            <div class="w-1/6   text-sm ">
                                <img className='h-20' src={img2} alt="Sunny"/>
                            </div>

                            <div class="w-1/6  text-sm  ">
                                10&deg;
                                <div class="text-black opacity-60 text-xs">Low</div>
                            </div>

                            <div class="w-1/6  text-sm ">
                                21&deg;
                                <div class="text-black opacity-60 text-xs">High</div>
                            </div>

                            <div class="w-1/6  text-sm">
                                0%
                                <div class="text-black opacity-60 text-xs">Rain</div>
                            </div>

                            <div class="w-1/6 text-sm">
                                12mph
                                <div class="text-black opacity-60 text-xs">Wind</div>
                            </div>

                        </div>
                        <div
                            class="flex  justify-around  items-center  my-2 p-2 w-full rounded-lg bg-black bg-opacity-25 text-lg text-center">

                            <div class="w-1/6  text-sm mb-3">
                                Tue
                                <div class="text-black opacity-60 text-xs">30/7</div>
                            </div>

                            <div class="w-1/6   text-sm ">
                                <img className='h-20' src={img2} alt="Sunny"/>
                            </div>

                            <div class="w-1/6  text-sm  ">
                                10&deg;
                                <div class="text-black opacity-60 text-xs">Low</div>
                            </div>

                            <div class="w-1/6  text-sm ">
                                21&deg;
                                <div class="text-black opacity-60 text-xs">High</div>
                            </div>

                            <div class="w-1/6  text-sm">
                                0%
                                <div class="text-black opacity-60 text-xs">Rain</div>
                            </div>

                            <div class="w-1/6 text-sm">
                                12mph
                                <div class="text-black opacity-60 text-xs">Wind</div>
                            </div>

                        </div>
                        


                    </div>
                </div>
            </main>
        </div>
    );
};

export default WeatherApp;
